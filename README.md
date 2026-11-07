# Apps Demo

A single Next.js App Router project for sharing working website concepts with small businesses. Each preview has its own URL and can have its own layout, styles, and nested pages.

## Run locally

Use Node.js 22 and npm.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000` for the home page or `http://localhost:3000/preview/juniper-cafe` for the fictional café example.

```sh
npm run lint
npm run typecheck
npm run build
```

## Add a business preview

1. Create `src/app/preview/<business-slug>/page.tsx`. Use the [café example](src/app/preview/juniper-cafe/page.tsx) as a starting point.
2. Keep business-specific components and CSS modules in that route folder. Add a `layout.tsx` or nested pages there when a preview needs them.
3. Deploy the project and share `https://<your-domain>/preview/<business-slug>`.

The shared preview layout asks search engines to skip indexing these pages. Anyone with a preview URL can open it after a public deployment.

## Deploy to Vercel

Push this repository to a Git provider connected to your Vercel account, then import it as one project. Use the repository root and the detected Next.js preset. The starter needs no environment variables. Share the preview path on the production domain so the link stays the same across deployments.
