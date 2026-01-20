import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        theme: {
            preset: Aura,
            options: {
                darkModeSelector: '.dark'
            }
        }
    })
})
