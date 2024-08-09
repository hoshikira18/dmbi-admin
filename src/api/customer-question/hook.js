import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteCustomerQuestion, getCustomerQuestions } from './api';
import { staleTime, cacheTime } from '@/contexts/constants';

export const useCustomerQuestions = () => {
    return useQuery(['customer-questions'], getCustomerQuestions, {
        staleTime,
        cacheTime,
        onError: (error) => {
            console.error('Error fetching customer questions:', error);
        },
    });
};

export const useDeleteCustomerQuestion = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteCustomerQuestion,
        onSuccess: () => {
            queryClient.invalidateQueries('customer-questions');
        },
        onError: (error) => {
            console.error('Error deleting customer question:');
        },
    });
};
