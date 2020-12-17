import axios from 'axios'
import config from '../config/config'

/**
 * Service providing connection do server
 */
class HttpService {
    constructor() {
        this.headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        };
    }

    /**
     * Combines host domain with endpoint
     * @param {string} endpoint rest endpoint to server
     */
    _getUrl = (endpoint, queryParams = '') => {
        const queryString = queryParams ? this._getQueryParams(queryParams) : ''
        return this._getHost() + endpoint + queryString
    }

    /**
     * Gets host domain from config
     */
    _getHost = () => {
        const HOST = config.IPSTACK_HOST
        if (!HOST) {
            throw new Error("Host not find")
        }
        return HOST;
    }

    /**
     * Gets parameters
     * @param {array} queryParams params to query
     */
    _getQueryParams = queryParams => {
        let query = '?';
        Object.keys(queryParams).map((key, index) => {
            const formatParam = `${index !== 0 ? '&' : ''}${key}=${queryParams[key]}`;
            query = query.concat(formatParam);
            return false;
        });
        return query;
    };

    /**
     * Resolves custom headers combineing them with default class headers
     * @param {object} customHeaders JSON object - custom headers
     */
    _resolveHeaders = (customHeaders = {}) => {
        return { ...this.headers, ...customHeaders }
    }

    /**
     * GET method for get requests
     * @param {object} options JSON object
     */
    get = options => {
        axios({
            headers: this._resolveHeaders(options.headers),
            method: 'get',
            url: this._getUrl(options.endpoint, options.queryParams)
        })
            .then(response => {
                options.onSuccess(response);
            })
            .catch(error => {
                options.onError(error)
            })
    }

    /**
     * POST method for post requests
     * @param {object} options JSON object
     */
    post = options => {
        axios({
            headers: this._resolveHeaders(options.headers),
            data: options.payload ? options.payload : {},
            method: 'post',
            url: this._getUrl(options.endpoint)
        })
            .then(response => {
                options.onSuccess(response);
            })
            .catch(error => {
                options.onError(error.response)
            })


    }

}

export default HttpService;