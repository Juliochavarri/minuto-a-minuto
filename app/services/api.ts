import apiBase from "../../services/apiBase"
import { getOptions } from "./utils"

var baseUrl = apiBase.apiPost

const Fetch = async ({url, method, body}) => {
    let options = getOptions({
        method,
        body
    })

    var status = null
    var data = null

    try {
        const response = await fetch(`${baseUrl}${url}`, options)
        status = response.status

        if(status !== 204) data =  await response.json()

        if (status >= 500) {
            console.log('DATA', data)
          }

          return {
            status,
            statusText: response.statusText,
            ok: response.ok,
            data,
          }
    } catch (error) {
        console.log('error=>',error);
    }
}

export const getPostsByUserId = async ({ userId }) => {
    const response = await Fetch({url:`users/${userId}/posts`})
    return response
}