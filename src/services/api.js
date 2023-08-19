import axios from "axios";

axios.defaults.baseURL = 'https://64c4d51367cfdca3b661075c.mockapi.io/api/v1/';

export const getAdvertsCars = async () => {
    const response = await axios.get(`/AdvertsCars`);
    const vehicles = response.data;
    return vehicles;
};