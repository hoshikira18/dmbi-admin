import { instance } from '@/contexts/axios';

export const getPriceRequests = async () => {
    const priceRequests = await instance
        .get('/price-quote')
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    return priceRequests;
};

export const deletePriceRequest = async (id) => {
    const deletedRequest = await instance
        .delete(`/price-quote?id=${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    return deletedRequest;
};
