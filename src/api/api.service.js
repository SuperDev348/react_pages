
import axios from "axios";
import siteConfig from '../config/site.config';

const ApiService = {
    init(){
        // Vue.use(VueAxios, axios);
        axios.defaults.baseURL = siteConfig.apiUrl;
    },

    setHeader(){
        axios.defaults.headers.common = {
            'X-Requested-With': 'XMLHttpRequest',
            "Authorization":`Bearer ${JwtService.getToken()}`
        };
    },

    get(resource) {
        return axios.get(`${siteConfig.apiUrl}/${resource}`).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });     
    },

    post(resource, params) {
        return axios.post(`${siteConfig.apiUrl}/${resource}`, params);
    },
};

export default ApiService;