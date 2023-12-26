import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import dotenv from 'dotenv'
// dotenv.config()

const reactAppApiKey = process.env.REACT_APP_API_ENDPOINT;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.REACT_APP_API_ENDPOINT': JSON.stringify(reactAppApiKey),
  },
});
