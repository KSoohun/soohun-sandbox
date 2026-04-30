/**
 * Global type declarations
 * Add your custom types here
 */

// Example: Custom DOM types
interface Window {
  // Add custom window properties here if needed
}

// Example: Module declarations for non-TypeScript assets
declare module '*.css' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const value: any;
  export default value;
}

// Example: Custom types
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}
