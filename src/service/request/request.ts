import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AxiosInterceptorConfig, Interceptor } from './type';

class MyRequest {
    instance: AxiosInstance;
    interceptor: Interceptor | undefined;
    constructor(config: AxiosInterceptorConfig) {
        this.instance = axios.create(config);
        this.interceptor = config.interceptor;
        this.initInterceptors();
    }
    initInterceptors(): void {
        this.instance.interceptors.request.use(
            this.interceptor?.requestSuccessInterceptor,
            this.interceptor?.requestErrorInterceptor
        );
        this.instance.interceptors.response.use(
            this.interceptor?.responseSuccessInterceptor,
            this.interceptor?.responseErrorInterceptor
        );
    }
    request(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.instance
                .request(config)
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    get(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.request({ ...config, method: 'GET' });
    }
    post(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.request({ ...config, method: 'POST' });
    }
    put(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.request({ ...config, method: 'PUT' });
    }
    delete(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.request({ ...config, method: 'DELETE' });
    }
}

export default MyRequest;
