<template>
    <Toolbar>
        <template #start>
            <a href="">
                <img src="/img/gavigo-dev.png" width="50px" />
            </a>
            <h1 class="text-xl ml-4">Gavigo Utils</h1>
        </template>

        <template #end>
            <div class="hidden md:block">
                <MegaMenu :model="megaMenuItems" orientation="horizontal" />
            </div>
            <div class="md:hidden">
                <Button
                    icon="pi pi-bars"
                    severity="secondary"
                    variant="outlined"
                    @click="mobileDrawer = !mobileDrawer"
                />
                <Drawer v-model:visible="mobileDrawer" position="left">
                    <PanelMenu :model="menuItems" />
                </Drawer>
            </div>
        </template>
    </Toolbar>
</template>

<script setup>
const megaMenuItems = ref([
    {
        label: 'IBMJP',
        items: [
            [
                {
                    label: 'Igreja',
                    items: [
                        {
                            label: 'Website',
                            icon: 'pi pi-globe'
                        },
                        {
                            label: 'Instagram',
                            icon: 'fab fa-instagram'
                        }
                    ]
                },
                {
                    label: 'Apps',
                    items: [
                        {
                            label: 'Gerador de avisos',
                            command: () => {
                                navigateTo('/ibmjp/avisos')
                            }
                        }
                    ]
                }
            ]
        ]
    },
    {
        label: 'Experimentações',
        items: [
            [
                {
                    label: 'Inteligência Arfiticial',
                    items: [
                        {
                            label: 'Gemini chat',
                            command: () => {
                                navigateTo('/gemini-chat')
                            }
                        }
                    ]
                }
            ]
        ]
    },
    {
        label: 'Diversos',
        items: [[{ label: '', items: [{ label: '' }] }]]
    },
    {
        label: 'Entrar',
        command: () => {
            navigateTo('/login')
        }
    }
])

const menuItems = ref([
    {
        label: 'IBMJP',
        items: [
            {
                label: 'Igreja',
                items: [
                    {
                        label: 'Website',
                        icon: 'pi pi-globe'
                    },
                    {
                        label: 'Instagram',
                        icon: 'fab fa-instagram'
                    }
                ]
            },
            {
                label: 'Apps',
                items: [
                    {
                        label: 'Gerador de avisos',
                        command: () => {
                            navigateTo('/ibmjp/avisos')
                        }
                    }
                ]
            }
        ]
    },
    {
        label: 'Experimentações',
        items: [
            {
                label: 'Inteligência Arfiticial',
                items: [
                    {
                        label: 'Gemini chat',
                        command: () => {
                            navigateTo('/gemini-chat')
                        }
                    }
                ]
            }
        ]
    },
    {
        label: 'Diversos',
        items: [[{ label: '', items: [{ label: '' }] }]]
    },
    {
        label: 'Entrar',
        command: () => {
            navigateTo('/login')
        }
    }
])

const mobileDrawer = ref(false)
</script>
