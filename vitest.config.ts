import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,        // Use global variables (e.g., 'describe', 'it', 'expect')
    environment: 'jsdom', // Use jsdom environment for browser-like testing
    setupFiles: './src/setupTests.ts', // Setup file, which will run before tests
    css: {
      modules: {
          classNameStrategy: 'non-scoped' // For handling CSS modules
      }
    } 
  }
});
