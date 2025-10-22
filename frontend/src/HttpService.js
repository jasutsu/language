import axiosMaster from "./axiosMaster";

const get = (url, queryData = {}, config) => {
    return axiosMaster
        .get(url, { params: queryData, ...(config || {}) })
        .then((response) => {
            return Promise.resolve(response.data);
        })
        .catch((error) => {
            return Promise.reject(error);
        });
};

const post = (url, queryData, config) => {
    return axiosMaster.post(url, queryData, config)
        .then((response) => {
            return Promise.resolve(response.data);
        }).catch((error) => {
            return Promise.reject(error);
        });
}

const put = (url, queryData) => {
    return axiosMaster.put(url, queryData)
        .then((response) => {
            return Promise.resolve(response.data);
        }).catch((error) => {
            return Promise.reject(error);
        });
}

const patch = (url, queryData) => {
    return axiosMaster.patch(url, queryData)
        .then((response) => {
            return Promise.resolve(response.data);
        }).catch((error) => {
            return Promise.reject(error);
        });
}

const httpDelete = (url, queryData, config={}) => {
    return axiosMaster.delete(url, { params: queryData, ...(config || {}) },queryData)
        .then((response) => {
            return Promise.resolve(response.data);
        }).catch((error) => {
            return Promise.reject(error);
        });
}

export { get, post, put, patch, httpDelete }
