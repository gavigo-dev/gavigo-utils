<template>
    <div class="text-center">
        <Button label="Gerar imagem" severity="success" :disabled="loading" @click="generate" />
    </div>
    <div class="fixed -top-250">
        <div class="flex justify-center bg-gray-300 m-4 p-5 h-100">
            <div class="bg-[#2aa031] aspect-video flex" ref="imgRef">
                <div class="w-[82%] h-full flex flex-col">
                    <p class="text-5xl pt-4 pb-2 pl-20">
                        <span class="text-pathway text-green-50"> AGENDA </span>
                        <span class="text-ephesis text-green-950"> Semanal </span>
                    </p>
                    <div class="flex-1 flex flex-col items-stretch justify-center">
                        <span v-for="(item, key) in avisos" :key="key">
                            <div
                                v-if="item.items && item.items.length"
                                class="bg-green-50 rounded-e-xl p-2 mt-1 flex gap-2 items-center"
                            >
                                <p class="w-2/12 font-bold text-right uppercase text-[#2aa031]">
                                    {{ item.label }}
                                </p>
                                <div class="w-10/12 pl-2">
                                    <div
                                        v-for="(event, index) in item.items"
                                        :key="index"
                                        class="flex"
                                    >
                                        <p class="flex-1 font-bold uppercase text-green-950">
                                            {{ event.label }}
                                        </p>
                                        <p class="w-2/12 font-bold text-right pr-2 text-[#2aa031]">
                                            {{ event.hour }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
                <div class="flex-1 flex justify-center items-start pt-4">
                    <img src="/img/ibmjp/logo-light.png" width="70px" alt="logo" />
                </div>
            </div>
        </div>
    </div>
    <div v-if="loading" class="flex justify-center mt-10">
        <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
    </div>
    <div v-else-if="imgurl">
        <div class="flex justify-center bg-gray-300 m-4 p-5 md:h-100">
            <img :src="imgurl" class="aspect-video" />
        </div>
    </div>
</template>

<script setup>
import { toPng, toJpeg } from 'html-to-image'

const props = defineProps({
    avisos: {
        type: Object,
        required: true
    }
})
const imgRef = ref(null)
const imgurl = ref(null)
const loading = ref(false)

async function generate() {
    if (!imgRef.value) return

    try {
        loading.value = true
        const dataUrl = await toPng(imgRef.value, {
            pixelRatio: 2, // melhora qualidade
            backgroundColor: '##2aa031'
        })

        imgurl.value = dataUrl
    } catch (error) {
        console.log(error)
    } finally {
        loading.value = false
    }
}
</script>

<style scoped>
.text-pathway {
    font-family: 'Pathway Gothic One', sans-serif;
    font-weight: 400;
    font-style: normal;
}
.text-ephesis {
    font-family: 'Ephesis', cursive;
    font-weight: 400;
    font-style: normal;
}
</style>
