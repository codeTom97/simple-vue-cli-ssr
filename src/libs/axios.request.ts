/**
 * @description axios 请求封装
 */
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance, Method, AxiosPromise } from "axios";

// 使用接口代替object作为参数类型
interface PropsParams {
    [proppName: string]: string | number | boolean;
}

/**
 * HTTP 请求示例封装
 */
class HttpRequest {
    config(): AxiosRequestConfig {
        return {
            baseURL: "", // 接口前缀配置
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            withCredentials: false, // 是否检查跨域请求
            timeout: 50000 // 接口超时配置
        };
    }

    /**
     * 拦截器
     * @param {*} instance axios原型对象
     */
    interceptors(instance: AxiosInstance): void {
        // 请求拦截器
        instance.interceptors.request.use(
            (config: AxiosRequestConfig): AxiosRequestConfig => {
                // 如果需要对头部或者token配置则放入此处
                return config;
            },
            (error: AxiosError): AxiosPromise => {
                return Promise.reject(error);
            }
        );

        // 响应拦截器
        instance.interceptors.response.use(
            (config: AxiosResponse): AxiosResponse => {
                // 对服务端返回数据进行处理 如401,500等
                return config;
            },
            (error: AxiosError): AxiosPromise => {
                return Promise.reject(error);
            }
        );
    }

    /**
     * 请求方法
     * @param url 接口地址
     * @param params 接口参数
     * @param options 相关配置, 如headers
     * @param method 请求类型
     */
    request(url: string, params: PropsParams, method: Method, options?: PropsParams): AxiosPromise {
        const instance: AxiosInstance = axios.create();

        const _options: AxiosRequestConfig = Object.assign(this.config(), options, {
            url,
            method
        });

        ["PUT, POST"].includes(method) ? (_options.data = params) : (_options.params = params);

        this.interceptors(instance);

        return instance(_options);
    }
}

const http = new HttpRequest();

/**
 * GET 请求
 * @param url 接口地址
 * @param params 参数
 */
const GET = (url: string, params: PropsParams): AxiosPromise => {
    return http.request(url, params, "GET");
};

/**
 * POST 请求
 * @param url 接口地址
 * @param params 参数
 */
const POST = (url: string, params: PropsParams): AxiosPromise => {
    return http.request(url, params, "POST");
};

/**
 * PUT 请求 (处理如更新等小批量操作)
 * @param url 接口地址
 * @param params 参数
 */
const PUT = (url: string, params: PropsParams): AxiosPromise => {
    return http.request(url, params, "PUT");
};

/**
 * DELETE 请求 (软删除)
 * @param url 接口地址
 * @param params 参数
 */
const DEL = (url: string, params: PropsParams): AxiosPromise => {
    return http.request(url, params, "DELETE");
};

export default {
    get: GET,
    post: POST,
    put: PUT,
    delele: DEL
};
