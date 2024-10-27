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

      // Components
      "@app-components": resolve(root, 'components'),
      "@app-components/*": resolve(root, 'components/*'),

      // Config
      "@app-config": resolve(root, 'config'),
      "@app-config/*": resolve(root, 'config/*'),

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

      // Routes
      "@app-routes": resolve(root, 'routes'),
      "@app-routes/*": resolve(root, 'routes/*'),

      // Services
      "@app-services": resolve(root, 'services'),
      "@app-services/*": resolve(root, 'services/*'),

      // Store
      "@app-store": resolve(root, 'store'),
      "@app-store/*": resolve(root, 'store/*'),

      // Types
      "@app-types": resolve(root, 'types'),
      "@app-types/*": resolve(root, 'types/*'),

      // Utils
      "@app-utils": resolve(root, 'utils'),
      "@app-utils/*": resolve(root, 'utils/*'),
    },
  },
})
