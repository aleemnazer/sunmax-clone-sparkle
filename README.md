# Sun Box ESS

Marketing site for Sun Box ESS, a Lahore-based solar equipment supplier and installer.

**Live site**: https://sunboxess.com

## Development

You need [Bun](https://bun.sh) installed.

```sh
git clone <this-repository-url>
cd sun-box-ess
bun install
git config core.hooksPath .githooks
bun run dev
```

The `pre-push` hook checks that `bun.lock` is in sync with `package.json` before every push — Cloudflare Workers Builds run `bun install --frozen-lockfile` and hard-fail the deploy if it isn't.
