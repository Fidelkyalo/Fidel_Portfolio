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
git remote add origin https://github.com/Fidelkyalo/fidel-portfolio.git

# 5. Deploy!
npm run deploy
```

## Step 3: Check it out
*   Once the `npm run deploy` command finishes, your site will be published.
*   It should be available at: `https://Fidelkyalo.github.io/fidel-portfolio`
*   (Go to your Repo Settings -> Pages to verify the URL).

> **Note**: If you change anything later, just run `npm run deploy` again to update the live site!
