# Quick Reference

## Common Commands

### Development
```bash
npm run dev              # Start dev server (localhost:3000)
npm run build            # Build for production
npm run preview          # Preview production build
npm run type-check       # Check TypeScript types
```

### Storybook
```bash
npm run storybook        # Start Storybook (localhost:6006)
npm run build-storybook  # Build Storybook
```

## File Organization

### Where to put things:
- **TypeScript code** → `src/`
- **HTML files** → `public/`
- **CSS files** → `public/`
- **Components** → `src/components/`
- **Type definitions** → `src/types.d.ts`
- **Old examples** → `examples/`

## TypeScript Tips

### Importing modules
```typescript
// Import a function
import { greet } from './utils';

// Import a class
import { Counter } from './components/Counter';

// Import everything
import * as utils from './utils';
```

### Type annotations
```typescript
// Variables
const name: string = 'John';
const age: number = 30;
const isActive: boolean = true;

// Functions
function add(a: number, b: number): number {
  return a + b;
}

// Arrays
const numbers: number[] = [1, 2, 3];
const names: Array<string> = ['John', 'Jane'];

// Objects
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'John',
  age: 30
};
```

## CSS Tips

### Using CSS variables
```css
:root {
  --primary-color: #3b82f6;
}

.my-element {
  color: var(--primary-color);
}
```

### Common patterns
```css
/* Flexbox centering */
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Grid layout */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
```

## Debugging

### Browser DevTools
- `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Option + I` (Mac) - Open DevTools
- `Ctrl + Shift + C` or `Cmd + Option + C` - Element inspector
- Check Console tab for errors
- Check Network tab for loading issues

### VS Code
- `F12` - Go to definition
- `Shift + F12` - Find all references
- `Ctrl/Cmd + Click` - Go to definition
- Hover over variables to see types

## Adding New Features

### 1. Create a new TypeScript file
```typescript
// src/myFeature.ts
export function myFunction() {
  console.log('Hello!');
}
```

### 2. Import and use it
```typescript
// src/index.ts
import { myFunction } from './myFeature';

myFunction();
```

### 3. Add styles if needed
```css
/* public/styles.css */
.my-feature {
  /* your styles */
}
```

## Troubleshooting

### Dev server won't start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
```bash
# Check types without building
npm run type-check
```

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Vite Documentation](https://vitejs.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
