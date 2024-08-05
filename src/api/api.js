import { instance } from '@/utils/axios';

export const getPartners = async () => {
    const partners = await instance
        .get('/partners')
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    return partners;
};

export const getPartner = async (id) => {
    const partner = await instance
        .get(`/partners/${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    return partner;
};
