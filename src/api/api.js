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
