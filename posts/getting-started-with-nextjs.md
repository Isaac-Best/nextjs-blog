---
title: 'Nextjs-blog'
date: '2023-8-19'
image: getting-started-nextjs.png
excerpt: Quick rundown of NextJS features and blog documentation 
isFeatured: false
---

# Leveraging Next.js for This Blog

This blog uses a few features provided by Next.js, a React framework optimized for production web apps. Here is a short description of some of the core features powering this blog:

## File-Based Routing

Next.js simplifies routing with its file-based routing system. Rather than configuring routes externally, developers can mirror their intended route structure through the file structure. This approach boosts clarity, reduces configuration overhead, and enhances code organization.

## Pre-rendering 

In this blog I use static site generation - the webpages are built once at build time and served per request. This ensures fast loading and an SEO friendly website for search engines. With the incremental static regeneration option I can update webpages in the background ensuring content remains fresh.

## Image Optimization

Next.js automatically handles image optimization with lazy loading, resizing, and WebP support. Images load efficiently with minimal effort.


To be continued...