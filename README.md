# Sandbox

A clean playground for testing and experimenting with HTML, CSS, and TypeScript.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

Start the development server with hot reload:

```bash
npm run dev
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build

Compile TypeScript and build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Type Checking

Run TypeScript type checking without emitting files:

```bash
npm run type-check
```

## 📁 Project Structure

```
sandbox/
├── src/                    # TypeScript source files
│   ├── index.ts           # Main entry point
│   └── utils.ts           # Utility functions
├── public/                # Static assets
│   ├── index.html         # Main HTML file
│   └── styles.css         # Global styles
├── examples/              # Old demo files (reference)
├── stories/               # Storybook stories
├── dist/                  # Built files (generated)
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Project dependencies
```

## 🎮 How to Use

1. **Edit TypeScript**: Modify files in `src/` folder
2. **Edit HTML**: Modify `public/index.html`
3. **Edit Styles**: Modify `public/styles.css`
4. **Add new files**: Create new `.ts` files in `src/` and import them

The dev server will automatically reload when you save changes.

## 🧩 Storybook (Optional)

Run Storybook for component development:

```bash
npm run storybook
```

Build Storybook:

```bash
npm run build-storybook
```

## 📝 Examples

The `examples/` folder contains old demos for reference. These are not part of the active development environment.

## 💡 Tips

- Use TypeScript's type system to catch errors early
- Install VS Code TypeScript extension for better IntelliSense
- Check the browser console for any runtime errors
- Use the Network tab in DevTools to debug loading issues

## 🛠️ Tech Stack

- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Storybook** - Component development environment

---

Happy coding! 🎉

