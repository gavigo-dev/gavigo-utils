import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
    state: () => ({
        darkMode: false
    }),
    actions: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode
        },
        setDarkMode(value) {
            this.darkMode = value
        }
    },
    getters: {
        isDarkMode: (state) => state.darkMode
    },
    $persistOptions: {
        key: 'theme'
    }
})
