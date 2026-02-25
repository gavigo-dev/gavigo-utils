<template>
    <div
        class="absolute w-full h-screen bg-linear-to-r from-gray-100 to-neutral-100 dark:from-gray-900 dark:to-neutral-900 text-neutral-700 dark:text-neutral-300"
    >
        <div class="fixed w-full z-50">
            <HomeHeader />
        </div>

        <div class="pt-20 h-screen overflow-auto">
            <slot></slot>
        </div>
    </div>
</template>
