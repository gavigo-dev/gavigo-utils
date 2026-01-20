import { reactive } from 'vue'
import { useThemeStore } from '~/store/theme'

export function useTheme() {
    const themeStore = useThemeStore()

    const darkMode = computed(() => themeStore.darkMode)

    function toggleDarkMode() {
        document.documentElement.classList.toggle('dark')
        themeStore.toggleDarkMode()
    }

    function init() {
        if (darkMode.value) document.documentElement.classList.toggle('dark')
    }

    return reactive({
        darkMode,
        toggleDarkMode,
        init
    })
}
