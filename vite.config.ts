import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const root = resolve(__dirname, 'src')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Assets
      "@app-assets": resolve(root, 'assets'),
      "@app-assets/*": resolve(root, 'assets/*'),

      // Data
      "@app-data": resolve(root, 'data'),
      "@app-data/*": resolve(root, 'data/*'),

      // Hooks
      "@app-hooks": resolve(root, 'hooks'),
      "@app-hooks/*": resolve(root, 'hooks/*'),

      // Layouts
      "@app-layouts": resolve(root, 'layouts'),
      "@app-layouts/*": resolve(root, 'layouts/*'),

      // Pages
      "@app-pages": resolve(root, 'pages'),
      "@app-pages/*": resolve(root, 'pages/*'),

      // Types
      "@app-types": resolve(root, 'types'),
      "@app-types/*": resolve(root, 'types/*')
    },
  },
})
