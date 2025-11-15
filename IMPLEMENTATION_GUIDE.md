# Advanced Portfolio Implementation Guide

## Complete Setup Instructions

This guide walks you through implementing all advanced features for your Next.js portfolio.

## Part 1: Project Setup

### 1.1 Install Next.js
```bash
npx create-next-app@latest portfolio --typescript --tailwind
cd portfolio
```

### 1.2 Install Additional Dependencies
```bash
npm install next-themes framer-motion lucide-react gray-matter @next/mdx @mdx-js/loader @mdx-js/react
```

## Part 2: Project Structure

Create the following folder structure:
```
portfolio/
├── app/
│   ├── components/
│   │   ├── ThemeToggle.tsx         # Dark mode toggle
│   │   ├── Hero.tsx                # Hero section with animations
│   │   ├── BlogCard.tsx            # Blog post card
│   │   ├── Navbar.tsx              # Navigation
│   │   └── Footer.tsx              # Footer
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx            # Dynamic blog post page
│   │   └── page.tsx                # Blog listing page
│   ├── layout.tsx                  # Root layout with theme provider
│   ├── page.tsx                    # Home page
│   └── globals.css                 # Global styles
├── lib/
│   └── blog.ts                     # Blog utilities
├── posts/                          # Blog posts in MDX
│   ├── first-post.mdx
│   └── getting-started.mdx
├── public/
│   └── images/
├── next.config.js                  # Next.js configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json
```

## Part 3: Theme Configuration

### 3.1 Update app/layout.tsx
```typescript
'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### 3.2 Update globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  color-scheme: light dark;
}

body {
  @apply bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300;
}
```

## Part 4: Create Blog Section

### 4.1 Create Sample Blog Posts

Create `posts/first-post.mdx`:
```mdx
---
title: My First Blog Post
description: A guide to getting started with this portfolio
date: 2024-01-15
readingTime: 5 min read
tags: [guide, portfolio, nextjs]
---

# Welcome to My Blog

This is my first blog post. I'll be sharing my thoughts and experiences here.

## Section 1
Content goes here...
```

### 4.2 Create blog/page.tsx (Blog Listing)
```typescript
'use client';

import { getAllBlogPosts } from '@/lib/blog';
import { BlogCard } from '@/app/components/BlogCard';

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
```

### 4.3 Create blog/[slug]/page.tsx (Blog Post)
```typescript
'use client';

import { getBlogPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600 dark:text-gray-400 mb-8">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readingTime}</span>
        </div>
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
```

## Part 5: Home Page Implementation

Create `app/page.tsx`:
```typescript
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
```

## Part 6: Deployment

### 6.1 Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### 6.2 Environment Variables
No additional environment variables needed for the basic setup.

## Part 7: Customization

### 7.1 Add Your Content
- Update `Hero.tsx` with your name and bio
- Replace placeholder images
- Customize color scheme in `tailwind.config.js`
- Add your blog posts in the `posts/` directory

### 7.2 Add More Sections
- Create `components/Projects.tsx` for project showcase
- Create `components/Skills.tsx` for skills section
- Create `components/Contact.tsx` for contact form

## Part 8: Advanced Features

### 8.1 Add Syntax Highlighting for Blog
```bash
npm install rehype-pretty-code shiki
```

### 8.2 Add Search Functionality
```bash
npm install fuse.js
```

### 8.3 Add RSS Feed
Create `app/rss.xml/route.ts` to generate RSS feed.

## Troubleshooting

### Theme not persisting
- Ensure `ThemeProvider` wraps the entire app
- Check that `suppressHydrationWarning` is set on html element

### Blog posts not loading
- Verify posts are in `posts/` directory
- Check file extension is `.mdx` or `.md`
- Ensure frontmatter is properly formatted

### Build errors
- Clear `.next` folder and rebuild
- Ensure all imports are correctly typed
- Check for circular dependencies

## Support
For more information, visit:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
