import axios from 'axios';
import { Loading } from 'element-ui';
import { Message } from 'element-ui';
import { router } from '@/router/index.js';
let LoadingService, LoadingTime;
export default function $axios(options) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: process.env.API_ROOT,
            withCredentials: true,
        });
        // request 拦截器
        instance.interceptors.request.use(
            config => {
                // Tip: 1
                // 请求开始的时候可以结合 vuex 开启全屏的 loading 动画
                if (
                    config.url != '/v1/pwc/dictarea/getNextRegionsByParentCode'
                ) {
                    LoadingService = Loading.service({
                        fullscreen: true,
                    });
                }
                //
                // Tip: 2
                // 带上 token , 可以结合 vuex 或者重 localStorage
                // if (store.getters.token) {
                config.headers['token'] = JSON.parse(
                    sessionStorage.getItem('YBS-YNFYBJ-USER'),
                ).token;
                return config;
            },
            error => {
                LoadingService.close();
                return Promise.reject(error);
                //  1.判断请求超时
                // if (
                //     error.code === 'ECONNABORTED' &&
                //     error.message.indexOf('timeout') !== -1
                // ) {
                //     console.log(
                //         '根据你设置的timeout/真的请求超时 判断请求现在超时了，你可以在这里加入超时的处理方案'
                //     )
                //     // return service.request(originalRequest);//例如再重复请求一次
                // }
                // //  2.需要重定向到错误页面
                // const errorInfo = error.response
                // console.log(errorInfo)
                // if (errorInfo) {
                //     // error =errorInfo.data//页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
                //     const errorStatus = errorInfo.status // 404 403 500 ... 等
                //     router.push({
                //         path: `/error/${errorStatus}`
                //     })
                // }
                // return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
            },
        );
        // // response 拦截器
        instance.interceptors.response.use(response => {
            let data;
            timeOutHideLoading();
            if (response.data == undefined) {
                data = response.request.responseText;
            } else {
                data = response.data;
                if (data.code !== 'SUCCESS') {
                }
            }
            switch (data.code) {
                case 'SUCCESS':

                default:
            }
        });
        instance(options)
            .then(res => {
                resolve(res);
            })
            .catch(error => {
                reject(error);
            });
    });
}
function timeOutHideLoading() {
    clearTimeout(LoadingTime);
    LoadingTime = setTimeout(() => {
        clearTimeout(LoadingTime);
        LoadingService.close();
    }, 300);
}
