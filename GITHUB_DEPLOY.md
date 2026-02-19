# How to Deploy to GitHub Pages

I have automated the deployment process for you!

## Step 1: Create a Repository on GitHub
1.  Go to [github.com/new](https://github.com/new).
2.  Name the repository **`fidel-portfolio`** (or whatever you like).
3.  Click **Create repository**.

## Step 2: Connect and Deploy
Open your terminal (or Command Prompt) in this folder and run these commands one by one:

```bash
# 1. Initialize Git (if you haven't already)
git init

# 2. Add all files
git add .
git commit -m "Initial portfolio commit"

# 3. Rename branch to main
git branch -M main

# 4. Connect to your new repository
# REPLACE 'Fidelkyalo' with your actual username if different
# REPLACE 'fidel-portfolio' with your actual repo name
git remote add origin https://github.com/Fidelkyalo/Fidel_portfolio.git

# 5. Deploy!
npm run deploy
```

## Step 3: Automatic Sync (New!)
If you want your changes to be automatically committed and pushed to GitHub whenever you save a file:
1.  Open your terminal in this folder.
2.  Run: **`npm run sync`**
3.  Keep that terminal window open. It will monitor your files and push updates automatically!

## Step 4: Check it out
*   Once the deployment or sync finishes, your site will be updated.
*   URL: `https://Fidelkyalo.github.io/Fidel_portfolio`
*   (Verify in Repo Settings -> Pages).

> **Note**: You can still use `npm run deploy` for manual deployment to GitHub Pages.
