# Portfolio Connected to Sanity CMS

Your portfolio is now fully connected to Sanity! 🎉

## What's Been Set Up

### 1. **Sanity Client Installed**
- `@sanity/client` package added to your main project
- Client configured in `src/sanityClient.js` with your project ID: `ja5nroqr`

### 2. **Sanity Schemas Created**
Four content types are now available in your Sanity Studio:

- **Hero Section** (`hero`) - Main landing section content
  - Main title, subtitle, hero image URL, image overlay text

- **Projects** (`project`) - Portfolio projects
  - Title, description, URL, image URL, display order

- **About** (`about`) - About section content
  - Description, skills list, interests list, location

- **Contact** (`contact`) - Contact information
  - Email, LinkedIn URL, support link (Ko-fi, etc.)

### 3. **App.tsx Updated**
Your portfolio now:
- Fetches all content from Sanity on load
- Shows a loading state while fetching data
- Falls back to default content if Sanity data isn't available yet
- Displays content dynamically from Sanity

## How to Add Content to Sanity

### Step 1: Start Sanity Studio

```powershell
cd my-sanity-project
npm run dev
```

**Note:** If port 3333 is in use, stop the process using it first or use:
```powershell
npx sanity dev --port 3334
```

### Step 2: Open Sanity Studio

Open your browser and go to: **http://localhost:3333**

### Step 3: Add Content

1. **Create Hero Content:**
   - Click "Hero Section" in the sidebar
   - Click "Create new"
   - Fill in your main title and subtitle
   - Add your hero image URL
   - Add overlay text
   - Click "Publish"

2. **Add Projects:**
   - Click "Project" in the sidebar
   - Click "Create new"
   - Add project title, description, URL, image URL
   - Set display order (lower numbers appear first)
   - Click "Publish"
   - Repeat for each project

3. **Create About Content:**
   - Click "About Section"
   - Click "Create new"
   - Add your description
   - Add skills (click "+ Add item" for each skill)
   - Add interests
   - Add location
   - Click "Publish"

4. **Add Contact Info:**
   - Click "Contact Information"
   - Click "Create new"
   - Add email, LinkedIn URL, support link
   - Click "Publish"

### Step 4: Test Your Portfolio

```powershell
cd ..
npm run dev
```

Open your portfolio and you should see your Sanity content!

## Key Features

✅ **Real-time Updates** - Edit content in Sanity, refresh your portfolio to see changes

✅ **Fallback Content** - If Sanity data isn't available, default content displays

✅ **Type-Safe** - TypeScript interfaces ensure data consistency

✅ **Loading State** - User sees a loading screen while data fetches

## Sanity Project Details

- **Project ID:** ja5nroqr
- **Dataset:** production
- **API Version:** 2023-01-01
- **CDN:** Enabled (faster reads)

## Deploying to Production

When you deploy your portfolio:

1. Your Sanity content will automatically be available (already configured)
2. Make sure your deployed app can access `https://ja5nroqr.api.sanity.io`
3. No additional configuration needed!

## Managing Content

You can also deploy Sanity Studio separately or manage content via:
- **Sanity Studio** (localhost or deployed)
- **Sanity Vision** (built-in query tool)
- **Sanity API** (programmatic access)

## Troubleshooting

### Content Not Showing?
1. Make sure you've published (not just saved) your content in Sanity
2. Check browser console for errors
3. Verify Sanity Studio is running and accessible

### TypeScript Errors?
The project includes `sanityClient.d.ts` for TypeScript support. If you see errors, restart your TypeScript server.

### Port Already in Use?
```powershell
# Find and stop the process using port 3333
Get-Process -Id (Get-NetTCPConnection -LocalPort 3333).OwningProcess | Stop-Process
```

## Next Steps

1. Add your actual project data in Sanity Studio
2. Upload images to a CDN (Unsplash, Cloudinary, or Sanity's image API)
3. Test the portfolio thoroughly
4. Deploy both your portfolio and Sanity Studio

Enjoy your CMS-powered portfolio! 🚀
