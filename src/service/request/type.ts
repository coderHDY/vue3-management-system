import { AxiosRequestConfig } from 'axios';

export interface Interceptor {
    requestSuccessInterceptor?: (config: AxiosInterceptorConfig) => AxiosInterceptorConfig;
    requestErrorInterceptor?: (config: AxiosInterceptorConfig) => AxiosInterceptorConfig;
    responseSuccessInterceptor?: (config: AxiosInterceptorConfig) => AxiosInterceptorConfig;
    responseErrorInterceptor?: (config: AxiosInterceptorConfig) => AxiosInterceptorConfig;
}

export interface AxiosInterceptorConfig extends AxiosRequestConfig {
    interceptor?: Interceptor;
}
