import axios from '@/axios/index.js'
export const getTableData = data => {
    return axios({
        url: '', //请求地址
        paranms: data
    })
}
