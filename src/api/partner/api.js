import { instance } from '@/contexts/axios';

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
            setTimeout(() => {
                console.log('timeout');
            }, 5000);
            return res.data;
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    return partner;
};

export const createPartner = async (partner) => {
    const newPartner = await instance
        .post('/partners', partner)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    return newPartner;
};

export const deletePartner = async (id) => {
    const partner = await instance
        .delete(`/partners?id=${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    return partner;
};
