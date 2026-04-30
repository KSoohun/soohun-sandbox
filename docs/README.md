# Component Library Documentation

Welcome to the OH Component Library playground! This is a practice environment for building and testing components.

## 📚 Table of Contents

- [Getting Started](#getting-started)
- [Design Tokens](#design-tokens)
- [Components](#components)
- [Development](#development)

## Getting Started

### Installation

```bash
npm install
```

### Development

Start Storybook to see all components:

```bash
npm run storybook
```

Build the library:

```bash
npm run build
```

## Design Tokens

Design tokens are the foundation of our design system. They provide consistent values for:

- **Colors**: Primary, secondary, semantic colors (success, warning, error, info)
- **Spacing**: Consistent spacing scale (0-32)
- **Typography**: Font families, sizes, weights, and line heights
- **Border Radius**: Consistent border radii
- **Shadows**: Shadow scales for depth
- **Transitions**: Standard animation timings

### Usage

```typescript
import { colors, spacing, typography } from './tokens';

const primaryColor = colors.primary[500];
const mediumSpacing = spacing[4];
const baseFont = typography.fontSize.base;
```

## Components

### Button (React)

A flexible button component with multiple variants and sizes.

```tsx
import { Button } from './components/Button';

<Button variant="primary" size="md">
  Click me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `fullWidth`: boolean
- `loading`: boolean

### Alert (Web Component)

A native web component for displaying alert messages.

```html
<oh-alert variant="info" title="Information" dismissible>
  This is an informational message.
</oh-alert>
```

**Attributes:**
- `variant`: 'info' | 'success' | 'warning' | 'error'
- `title`: string
- `dismissible`: boolean

## Development

### Adding a New Component

1. Create a new folder in `src/components/ComponentName/`
2. Create the component file: `ComponentName.tsx` (React) or `ComponentName.ts` (Web Component)
3. Create styles: `ComponentName.css`
4. Create stories: `ComponentName.stories.tsx`
5. Export from `index.ts`

### Project Structure

```
src/
├── tokens/              # Design tokens
│   ├── colors.ts
│   ├── spacing.ts
│   ├── typography.ts
│   └── index.ts
├── components/          # Component library
│   ├── Button/         # React button component
│   │   ├── Button.tsx
│   │   ├── Button.css
│   │   ├── Button.stories.tsx
│   │   └── index.ts
│   ├── Alert/          # Web component alert
│   │   ├── Alert.ts
│   │   └── index.ts
│   └── index.ts
└── index.ts            # Main entry point
```

### Testing in Storybook

All components should have accompanying Storybook stories that demonstrate:
- Different variants/states
- Different sizes
- Edge cases
- Accessibility features

## Best Practices

1. **Use TypeScript**: All components should be fully typed
2. **Accessibility**: Follow WCAG guidelines
3. **Design Tokens**: Use tokens instead of hardcoded values
4. **Documentation**: Document props and usage
5. **Storybook**: Create comprehensive stories for each component

## Resources

- [React Documentation](https://react.dev/)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Storybook](https://storybook.js.org/)
