//存放全局的请求方法，如请求列表数据
import axios from '@/axios/index.js'
export const getTableDataAxios = data => {
    return axios({
        url: data.url, //请求地址
        paranms: data.paranms
    })
}
