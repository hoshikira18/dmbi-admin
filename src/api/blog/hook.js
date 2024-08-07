import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBlogCategory, createPost } from './api';

export const useCreateBlogCategory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createBlogCategory,
        onSuccess: () => {
            queryClient.invalidateQueries('blog-categories');
        },
        onError: (error) => {
            console.error('Error creating blog category:', error);
        },
    });
};

export const useCreatePost = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries('posts');
        },
        onError: (error) => {
            console.error('Error creating post:', error);
        },
    });
};
