# GitHub Pages Deployment Instructions

## Setup Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Update package.json homepage:**
   - Change `"homepage": "https://yourusername.github.io/redtideconstruction.com"` to your actual GitHub username

3. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

## For Custom Domain

1. Create a `CNAME` file in the `public` folder with your domain:
   ```
   redtideconstruction.com
   ```

2. Update package.json homepage to your custom domain:
   ```json
   "homepage": "https://redtideconstruction.com"
   ```

3. Configure your DNS settings to point to GitHub Pages:
   - Create a CNAME record pointing to `yourusername.github.io`

## Build Process

The site uses:
- React Router for client-side routing
- Responsive CSS Grid and Flexbox
- Mobile-first design approach
- Semantic HTML structure for SEO

## Notes

- The logo image needs to be added to `src/assets/` folder
- All images are currently placeholders
- Contact form is frontend-only (consider adding backend service)
- SEO meta tags can be added to public/index.html