import axios from 'axios'
import { Loading, Message } from 'element-ui'
import { router } from '../router'
// import { SESSION_USER_KEY }  from "../store/globalVar";
let LoadingService = { close() {} },
    LoadingTime
axios.defaults.timeout = 30000
axios.defaults.baseURL = process.env.API_ROOT
// let userKey=SESSION_USER_KEY;
axios.interceptors.request.use(
    config => {
        // 设置登录请求token
        // if(sessionStorage.getItem(userKey)){
        //     config.headers.token=JSON.parse(sessionStorage.getItem(userKey)).token;
        // }
        // 在发送请求之前做些什么
        // 添加条件设置config参数  hideLoading 可选择隐藏loading动画，避免多次闪烁
        if (!config.hideLoading) {
            LoadingService = Loading.service({
                fullscreen: true
            })
        }

        return config
    },
    error => {
        // 对请求错误做些什么
        LoadingService.close()
        return Promise.reject(error)
    }
)
// 添加响应拦截器
axios.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        timeOutHideLoading()
        // 判断session过期，打回登录页
        if (response.data.code === 'BIZ.SESSION_NULL') {
            Message.warning('您的登录信息已失效，请重新登录')
            router.push('/')
            return false
        }
        return response
    },
    error => {
        // 对响应错误做点什么
        timeOutHideLoading()
        return Promise.reject(error)
    }
)
export default axios
// 延时关闭Loading 避免闪烁
function timeOutHideLoading() {
    clearTimeout(LoadingTime)
    LoadingTime = setTimeout(() => {
        clearTimeout(LoadingTime)
        LoadingService.close()
    }, 300)
}
