// load Util class
import axios from 'axios';
import Util from './util';
const rp = require('request-promise');
/**
 * Qiniu module to implement all apis.
 */
export default class Qiniu {
    static buckets(ak, sk) {
        const mac = {
            accessKey: ak,
            secretKey: sk,
        };
        const requestURI = 'http://rs.qbox.me/buckets';
        const reqBody = '';
        const accessToken = Util.generateAccessToken(mac, requestURI, reqBody);

        const options = {
            uri: requestURI,
            headers: {
                Authorization: accessToken,
            },
            json: true,
        };

        return rp(options);
    }

    static list(ak, sk, bucket, marker = '', prefix = '', limit = 100) {
        const mac = {
            accessKey: ak,
            secretKey: sk,
        };
        const requestURI = `http://rsf.qbox.me/list?bucket=${bucket}&limit=100&marker=${marker}&prefix=${prefix}`;
        const reqBody = '';
        const accessToken = Util.generateAccessToken(mac, requestURI, reqBody);

        const options = {
            uri: requestURI,
            headers: {
                Authorization: accessToken,
            },
            json: true,
        };

        return rp(options);
    }

    static domain(ak, sk, bucket) {
        const mac = {
            accessKey: ak,
            secretKey: sk,
        };
        const requestURI = `http://api.qiniu.com/v6/domain/list?tbl=${bucket}`;
        const reqBody = '';
        const accessToken = Util.generateAccessToken(mac, requestURI, reqBody);

        const options = {
            uri: requestURI,
            headers: {
                Authorization: accessToken,
            },
            json: true,
        };

        return rp(options);
    }
}