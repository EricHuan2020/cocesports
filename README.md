# cocesports

This app includes a default Clash of Clans API key for the hosted site so the API tab works immediately.

## How to use it

1. Open the API key tab.
2. Copy your clan tag exactly as shown in Clash of Clans (for example: `#2ABC123`).
3. Paste it into the clan tag field.
4. If the war log is private, also paste the opponent tag.
5. The page will refresh automatically, but there can be a short delay before new attacks show up because Clash of Clans caches war data for a little while.

## Note about delay

War data is not always instant. After an attack lands, it can take a short time before the API shows the updated result, so the calculator may lag by a few seconds to a minute depending on API caching.

## Deployment note

This default key is intentionally provided for the hosted version so people can use the page without entering their own key manually. If you want to remove it later, delete the default key from the runtime config and keep the key field blank unless a user pastes their own key.
