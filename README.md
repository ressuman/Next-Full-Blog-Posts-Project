# Next Full Blog Posts

## Overview

**Next Full Blog Posts** is a full-featured blog application built with **Next.js 14**. It supports creating, displaying, and managing blog posts, including markdown support for formatting content. Users can view featured posts, navigate through all available posts, and access individual post details. The application also features a contact form integrated with a backend API for sending messages, along with other utility features like date formatting and image handling.

---

## Features

- **Homepage** with featured blog posts and a hero section.
- **All Posts** page displaying the list of available blog posts.
- **Detailed Post View** for individual blog articles.
- **Markdown Support** for formatting posts.
- **Contact Form** for user interaction.
- **API Integration** for handling contact form submissions.
- **Optimized for Performance** using modern frontend practices.
- **Reusable UI Components** for consistent design.

---

## Tech Stack

- **Next.js**: Server-side rendering, API routes, and dynamic routing.
- **React**: UI components and hooks.
- **Markdown**: Blog content in markdown format.
- **CSS Modules**: Scoped styling for components.
- **SQLite**: For persisting data (dummy posts in this case).
- **Cloudinary**: (optional) Image handling for post thumbnails.

---

## Folder Structure

Here’s a breakdown of the project structure:

```
📦 components
 ┣ 📂contact
 ┃ ┗ 📂contact-form
 ┃ ┃ ┣ 📜contact-form.js      # Contact form component
 ┃ ┃ ┗ 📜contact-form.module.css # Styles for the contact form
 ┣ 📂ui
 ┃ ┗ 📜notification.js        # Notification for form submission
 ┃ ┗ 📜notification.module.css # Styles for the notification
 ┣ 📂home-page
 ┃ ┣ 📂featured-posts
 ┃ ┃ ┗ 📜featured-posts.js     # Display featured posts
 ┃ ┃ ┗ 📜featured-posts.module.css # Styles for featured posts
 ┃ ┗ 📂hero
 ┃ ┃ ┗ 📜hero.js              # Hero section of the homepage
 ┃ ┃ ┗ 📜hero.module.css      # Styles for the hero section
 ┣ 📂layout
 ┃ ┗ 📂main-navigation
 ┃ ┃ ┣ 📜main-navigation.js   # Main navigation bar
 ┃ ┃ ┗ 📜main-navigation.module.css # Styles for navigation
 ┗ 📂posts
   ┣ 📂all-posts
   ┃ ┣ 📜all-posts.js         # Display all blog posts
   ┃ ┗ 📜all-posts.module.css # Styles for all posts page
   ┣ 📂post-detail
   ┃ ┣ 📂post-content
   ┃ ┃ ┣ 📜post-content.js    # Detailed post content
   ┃ ┃ ┗ 📜post-content.module.css # Styles for post content
   ┃ ┣ 📂post-header
   ┃ ┃ ┣ 📜post-header.js     # Post header (title and image)
   ┃ ┃ ┗ 📜post-header.module.css # Styles for post header
   ┗ 📂posts-grid
     ┣ 📜posts-grid.js        # Grid layout for displaying posts
     ┗ 📜posts-grid.module.css # Styles for the grid layout
```

### Other Key Directories:

- **data**: Contains dummy blog data.
- **helpers**: Utility functions to handle database connections, contact form validation, etc.
- **lib**: Markdown blog posts stored here, along with content for each post.
- **pages**: Next.js pages for blog listing, blog detail, contact form, and API route for form submission.
- **public**: Static assets like images for posts.
- **styles**: Global styles used throughout the project.
- **utils**: Utility functions for date formatting, image handling, and markdown rendering.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/next-full-blog-posts.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables:

   Create an `.env.local` file in the root of your project and add the following:

   ```bash
   DATABASE_URL=your-database-url
   NEXT_PUBLIC_API_URL=your-api-url
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## Features in Detail

### 1. Homepage

- Displays a hero section with a welcome message.
- Shows featured posts from the blog.

### 2. Blog Posts

- Displays all posts with their titles, dates, and thumbnails.
- Supports markdown for content formatting.

### 3. Individual Post View

- Each post can be opened to see full content, images, and post details.
- Includes the post header and main content rendered with proper styling.

### 4. Contact Form

- Users can send messages via a contact form, with real-time validation.
- Submitted messages are handled by the API route and stored in a database.

---

## API Routes

- **`/api/contact`**: Handles form submissions, validates the data, and sends a notification to the site owner.

---

## Scripts

- `npm run dev`: Run the app in development mode.
- `npm run build`: Create a production build of the app.
- `npm start`: Start the production server.
- `npm run lint`: Run ESLint to check for code issues.

---

## License

This project is licensed under the MIT License.

---

## Gif

Here is an expected gif of the preview of the App(Blog Posts App)

## ![Blog Posts App gif](./public/next-blog-posts.gif)

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
