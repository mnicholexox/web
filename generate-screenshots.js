const { execSync } = require('child_process');
const path = require('path');

const mockups = [1, 2, 3, 4, 5];

for (const num of mockups) {
  const htmlPath = path.resolve(__dirname, `mockups/mockup-${num}/index.html`);
  const screenshotPath = path.resolve(__dirname, `mockups/mockup-${num}/preview.png`);
  
  console.log(`Generating screenshot for mockup-${num}...`);
  
  try {
    // Use npx playwright to take screenshot
    execSync(`npx -y playwright screenshot "${htmlPath}" "${screenshotPath}" --viewport-size=1440x900 --full-page`, {
      stdio: 'inherit',
      cwd: __dirname
    });
    console.log(`✓ Saved ${screenshotPath}\n`);
  } catch (error) {
    console.error(`Could not generate screenshot for mockup-${num}. You can open ${htmlPath} in your browser instead.\n`);
  }
}

console.log('Done! You can also open the HTML files directly in your browser.');
