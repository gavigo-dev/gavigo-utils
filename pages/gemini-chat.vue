<template>
    <div class="h-full flex flex-col">
        <div class="flex-1 overflow-auto">
            <div class="flex flex-col items-start">
                <div
                    v-for="({ content, role }, idx) in history"
                    :key="idx"
                    class="bg-stone-200 m-3 mr-6 p-2 rounded"
                    :class="[role === 'user' && 'self-end mr-3! ml-6 bg-green-200!']"
                >
                    <div v-html="content" class="reset-all-css" />
                </div>
            </div>
        </div>
        <div v-if="loadingMessage">
            <LoadingSVG />
        </div>
        <Divider />
        <div class="flex justify-around items-end gap-1">
            <div class="flex-1 p-2">
                <Textarea
                    v-model="message"
                    class="min-h-20"
                    rows="2"
                    fluid
                    :disabled="loadingMessage"
                    @keydown="checkSubmit"
                />
            </div>
            <div class="pb-3 pr-2">
                <Button icon="pi pi-angle-right" rounded @click="submit" />
            </div>
        </div>
    </div>
</template>

<script setup>
import LoadingSVG from '~/components/custom/LoadingSVG.vue'

const { $md } = useNuxtApp()
const api = useApi()

const message = ref('')
const loadingMessage = ref(false)
const history = ref([])

const checkSubmit = (event) => {
    if (event.key === 'Enter' && event.ctrlKey) {
        submit()
    }
}

const submit = async () => {
    try {
        const contents = message.value.trim()

        history.value.push({
            role: 'user',
            content: message.value
        })
        message.value = ''
        loadingMessage.value = true

        const { candidates } = await api.request('POST_GEMINI_MESSAGE', {
            contents,
            config: {
                responseMimeType: 'text/plain'
            }
        })
        loadingMessage.value = false

        const answer = candidates[0].content.parts[0].text
        history.value.push({
            role: 'model',
            content: $md.render(answer)
        })
    } catch (error) {
        loadingMessage.value = false
        console.log(error)
    }
}
</script>
