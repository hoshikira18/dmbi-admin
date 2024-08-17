import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { staleTime, cacheTime } from '@/contexts/constants';
import { createBanner, deleteBanner, getBanners } from './api';

export const useBanners = () => {
    return useQuery(['banners'], getBanners, {
        staleTime,
        cacheTime,
        onError: (error) => {
            console.error('Error fetching banners:', error);
        },
    });
};

export const useCreateBanner = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createBanner,
        onSuccess: () => {
            queryClient.invalidateQueries('banners');
        },
        onError: () => {
            console.log('Error when create new banner');
        },
    });
};

export const useDeleteBanner = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteBanner,
        onSuccess: () => {
            queryClient.invalidateQueries('banners');
        },
        onError: () => {
            console.log('Error when delete banner');
        },
    });
};
