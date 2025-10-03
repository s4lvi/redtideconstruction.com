# 🚀 Quick Start - Deploy to GitHub Pages

## Prerequisites
- GitHub account
- Git installed
- Node.js installed
- Domain registered on name.com

## Step 1: Deploy to GitHub

```bash
# Install dependencies
npm install

# Create GitHub repository at: github.com/new
# Name it: redtideconstruction.com

# Push code
git add .
git commit -m "Initial commit - Red Tide Construction website"
git remote add origin https://github.com/YOUR_USERNAME/redtideconstruction.com.git
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

## Step 2: Enable GitHub Pages

1. Go to: `https://github.com/YOUR_USERNAME/redtideconstruction.com/settings/pages`
2. Source: **gh-pages** branch, **/ (root)** folder
3. Click **Save**
4. Site will be live at: `YOUR_USERNAME.github.io/redtideconstruction.com`

## Step 3: Configure Custom Domain (name.com)

### On name.com:
1. Login → **My Domains** → **redtideconstruction.com**
2. **DNS Records** → Add these:

```
Type: A     | Host: @   | Value: 185.199.108.153
Type: A     | Host: @   | Value: 185.199.109.153
Type: A     | Host: @   | Value: 185.199.110.153
Type: A     | Host: @   | Value: 185.199.111.153
Type: CNAME | Host: www | Value: YOUR_USERNAME.github.io.
```

### On GitHub:
1. Go to: `https://github.com/YOUR_USERNAME/redtideconstruction.com/settings/pages`
2. Custom domain: `redtideconstruction.com`
3. **Save**
4. Wait 24-48 hours for DNS
5. Enable **Enforce HTTPS**

## Step 4: Update Site

```bash
# Make changes to your code
git add .
git commit -m "Update website"
git push origin main
npm run deploy
```

---

## ✅ Done!

- **Immediate**: `YOUR_USERNAME.github.io/redtideconstruction.com`
- **After DNS**: `https://redtideconstruction.com`

📖 Full guide: See `DEPLOYMENT.md`