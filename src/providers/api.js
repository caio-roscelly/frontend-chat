import axiosProvider from './config/axios';

export function messageAssistant(params) {
    return axiosProvider.post('/assistant',  params);
}






