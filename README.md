# cocesports

This app supports a default Clash of Clans API key for deployments, but the key should never be committed to GitHub.

## Local setup

1. Copy the example file:
   ```bash
   cp .env.example .env
   ```
2. Add your key to `.env`:
   ```env
   COC_DEFAULT_KEY=your_key_here
   ```
3. Generate the runtime config file before deploying:
   ```bash
   node scripts/generate-config.js
   ```
4. The generated `config.js` file is git-ignored and contains:
   ```js
   window.COC_DEFAULT_KEY = "your_key_here";
   ```

## Deployment

- Keep secrets in your host environment or secret manager.
- Do not commit real API keys to this repo.
- The page loads `config.js` at runtime and uses it as the default key if present.

## Optional: force user-entered keys only

If you want to disable the default key path completely, remove the `window.COC_DEFAULT_KEY` usage from `index.html` and leave the API key field blank unless the user pastes their own key.
