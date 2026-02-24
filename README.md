# Link-in-Bio Page

A minimalist, brutalist-style link-in-bio page built with Next.js, TypeScript, and Tailwind CSS. Features dark mode support and matches the aesthetic of your portfolio.

## Features

- ⚡ **Next.js 16** with App Router
- 🎨 **Brutalist Design** with bold borders and shadows
- 🌓 **Dark Mode** with localStorage persistence
- 📱 **Fully Responsive**
- 🎯 **Social Links** (GitHub, Discord, Snapchat, Email, LinkedIn, Twitter, Instagram)
- ⚡ **Fast & Optimized**

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your link page.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Your Links

Edit the `links` array in `app/page.tsx`:

```typescript
const links = [
  {
    title: "GitHub",
    url: "https://github.com/kilianbalaguer",
    icon: FaGithub,
    description: "Check out my code"
  },
  // Add more links...
];
```

### Update Profile Information

In `app/page.tsx`, modify:
- Profile name in the `<h1>` tag
- Description text
- Username handle

### Add Your Profile Picture

Replace the placeholder `KB` initials in `app/page.tsx` with an actual image:

```tsx
<Image
  src="/your-photo.jpg"
  alt="Your Name"
  width={128}
  height={128}
  className="relative w-full h-full object-cover border-4 border-black dark:border-white"
/>
```

## Deployment

Deploy easily to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or use any hosting service that supports Next.js.

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Deployment:** Vercel (recommended)

## License

MIT

---

**Note:** Remember to update the placeholder URLs for Discord, Snapchat, LinkedIn, Twitter, Instagram, and Email with your actual links before deploying!
