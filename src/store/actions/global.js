import { getTableDataAxios } from '@/axios/global/index.js'
/*
    全局获取表格数据
    @getTableDataAxios为请求方法
    @searchData为传入数据
      searchData:{
        url:'',//请求地址
        params:{}//请求参数
    }
*/
export const getTableData = async ({ commit }, searchData) => {
    let res = await getTableDataAxios(searchData)
    commit('setTableData', res.dataList)
}
