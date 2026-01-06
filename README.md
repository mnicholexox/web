# Website

A modern React website built with Vite, TypeScript, and Tailwind CSS.

## Quick Start (Docker - Recommended)

If you don't have Node.js installed, use Docker:

1. **Build and start the container:**
   ```bash
   docker-compose up --build
   ```

2. **Open your browser:**
   Navigate to `http://localhost:5173`

3. **Stop the container:**
   Press `Ctrl+C` or run:
   ```bash
   docker-compose down
   ```

## Local Development (If you have Node.js)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   └── HeroBanner.tsx
│   ├── pages/
│   │   └── Index.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── Dockerfile
├── docker-compose.yml
└── package.json
```

