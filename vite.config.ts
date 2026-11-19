import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";
import { ROUTES } from "./src/constants";

/**
 * GitHub Pages only knows about files, so a deep link like /sponsor-a-child would
 * otherwise fall through to 404.html (HTTP 404, then a JS redirect to /). After the
 * build, copy index.html to <route>/index.html and <route>.html for every client
 * route so each one is served with HTTP 200. 404.html stays for unknown paths.
 * /login is skipped: it only redirects off-site to the Angel Tree app.
 */
const PAGE_TITLES: Partial<Record<string, string>> = {
  [ROUTES.PRIVACY]: "Privacy Policy | Joy Drop",
  [ROUTES.TERMS]: "Terms of Service | Joy Drop",
};

const spaRoutePages = (): Plugin => {
  let outDir = "dist";
  return {
    name: "spa-route-pages",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const indexHtml = fs.readFileSync(path.join(outDir, "index.html"), "utf8");
      const routes = Object.values(ROUTES).filter(
        (route) => route !== ROUTES.HOME && route !== ROUTES.LOGIN,
      );
      for (const route of routes) {
        const title = PAGE_TITLES[route];
        const html = title
          ? indexHtml.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
          : indexHtml;
        const name = route.replace(/^\/+|\/+$/g, "");
        fs.mkdirSync(path.join(outDir, name), { recursive: true });
        fs.writeFileSync(path.join(outDir, name, "index.html"), html);
        fs.writeFileSync(path.join(outDir, `${name}.html`), html);
      }
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Custom domain (joydrop.app) doesn't need a subpath
  root: process.cwd(), // Explicitly set root directory
  plugins: [react(), spaRoutePages()],
  assetsInclude: ["**/*.JPEG", "**/*.JPG", "**/*.PNG"], // Handle uppercase image extensions
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0', // Listen on all addresses (explicit for Docker)
    port: 5173,
    strictPort: true, // Exit if port is already in use
    watch: {
      usePolling: true, // Required for file watching in Docker
    },
  },
});

