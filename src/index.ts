/**
 * Main entry point for the sandbox
 * Play and experiment with TypeScript here!
 */

// Example: Simple greeting function
export function greet(name: string): string {
  return `Hello, ${name}! Welcome to the sandbox.`;
}

// Example: DOM manipulation
export function initApp(): void {
  const app = document.getElementById('app');
  
  if (app) {
    app.innerHTML = `
      <div class="container">
        <h1>${greet('Developer')}</h1>
        <p>This is your TypeScript sandbox. Start experimenting!</p>
      </div>
    `;
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
