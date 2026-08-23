<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Deployment workflow

- Deploy this project only through the GitHub-connected Cloudflare Pages workflow.
- Push a `feature/*` or `fix/*` branch to create a Preview Deploy.
- Merge an approved PR into `main` to create a Production Deploy.
- Never run `wrangler pages deploy`, `npm run deploy`, or use Cloudflare Direct Upload for this project.
- Treat push, PR creation, and merge as separately authorized operations; ask for any missing authorization before proceeding.
