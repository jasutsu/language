import { get } from "./frontend/src/HttpService"

export class Login {
    static validations = { // for antd form item rules
        username: [
            { required: true, message: "Username is empty"},
        ],
        password: [
            { required: true, message: "Password is empty"},
        ],
    }

    static post = (queryData = {}, config = {}) => {
        return get(`login/`, queryData, config).catch((error) => ({
            success: false,
            data: (error.response && error.response.data) || {},
            status: (error.response && error.response.status) || 400,
        }))
    }
}