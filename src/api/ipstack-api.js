import HttpService from '../services/httpService'
/**
 * Http service
 * @param {any} ip ip number, domain name
 * @param {string} accesKey ipstock access key
 */
export const getIpLookup = (ip = 'check', accesKey = process.env.REACT_APP_IPSTACK_KEY) => {
    return new Promise((resolve, reject) => {
        const httpClient = new HttpService()
        httpClient.get({
            headers: {},
            endpoint: `/${ip}`,
            queryParams: {
                access_key: accesKey,
                output: 'json'
            },
            onSuccess: data => resolve(data),
            onError: error => reject(error)
        })
    })
}
