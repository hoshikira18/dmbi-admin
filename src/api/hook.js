import { useQuery } from '@tanstack/react-query';
import { getPartner, getPartners } from './api';

const staleTime = 5 * 60 * 1000; // 5 minutes
const cacheTime = 10 * 60 * 1000; // 10 minutes

export const usePartners = () => {
    return useQuery(['partners'], getPartners, {
        staleTime,
        cacheTime,
        onError: (error) => {
            console.error('Error fetching partners:', error);
        },
    });
};

export const usePartner = (id) => {
    return useQuery(['partner', id], () => getPartner(id), {
        staleTime,
        cacheTime,
        onError: (error) => {
            console.error('Error fetching partner:', error);
        },
    });
};
