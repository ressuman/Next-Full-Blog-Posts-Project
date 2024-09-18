---
title: "Getting Started with NextJS"
date: "2023-10-15"
author: "Jack Maers"
image: next-js.avif
excerpt: "An introductory guide to help you get started with Next.js, a powerful React framework for building fast, server-rendered applications."
isFeatured: true
---

NextJS is a **framework for ReactJS**.

Wait a second ... a "framework" for React? Isn't React itself already a framework for JavaScript?

Well ... first of all, React is a "library" for JavaScript. That seems to be important for some people.

Not for me, but still, there is a valid point: React already is a framework / library for JavaScript. So it's already an extra layer on top of JS.

## Why would we then need NextJS?

Because NextJS makes building React apps easier — especially React apps that should have server-side rendering (though it does way more than just take care of that). It provides many built-in features that simplify your development process and improve the performance of your app right out of the box.

With NextJS, you don’t need to manually configure server-side rendering or complex routing systems. It allows you to focus more on building features and less on the technical setup.

In this article, we'll dive into the core concepts and features NextJS has to offer:

- File-based Routing
- Built-in Page Pre-rendering
- Rich Data Fetching Capabilities
- Image Optimization
- Automatic Code Splitting
- SEO Benefits
- Much More

## File-based Routing

File-based routing is one of NextJS's core features. You don't need to configure any routing manually. Simply create a `.js` or `.jsx` file inside the `pages/` directory, and NextJS automatically creates a corresponding route based on the file name.

![Create routes via your file + folder structure](/images/posts/getting-started-with-nextjs/next-js1.avif)

For example:

- `pages/index.js` becomes `/`
- `pages/about.js` becomes `/about`

This allows you to create dynamic routes easily by using square brackets for dynamic parameters. For instance, `pages/posts/[id].js` allows you to handle URLs like `/posts/1`.

### Built-in Page Pre-rendering

NextJS supports **Static Generation** and **Server-side Rendering**. This means that NextJS can pre-render the HTML for every page, improving the overall performance and SEO of your application.

- **Static Generation (SSG)**: Pre-generates pages at build time.
- **Server-side Rendering (SSR)**: Pre-generates pages on each request.

This flexibility allows developers to choose the most appropriate rendering method based on their specific use case.

## Rich Data Fetching Capabilities

NextJS provides several ways to fetch data from external sources, either at build time or runtime. The two main methods for data fetching are:

1. **getStaticProps** — Fetches data at build time for static generation.
2. **getServerSideProps** — Fetches data at request time for server-side rendering.

You can also use **getStaticPaths** to define dynamic routes based on data. This makes it super easy to build blogs, e-commerce sites, or any app that needs dynamic content.

## Image Optimization

NextJS automatically optimizes images for you. With the `<Image>` component, you get built-in lazy loading and resizing, ensuring images are always served in the most efficient format for every device and screen size.

This improves your app's loading speed and SEO ranking.

---

By adding sections on **automatic code splitting**, **SEO benefits**, and elaborating on the **data fetching** and **image optimization**, the article now offers a more comprehensive overview of NextJS features.
