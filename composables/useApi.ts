import { reactive } from 'vue'
import { ROUTES } from '~/data/constants/routes'

interface ResponseData {
    data: any
    success: boolean
}

const getRoute = (route: string, params?: any) => {
    if (!(route in ROUTES)) throw new Error(`Route ${route} not found`)
    const { method, url } = ROUTES[route as keyof typeof ROUTES]
    let finalUrl = url
    if (params) {
        for (const key in params) {
            finalUrl = finalUrl.replace(`{${key}}`, params[key])
        }
    }
    return { method, url: finalUrl }
}

export function useApi() {
    const authToken = ref(null)

    function _fetchRoute(url: string, method: string, options?: any) {
        const config = {
            method,
            ...options
        }
        if (authToken.value) {
            config.headers = {
                Authorization: `Bearer ${authToken.value}`
            }
        }
        return $fetch('/api' + url, config)
    }

    async function request(route: string, requestData?: any, requestParams?: any) {
        const { method, url } = getRoute(route, requestParams)
        let result

        if (method === 'get') {
            result = _fetchRoute(url, method, { query: requestData })
        } else if (['post', 'patch', 'put', 'delete'].includes(method)) {
            result = _fetchRoute(url, method, { body: requestData })
        } else {
            throw new Error(`Method ${method} not supported`)
        }

        return ((await result) as ResponseData).data
    }

    return reactive({
        authToken,
        request
    })
}
