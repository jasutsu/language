import { get } from "./frontend/src/HttpService"

export class Vocabulary {
    static validations = { // for antd form item rules
        word: [
            { required: true, message: "Word input is empty."},
            { max: 50, message: "Maximum 50 characters in a word allowed."},
            { min: 3, message: "Minimum 3 characters in a word allowed."},
        ]
    }

    static list = (queryData = {}, config = {}) => {
        return get(`test/`, queryData, config).catch((error) => ({
            success: false,
            data: (error.response && error.response.data) || {},
            status: (error.response && error.response.status) || 400,
        }))
    }
}