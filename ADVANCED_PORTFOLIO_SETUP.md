# Advanced Portfolio Setup Guide

## Overview
This guide covers converting your portfolio to Next.js with advanced features including dark mode, animations, and a blog section.

## Installation Steps

### 1. Install Dependencies
```bash
npm install next@latest react@latest react-dom@latest
npm install next-themes
npm install framer-motion
npm install gray-matter remark remark-html
npm install @next/mdx @mdx-js/loader @mdx-js/react
npm install lucide-react
```

### 2. File Structure
```
app/
├── layout.tsx          # Root layout with theme provider
├── page.tsx            # Home page
├── globals.css         # Global styles
blog/
├── [slug]
│   └── page.tsx       # Blog post page
├── page.tsx           # Blog listing page
components/
├── ThemeToggle.tsx    # Dark mode toggle
├── Hero.tsx           # Hero section with animations
├── Projects.tsx       # Projects showcase
├── Skills.tsx         # Skills section
├── BlogCard.tsx       # Blog post card
├── Navbar.tsx         # Navigation bar
├── Footer.tsx         # Footer component
lib/
├── blog.ts            # Blog utilities
posts/
├── first-post.mdx    # Example blog post
public/
└── images/
```

### 3. Key Features

#### Dark Mode
- Uses `next-themes` for seamless dark/light mode toggle
- Persists preference in localStorage
- Smooth transitions between themes

#### Animations
- Framer Motion for smooth page transitions
- Component entrance animations
- Scroll-triggered animations
- Hover effects and interactions

#### Blog Section
- MDX support for blog posts
- Syntax highlighting
- Reading time estimate
- Tag filtering
- Search functionality

#### Performance
- Image optimization with Next.js Image component
- Code splitting
- Static generation for blog posts
- Incremental Static Regeneration (ISR)

## Configuration Files

### next.config.js
- MDX support configuration
- Image optimization settings
- Build optimization

### tailwind.config.js
- Dark mode configuration
- Custom color schemes
- Extended animations

## Deployment
- Deploy to Vercel for best Next.js experience
- Automatic deployments on git push
- Preview deployments for PR reviews

## Next Steps
1. Update package.json with dependencies
2. Create app directory structure
3. Configure theme provider
4. Build components with animations
5. Add blog posts in MDX format
