import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  define: {
    // Remove this as we'll use Vite's built-in env handling
    // 'process.env.GROQ_API_KEY': JSON.stringify(process.env.GROQ_API_KEY)
  }
}); 