# Fatima Portfolio

This project is a Vite + React portfolio site configured for Netlify deployment.

## Development

Run the app locally with:

```bash
pnpm install
pnpm run dev
```

## Deployment

This repo is configured for Netlify.

```bash
pnpm install
pnpm run build
```

Netlify should use these settings:

- **Build command:** `pnpm run build`
- **Publish directory:** `dist`

SPA routing is handled by `public/_redirects`, and Netlify build settings are defined in `netlify.toml`.

## Netlify setup

1. Push this repo to GitHub.
2. In Netlify, choose **Add new site** and import the GitHub repository.
3. Confirm the build command is `pnpm run build`.
4. Confirm the publish directory is `dist`.
5. Deploy the site.

After deployment, all routes like `/about` and `/projects` should work directly and on refresh.
