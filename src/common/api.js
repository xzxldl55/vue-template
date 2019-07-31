// import Axios from './axios'
import axios from 'axios'



/**
 * Usage：
 * 
 * const serverHost = 'http://127.0.0.1:9000'
 * methodName
 * @method post/get
 * @param xxx
 * export function testApi (data, option) {
 *     return Axios.post(`${serverHost}/api/test`, data, option)
 * }
 */
const serverHost = 'http://127.0.0.1:9000'
export function testApi (data, option) {
    return axios.get(`${serverHost}/api/test`, data, option)
}