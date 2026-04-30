# Component Library Quick Reference

## 🚀 Commands

```bash
npm run storybook        # Start Storybook (recommended for development)
npm run build            # Build the component library
npm run type-check       # Check TypeScript types
npm run build-storybook  # Build Storybook for deployment
```

## 📁 Structure

```
src/
├── tokens/              # Design System Tokens
│   ├── colors.ts       # Color palette
│   ├── spacing.ts      # Spacing scale
│   ├── typography.ts   # Font system
│   └── index.ts        # All tokens export
│
├── components/         # Component Library
│   ├── Button/        # React Button
│   │   ├── Button.tsx
│   │   ├── Button.css
│   │   ├── Button.stories.tsx
│   │   └── index.ts
│   │
│   ├── Alert/         # Web Component
│   │   ├── Alert.ts
│   │   └── index.ts
│   │
│   └── index.ts       # All components export
│
└── index.ts           # Main library entry
```

## 🎨 Using Design Tokens

```typescript
import { colors, spacing, typography } from './tokens';

// Colors
const primary = colors.primary[500];      // #3b82f6
const success = colors.success[600];      // #16a34a

// Spacing
const padding = spacing[4];               // 1rem (16px)
const margin = spacing[8];                // 2rem (32px)

// Typography
const fontFamily = typography.fontFamily.sans;
const fontSize = typography.fontSize.lg;   // 1.125rem
const fontWeight = typography.fontWeight.bold; // 700
```

## 🧩 Creating a New React Component

1. **Create folder**: `src/components/MyComponent/`

2. **Create component**: `MyComponent.tsx`
```tsx
import React from 'react';
import './MyComponent.css';

export interface MyComponentProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  variant = 'primary',
  children,
}) => {
  return (
    <div className={`my-component my-component--${variant}`}>
      {children}
    </div>
  );
};
```

3. **Create styles**: `MyComponent.css`
```css
.my-component {
  padding: 1rem;
  border-radius: 0.5rem;
}

.my-component--primary {
  background-color: #3b82f6;
  color: white;
}
```

4. **Create stories**: `MyComponent.stories.tsx`
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Hello World',
  },
};
```

5. **Export**: Add to `index.ts`
```typescript
export { MyComponent, type MyComponentProps } from './MyComponent';
```

## 🌐 Creating a Web Component

```typescript
// src/components/MyElement/MyElement.ts
export class MyElement extends HTMLElement {
  private shadowRoot: ShadowRoot;

  static get observedAttributes() {
    return ['variant', 'text'];
  }

  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  private render() {
    const variant = this.getAttribute('variant') || 'default';
    const text = this.getAttribute('text') || '';
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .element {
          padding: 1rem;
        }
      </style>
      <div class="element element--${variant}">
        ${text}
        <slot></slot>
      </div>
    `;
  }
}

// Register the element
if (!customElements.get('my-element')) {
  customElements.define('my-element', MyElement);
}
```

## 📚 Best Practices

1. **Always use TypeScript types**
   - Define interfaces for props
   - Use type annotations
   - Avoid `any`

2. **Follow naming conventions**
   - React: PascalCase (`Button.tsx`)
   - Files: kebab-case for CSS (`button-group.css`)
   - Web Components: kebab-case with prefix (`oh-alert`)

3. **Use design tokens**
   - Don't hardcode colors, spacing, etc.
   - Import from `./tokens`
   - Maintain consistency

4. **Write stories for everything**
   - Document all variants
   - Show edge cases
   - Include accessibility notes

5. **Keep components focused**
   - Single responsibility
   - Composable
   - Reusable

## 🧪 Testing Components

View components in Storybook:
```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006)

## 📖 More Info

See [docs/README.md](../docs/README.md) for detailed documentation.
