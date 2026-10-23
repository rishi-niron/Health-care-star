# health-care-star reviewer notes

## Architecture

This is a minimal React 19 application built and served with Vite. The browser entry point is `src/main.jsx`, which mounts `App` inside `StrictMode`; the main UI and its styling are currently concentrated in `src/App.jsx` and imported CSS files. Static images and SVG assets are imported from `src/assets` or referenced from the public root.

## Conventions

- Use JavaScript/JSX rather than TypeScript; components use `.jsx` files, as shown by `src/App.jsx` and `src/main.jsx`.
- Use ES modules and named imports. The project is configured with `"type": "module"` in `package.json`; `vite.config.js` imports `react` and `defineConfig`.
- React components are function components with hooks. `src/App.jsx` uses `useState` and exports `App` as the default export.
- Preserve the Vite entrypoint pattern: `src/main.jsx` imports global CSS, obtains `#root`, and renders the app with `createRoot`.
- Use functional state updates when deriving a new value from prior state, as in `setCount((count) => count + 1)` in `src/App.jsx`.
- Local assets are imported at module scope (`heroImg`, `reactLogo`, and `viteLogo` in `src/App.jsx`); root-served SVG sprites are referenced with paths such as `/icons.svg#github-icon`.
- Formatting follows the existing Oxlint/Vite style: single quotes, no semicolons, trailing commas in multiline calls/objects, and two-space indentation. `npm run lint` runs Oxlint.
- Build and development workflows are the package scripts in `package.json`: `npm run dev`, `npm run build`, `npm run lint`, and `npm run preview`.

## Intentional non-standard choices

- The current UI is still the stock/customized Vite starter screen (“Get started”, Vite/React links, counter) in `src/App.jsx`; do not assume the health-care domain is already represented in the UI.
- `src/broken.js` explicitly contains deliberately broken examples (its comment labels it “Extremely broken function”); treat its defects as review targets or test fixtures rather than applying its behavior as an application pattern.

## Watch out for

- Flag correctness and security defects in `src/broken.js`: `amount = 0` assigns instead of compares, transfer balance directions are incorrect, balances are modified multiple times, failure is always logged, and the function returns `"Success"` even when no valid transfer occurred.
- Flag `authenticate` in `src/broken.js`: it authenticates missing tokens, rejects long tokens, and returns inconsistent boolean/string types.
- Check external links in `src/App.jsx`: links use `target="_blank"` without `rel="noopener noreferrer"`.
- Avoid introducing unused imports, assets, or state; `src/App.jsx` currently has all imported assets rendered and uses its counter state.
- Preserve accessibility attributes for decorative SVGs and images. Review changes to `alt`, `role`, `aria-hidden`, and the existing explicit image dimensions.