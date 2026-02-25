import tailwindcss from '@tailwindcss/vite'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import 'dotenv/config'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    app: {
        head: {
            titleTemplate: '%s - gavigo.dev',
            title: 'Gavigo Utils',
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
                },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                {
                    href: 'https://fonts.googleapis.com/css2?family=Ephesis&family=Pathway+Gothic+One&display=swap',
                    rel: 'stylesheet'
                }
            ]
        }
    },
    dir: {
        app: '.'
    },
    runtimeConfig: {
        public: {
            apiBaseUrl:
                process.env.USE_LOCAL_API == '1'
                    ? process.env.API_BASE_URL_LOCAL
                    : process.env.API_BASE_URL
        }
    },
    css: ['~/assets/css/tailwind.css', '~/assets/css/primeicons.css', '~/assets/css/main.css'],
    vite: {
        plugins: [
            tailwindcss(),
            Components({
                resolvers: [PrimeVueResolver()]
            })
        ],
        server: {
            proxy: {
                '/api': {
                    target:
                        process.env.USE_LOCAL_API == '1'
                            ? process.env.API_BASE_URL_LOCAL
                            : process.env.API_BASE_URL,
                    changeOrigin: true,
                    rewrite: (path: string) => path.replace(/^\/api/, '')
                }
            }
        }
    }
})
