import isString from 'lodash/isString';
import axios from 'axios';
import {API} from './Url'

export default class Api {
    static async get(URL) {
        try {
            return await axios.get(`${API}/${URL}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        } catch (err) {
            return err;
        }
    }

    static async post(URL, body) {
        try {
            return await axios.post(
                `${API}/${URL}`, isString(body) ? body : JSON.stringify(body), {
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
        } catch (err) {
            return err;
        }
    }

    static async put(URL, body) {
        try {
            return await axios.put(
                `${API}/${URL}`, body, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
        } catch (err) {
            return err;
        }
    }

    static async delete(URL, body) {
        try {
            return await axios.delete(
                `${API}/${URL}`, body, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
        } catch (err) {
            return err;
        }
    }
}