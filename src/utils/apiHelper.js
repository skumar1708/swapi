import axios from "axios";

const baseAPIResourceURL = "https://swapi.co/api/";

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
};


const axiosInstance = axios.create({
    baseURL: baseAPIResourceURL,
    timeout: 1800000,
    headers
});

export const baseAPIResource = {
    get: (slug) => {
        return axiosInstance.get(slug);
    }
};