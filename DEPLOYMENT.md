# GitHub Pages Deployment Guide

## 🚀 Quick Deploy Steps

### 1. Push to GitHub

```bash
# Initialize git (if not already done)
git add .
git commit -m "Initial Red Tide Construction website"

# Create repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/redtideconstruction.com.git
git branch -M main
git push -u origin main
```

### 2. Install Dependencies & Deploy

```bash
# Install dependencies
npm install

# Deploy to GitHub Pages
npm run deploy
```

This will:
- Build your React app
- Create a `gh-pages` branch
- Deploy the build folder to GitHub Pages

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select branch: **gh-pages** and folder: **/ (root)**
4. Click **Save**

---

## 🌐 Custom Domain Setup (name.com)

### Step 1: Configure DNS on name.com

1. Log in to your **name.com** account
2. Go to **My Domains** → Select **redtideconstruction.com**
3. Click on **Manage Domain** → **DNS Records**

### Step 2: Add DNS Records

**Option A: Using CNAME (Recommended for www subdomain)**

Add these records:

| Type  | Host | Answer/Value | TTL |
|-------|------|--------------|-----|
| CNAME | www  | YOUR_USERNAME.github.io. | 300 |
| A     | @    | 185.199.108.153 | 300 |
| A     | @    | 185.199.109.153 | 300 |
| A     | @    | 185.199.110.153 | 300 |
| A     | @    | 185.199.111.153 | 300 |

**Option B: Using Apex Domain (redtideconstruction.com without www)**

Add these A records pointing to GitHub Pages IPs:

| Type  | Host | Answer/Value | TTL |
|-------|------|--------------|-----|
| A     | @    | 185.199.108.153 | 300 |
| A     | @    | 185.199.109.153 | 300 |
| A     | @    | 185.199.110.153 | 300 |
| A     | @    | 185.199.111.153 | 300 |

**Recommended: Add both www and apex domain support**

### Step 3: Configure Custom Domain on GitHub

1. Go to your repo: **Settings** → **Pages**
2. Under "Custom domain", enter: `redtideconstruction.com`
3. Click **Save**
4. Wait for DNS check to complete (can take up to 24-48 hours)
5. ✅ Check "Enforce HTTPS" once DNS propagates

### Step 4: Update CNAME File (Already Done)

The `public/CNAME` file already contains:
```
redtideconstruction.com
```

This tells GitHub Pages to serve your site at your custom domain.

---

## 🔄 Updating Your Site

Anytime you make changes:

```bash
git add .
git commit -m "Update website"
git push origin main
npm run deploy
```

The `npm run deploy` command will rebuild and redeploy to GitHub Pages.

---

## ⏱️ DNS Propagation Timeline

- **Immediate**: Changes saved on name.com
- **5-15 minutes**: DNS starts propagating
- **Up to 48 hours**: Full global propagation (usually much faster)

### Check DNS Propagation:
- Use: https://www.whatsmydns.net/
- Enter: `redtideconstruction.com`
- Check if A records point to GitHub Pages IPs

---

## 🔍 Troubleshooting

### Site shows 404
- Wait for DNS to propagate
- Check GitHub Pages is enabled and using `gh-pages` branch
- Verify CNAME file exists in `public/` folder

### Custom domain not working
- Verify DNS records on name.com
- Check "Custom domain" setting in GitHub Pages
- Wait 24-48 hours for full DNS propagation
- Clear browser cache

### HTTPS not available
- DNS must fully propagate first
- Can take several hours after DNS is configured
- Check back and enable "Enforce HTTPS" when available

---

## 📝 Name.com Specific Notes

1. **DNS Management**: name.com → My Domains → [Your Domain] → DNS Records
2. **TTL Settings**: Use 300 (5 minutes) for faster updates during setup
3. **Remove Old Records**: Delete any conflicting A or CNAME records for @ and www
4. **Verification**: name.com provides DNS propagation status in their dashboard

---

## ✅ Final Checklist

- [ ] Repository pushed to GitHub
- [ ] `npm run deploy` executed successfully
- [ ] GitHub Pages enabled on `gh-pages` branch
- [ ] DNS A records added on name.com (pointing to GitHub IPs)
- [ ] Custom domain configured in GitHub Settings
- [ ] DNS propagated (check with whatsmydns.net)
- [ ] HTTPS enforced on GitHub Pages
- [ ] Site accessible at redtideconstruction.com

---

## 🎉 Success!

Your site will be live at:
- https://redtideconstruction.com (after DNS propagation)
- https://YOUR_USERNAME.github.io/redtideconstruction.com (immediate)

**Initial deployment**: Use the github.io URL
**After DNS setup**: Your custom domain will work!