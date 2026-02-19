# How to Deploy to cPanel (fidel.pizzatechnologies.co.ke)

Your project is built and ready! The "Production" version of your site is located in the **`dist`** folder on your desktop.

## Step 1: Prepare Your Files
1.  Go to your project folder: `C:\Users\user\OneDrive\Desktop\Fidel Portfolio`.
2.  Open the **`dist`** folder.
3.  **Select all files** inside `dist` (Ctrl+A).
4.  Right-click -> **Send to** -> **Compressed (zipped) folder**.
5.  Name it `portfolio.zip`.

## Step 2: Configure cPanel
1.  Log in to your **Pizza Technologies cPanel**.
2.  Go to **Domains** (or "Subdomains").
3.  Create the new subdomain: **`fidel`**.
    *   This will create a folder, usually `public_html/fidel` or `fidel.pizzatechnologies.co.ke`.

## Step 3: Upload
1.  Open **File Manager** in cPanel.
2.  Navigate to the folder created for your subdomain (e.g., `public_html/fidel`).
3.  Click **Upload** and select your `portfolio.zip` file.
4.  Once uploaded, right-click `portfolio.zip` and choose **Extract**.
5.  **Important**: Ensure the files (`index.html`, `assets/`, etc.) are directly in the `fidel` folder, not inside another sub-folder.

## FAQ: Can I upload the whole folder?
**No, you should not.**
*   The main folder contains **Source Code** (React/JSX) which browsers cannot read directly.
*   It also contains `node_modules` which has thousands of files you don't need online.
*   The **`dist`** folder contains the **Production Build**: the optimized, "translated" version that works on the web.
*   **Think of it like this**: The main folder is the *recipe and ingredients*. The `dist` folder is the *cooked meal*. You serve the meal, not the recipe!

## FAQ: Why won't it open if I just double-click index.html?
**Security Rules.**
*   Modern browsers block "complex" websites from running directly off your hard drive (`file://` protocol) for security.
*   That's why you see a **blank page**.
*   **Hosting** it (or using `View Portfolio.bat`) serves it via the web protocol (`http://`), which enables all the features to work perfectly.

## Step 4: Verify
1.  Open [fidel.pizzatechnologies.co.ke](http://fidel.pizzatechnologies.co.ke) in your browser.
2.  Your matrix-style portfolio should load instantly!

> **Note**: Since we set `base: './'`, your site is perfectly configured to work in any folder or subdomain you put it in.
