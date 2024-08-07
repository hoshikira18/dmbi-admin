import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createPartner, deletePartner, getPartner, getPartners } from './api';

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

export const useDeletePartner = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deletePartner,
        onSuccess: () => {
            queryClient.invalidateQueries('partners');
        },
        onError: (error) => {
            console.error('Error deleting partner:', error);
        },
    });
};

export const useCreatePartner = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createPartner,
        onSuccess: () => {
            queryClient.invalidateQueries('partners');
        },
        onError: (error) => {
            console.error('Error creating partner:', error);
        },
    });
};
