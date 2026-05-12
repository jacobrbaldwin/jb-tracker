# JB's KE Tracker — Setup Guide

## Step 1: Supabase Setup (cloud sync)

1. Go to **supabase.com** and sign in
2. Open your project → click **SQL Editor**
3. Paste and run this query to create the table:

```sql
create table tracker (
  id text primary key,
  data jsonb,
  updated_at timestamp default now()
);
alter table tracker enable row level security;
create policy "allow all" on tracker for all using (true) with check (true);
```

4. Go to **Settings → API** and copy:
   - **Project URL** (looks like `https://xxxx.supabase.co`)
   - **anon/public** key (long string starting with `eyJ`)

5. Open the app → tap **⚙️ Parent** → enter PIN **1986**
6. Paste the URL and key into the Supabase fields → tap **Save & Sync**

---

## Step 2: GitHub Pages Setup

1. Go to **github.com** → click **+** → **New repository**
2. Name it: `jb-tracker` (or anything you like)
3. Set it to **Public** → click **Create repository**
4. Click **uploading an existing file**
5. Upload ALL files:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icons/` folder (all 3 images inside)
6. Click **Commit changes**
7. Go to **Settings → Pages**
8. Under **Source**, select `main` branch → click **Save**
9. Your app URL will appear: `https://YOUR-USERNAME.github.io/jb-tracker`

---

## Step 3: Add to iPhone Home Screen

1. Open the app URL in **Safari** (must be Safari for iOS)
2. Tap the **Share** button (box with arrow)
3. Scroll down → tap **Add to Home Screen**
4. Name it **JB's KE Tracker** → tap **Add**
5. The app icon appears on the home screen!

Share the same URL with Jackson's device and repeat Step 3.

---

## Parent PIN: 1986

From the parent panel you can:
- Fill in chores for each day
- Set the Wednesday IRAC issue topic
- Adjust the batting gloves streak counter
- Update Supabase credentials

---

## Prize Rules (built in)
- ✅ 100% today → +15 min screen time
- 🍦 100% this week → Movie or ice cream
- 🥊 3 weeks in a row at 90%+ → New batting gloves
