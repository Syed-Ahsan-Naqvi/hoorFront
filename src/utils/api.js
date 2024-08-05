import axios from "axios";

const keyData = process.env.REACT_APP_STRIPE_APP_KEY;
const urlData = process.env.REACT_APP_DEV_URL;

const params = {
    headers: {
        // Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
        Authorization: "bearer " + keyData,
    }
}

export const fetchDataFromApi = async (url) => {
    try {
        // const { data } = await axios.get(process.env.REACT_APP_DEV_URL + url, params)
        const { data } = await axios.get(urlData + url, params)
        return data;
    } catch (error) {
        console.log(error)
        return error;
    }
}

export const makePaymentRequest = axios.create({
    baseURL: process.env.REACT_APP_DEV_URL,
    headers: {
        // Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
        Authorization: "bearer " + keyData,
    }
})