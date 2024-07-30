import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy:{
      '/api': 'http://api-backend-quiz-project04.apps.ap46r.prod.ole.redhat.com/'
    }
  },
  plugins: [react()],
})
