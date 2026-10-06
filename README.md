# Outgoings

A personal tracker for day-to-day spending, bills (insurance and subscriptions) and salary.

**Home** shows this month: spending against your budget or your usual month, bills still due, where the money went and recent entries. **+** logs a spend or income. **Activity** has the year at a glance, every entry by month, earlier years, and a search across everything. **Bills** covers insurance and subscriptions, split into cash, CPF and invested, with a year-on-year comparison. **More** holds income, budget, imports, backup and a spreadsheet (CSV) export. Deleting an entry shows an Undo button for a few seconds.

**Your data never leaves your phone.** The app is a set of static files. GitHub only serves the app's code; everything you enter is saved in the app's own storage on your device. There's no server, no account and no analytics, and the app loads nothing from other websites.

## Put it online (one time, about 10 minutes)

1. On github.com, click **+ → New repository**.
   - Name: `outgoings` (any name works)
   - **Public**: GitHub Pages is free for public repos. Only the app's code is public; your data is never in the repo.
   - Click **Create repository**.
2. On the new repo page, click **uploading an existing file**. Drag in **everything inside this folder**: `index.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll`, and the `fonts` and `icons` folders. Click **Commit changes**.
   - `.nojekyll` is hidden on a Mac. Press `Cmd + Shift + .` in Finder to show it. It's optional anyway.
3. Go to **Settings → Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main**, and folder to **/ (root)**. Click **Save**.
4. Wait about a minute. The page shows your link: `https://<your-username>.github.io/outgoings/`

## Install on your iPhone

1. Open the link in **Safari** (it has to be Safari).
2. Tap **Share → Add to Home Screen → Add**.
3. Always open Outgoings **from the Home Screen icon**. The Home Screen app keeps its own storage, separate from Safari tabs.

## Move your data over from the Claude version

1. In the Claude version, tap **Export backup** and save the file to Files.
2. In the new app, tap **Restore from backup** and pick that file.

Or start fresh: in Google Sheets choose **File → Download → CSV**, then in the app use **More → Insurance from Google Sheet**.

## Keep a backup

Your data lives only on this phone. Deleting the app from your Home Screen, clearing Safari's website data, or losing the phone erases it. Use **Export backup** every few weeks and save it to Files. The app reminds you after 30 days.

## Shortcuts

- `…/outgoings/#log` opens the add form. `#paynow` opens it with PayNow selected. `#income` opens the income form.
- iOS opens links from the Shortcuts app in **Safari, not the Home Screen app**, and those two keep separate data. So for a quick-log button, long-press the Home Screen icon instead (it offers Log spend / Log PayNow where supported), or just open the app.
- For Apple Pay taps, use the shortcut that appends to a text file, then **More → Apple Pay taps** in the app.

## Updating the app

Upload the changed files to the repo again, replacing the old ones. The app picks up the new version the next time you open it while online.
