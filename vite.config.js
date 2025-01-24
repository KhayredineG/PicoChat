import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  define: {
    'process.env.GROQ_API_KEY': JSON.stringify(process.env.GROQ_API_KEY)
  }
}); 