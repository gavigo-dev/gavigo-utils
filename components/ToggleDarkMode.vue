<template>
    <Button
        :icon="icon"
        aria-label="Toggle Dark Mode"
        class="text-2xl text-neutral-700 dark:text-neutral-300"
        @click="theme.toggleDarkMode"
    />
</template>

<script lang="ts" setup>
const theme = useTheme()
const icon = computed(() => `pi pi-${theme.darkMode ? 'moon' : 'sun'}`)

onBeforeMount(() => {
    theme.init()
})
</script>
