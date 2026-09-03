# Health-care-star reviewer notes

## Architecture
This codebase is a React application set up using Vite as the build tool. It employs a modular architecture, with the primary application logic contained within `src/App.jsx`, while the entry point of the application is defined in `src/main.jsx`. The application is structured to facilitate rapid development with hot module replacement (HMR) enabled.

## Conventions
- **File Structure**: The source files are organized under the `src/` directory, with `App.jsx` serving as the main component and `main.jsx` acting as the entry point. Ensuring all components reside  in the `src` directory is vital for clarity.
- **Component Naming**: The main component is named `App`. This follows the convention of having the top-level component named after the application, enabling easier recognition during development.
- **Linting**: The project uses `oxlint` for linting, as specified in `package.json`. All contributors should run the lint command (`npm run lint`) prior to committing changes to maintain code quality.
- **CSS Styling**: The main CSS file is referenced in both `App.jsx` and `main.jsx`, creating a unified styling approach. Ensure all new styles are placed in `App.css`.

## Intentional non-standard choices
- **JSX File Extensions**: The app uses `.jsx` files for both `App.jsx` and `main.jsx`. While it's common to see `.js` as the extension in many React projects, the preference for `.jsx` aims to signal that these files contain JSX syntax explicitly.

## Watch out for
- **Unused Imports**: Developers should be mindful of maintaining a clean codebase by eliminating any unused imports in files like `App.jsx` to prevent the introduction of clutter and confusion.
- **Accessibility Attributes**: Ensure that interactive elements (like buttons and links) contain appropriate accessibility attributes (e.g., `aria-label`) where necessary to improve usability for users with disabilities.
- **State Management**: When managing state within components, ensure the state logic does not lead to potential performance issues, such as unnecessary re-renders. Keep state minimal and focused.