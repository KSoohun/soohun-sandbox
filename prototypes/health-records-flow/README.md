# Health Records Flow Prototype

A simple, semantic HTML/CSS/JS prototype demonstrating a health records dashboard and detail view.

## Structure

```
prototypes/health-records-flow/
├── index.html              # Home/Dashboard page
├── health-records.html     # Health records page with accordion
├── styles/
│   ├── base.css           # Shared base styles
│   ├── home.css           # Dashboard-specific styles
│   └── health-records.css # Health records page styles
└── scripts/
    └── accordion.js       # Accordion functionality
```

## Features

- **Dashboard (index.html)**
  - Clean, card-based layout
  - Navigation to Health Records
  - Quick action links
  - Responsive design

- **Health Records (health-records.html)**
  - Filterable record list
  - Accordion UI for record details
  - Semantic HTML structure
  - Smooth transitions

## How to Preview

### Option 1: Live Server (VS Code Extension)

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 2: Vite Dev Server

```bash
# From the repository root
npx vite prototypes/health-records-flow --port 3000
```

Then open: http://localhost:3000

### Option 3: Simple HTTP Server (Python)

```bash
# Navigate to the prototype directory
cd prototypes/health-records-flow

# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

### Option 4: Direct File Open

Simply open `index.html` in your browser. All links use relative paths and will work without a server.

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern layouts (Grid, Flexbox)
- **Vanilla JavaScript**: No frameworks or dependencies

## Accessibility

- Semantic HTML elements (`<nav>`, `<main>`, `<section>`)
- ARIA attributes where appropriate
- Keyboard-navigable accordion
- Focus states on interactive elements

## Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
