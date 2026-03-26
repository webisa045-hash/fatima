# Fatima Portfolio

This project is a Vite + React portfolio site deployed to GitHub Pages.

## Development

Run the app locally with:

```bash
pnpm install
pnpm run dev
```

## Deployment

GitHub Pages must deploy the built `dist/` output, not the repository root source files. This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the app and publishes it correctly.

In the repository settings, set **Pages** to use **GitHub Actions** as the source. After that, every push to `main` will trigger a new deployment.
