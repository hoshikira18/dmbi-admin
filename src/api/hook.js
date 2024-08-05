import { useQuery } from '@tanstack/react-query';
import { getPartners } from './api';

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
