import { instance } from '@/contexts/axios';

export const getCustomerQuestions = async () => {
    const questions = await instance
        .get('/customer-questions')
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    return questions;
};

export const deleteCustomerQuestion = async (id) => {
    const deletedQuestion = await instance
        .delete(`/customer-questions?id=${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    return deletedQuestion;
};
