# OH Component Library

A component library playground for practicing and experimenting with React, Web Components, and TypeScript.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

Start Storybook to explore components:

```bash
npm run storybook
```

Build the library:

```bash
npm run build
```

Type checking:

```bash
npm run type-check
```

## 📁 Project Structure

```
sandbox/
├── src/
│   ├── tokens/              # Design tokens (colors, spacing, typography)
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   ├── typography.ts
│   │   └── index.ts
│   ├── components/          # Component library
│   │   ├── Button/         # React button component
│   │   │   ├── Button.tsx
│   │   │   ├── Button.css
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── Alert/          # Web component
│   │   │   ├── Alert.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   └── index.ts            # Main entry point
├── docs/                    # Documentation
├── examples/               # Old demos (archived)
├── stories/                # Legacy Storybook stories
├── .storybook/             # Storybook configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Design System

This library includes a complete design token system:

- **Colors**: Primary, secondary, semantic colors
- **Spacing**: Consistent spacing scale
- **Typography**: Font families, sizes, weights
- **Shadows**: Shadow scales for depth
- **Border Radius**: Consistent border radii
- **Transitions**: Standard animation timings

## 🧩 Components

### React Components

- **Button**: Flexible button with variants, sizes, and loading states

### Web Components

- **Alert**: Native web component for alert messages

## 📖 Documentation

See [docs/README.md](docs/README.md) for detailed documentation on:
- Using design tokens
- Creating new components
- Component APIs and props
- Best practices

## 🛠️ Tech Stack

- **TypeScript** - Type-safe JavaScript
- **React** - Component framework
- **Web Components** - Native custom elements
- **Vite** - Fast build tool and dev server
- **Storybook** - Component development environment

## 💡 Usage

### Import Components

```typescript
// Import React components
import { Button } from './components/Button';

// Import design tokens
import { colors, spacing, typography } from './tokens';
```

### Use Web Components

```html
<!-- Use web components directly in HTML -->
<oh-alert variant="info" title="Hello" dismissible>
  This is a web component!
</oh-alert>
```

## 🎯 Practice Goals

This sandbox is designed to help you practice:

1. Building reusable React components
2. Creating native Web Components
3. Implementing design systems with tokens
4. Writing TypeScript with proper typing
5. Using Storybook for component development
6. Following accessibility best practices

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [Web Components MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Storybook Tutorials](https://storybook.js.org/tutorials/)

---

Happy coding! 🎉

