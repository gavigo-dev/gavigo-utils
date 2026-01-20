<template>
    <div>
        <Panel class="m-4">
            <template #header>
                <div class="w-full">
                    <div class="flex">
                        <h2 class="flex-1 text-3xl font-bold">Gerador de avisos</h2>
                        <Button label="Eventos padrão" @click="initFields" />
                    </div>
                    <Divider />
                </div>
            </template>
            <div class="md:grid md:grid-cols-2 gap-1">
                <div v-for="(dia, key) in avisos" :key="key">
                    <h3 class="text-gray-100 bg-gray-700 p-2 rounded">{{ dia.label }}</h3>
                    <div v-if="dia.items.length" class="mt-2 px-2 w-full">
                        <div class="flex items-center">
                            <div class="px-2 w-8/12 py-1"><b>Evento</b></div>
                            <div class="px-2 w-2/12 py-1"><b>Horário</b></div>
                            <div class="px-2 w-2/12"></div>
                        </div>
                        <div
                            v-for="(item, index) in dia.items"
                            :key="key + '-' + index"
                            class=""
                            :class="index % 2 === 0 && 'bg-gray-100'"
                        >
                            <Form>
                                <div class="w-full flex items-center">
                                    <div class="px-1 w-8/12">
                                        <p v-if="!item.formActive">{{ item.label }}</p>

                                        <InputText
                                            v-else
                                            v-model="item.label"
                                            class="w-full"
                                            size="small"
                                        />
                                    </div>
                                    <div class="px-1 w-2/12">
                                        <p v-if="!item.formActive">{{ item.hour }}</p>
                                        <InputText
                                            v-else
                                            v-model="item.hour"
                                            v-mask="'##h##'"
                                            type="tel"
                                            placeholder="00h00"
                                            class="w-full"
                                            size="small"
                                        />
                                    </div>
                                    <div class="w-2/12">
                                        <div v-if="!item.formActive" class="w-full">
                                            <Button
                                                icon="pi pi-pen-to-square"
                                                severity="secondary"
                                                variant="text"
                                                size="small"
                                                @click="item.formActive = true"
                                            />
                                            <Button
                                                icon="pi pi-trash"
                                                severity="danger"
                                                variant="text"
                                                size="small"
                                                @click="removeItem(key, index)"
                                            />
                                        </div>
                                        <div v-else>
                                            <Button
                                                icon="pi pi-check"
                                                severity="success"
                                                size="small"
                                                @click="item.formActive = false"
                                            />
                                            <Button
                                                icon="pi pi-times"
                                                severity="danger"
                                                size="small"
                                                class="md:ml-1"
                                                @click="removeItem(key, index)"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div class="flex justify-start w-full my-2 px-2">
                        <Button
                            icon="pi pi-plus"
                            size="small"
                            severity="secondary"
                            @click="addItem(key)"
                        />
                    </div>
                </div>
            </div>
            <Preview :avisos="avisos" />
        </Panel>
    </div>
</template>

<script setup>
import { AVISOS_DEFAULT } from '~/data/constants/ibmjp.js'
import Preview from '~/components/ibmjp/avisos/Preview.vue'

const getNewItem = () => ({
    formActive: true,
    label: '',
    hour: ''
})

const avisos = reactive({
    monday: {
        label: 'Segunda',
        items: []
    },
    tuesday: {
        label: 'Terça',
        items: []
    },
    wednesday: {
        label: 'Quarta',
        items: []
    },
    thursday: {
        label: 'Quinta',
        items: []
    },
    friday: {
        label: 'Sexta',
        items: []
    },
    saturday: {
        label: 'Sábado',
        items: []
    },
    sunday: {
        label: 'Domingo',
        items: []
    }
})

const addItem = (key) => {
    avisos[key].items.push(getNewItem())
}

const removeItem = (key, index) => {
    avisos[key].items.splice(index, 1)
}

const initFields = () => {
    Object.keys(avisos).forEach((key) => {
        avisos[key].items = JSON.parse(JSON.stringify(AVISOS_DEFAULT))[key]
    })
}
</script>
