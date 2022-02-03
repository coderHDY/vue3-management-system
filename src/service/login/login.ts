import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import requestIst from '../';

export function login(config: AxiosRequestConfig): Promise<AxiosResponse> {
    config.url = '/info';
    return requestIst.post(config);
}
