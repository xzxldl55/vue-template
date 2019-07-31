import axios from 'axios'

const Axios = axios.create({
    timeout: 20000,
    resopnseType: 'json',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
})
Axios.create = axios.create

// 拦截器
// POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(config => {
    // config配置请求
    config.params = {
        // 添加预设请求参数配置
        ...config.params
    }
}, err => {

})

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(res => {

}, err => {

})

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
const axiosPlugin = {
    install: function (Vue, Option) {
        Object.defineProperty(Vue.prototype, '$http', { value: Axios });
    }
}

export default {axiosPlugin, Axios}