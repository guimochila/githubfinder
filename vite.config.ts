import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const config = defineConfig({
    plugins: [react()],
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx'
            }
        }
    }
})

export default config