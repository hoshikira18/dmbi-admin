import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
    createBlogCategory,
    createPost,
    deleteBlogCategory,
    deletePost,
    getBlogCategories,
    getBlogCategory,
    getPost,
    getPosts,
    updateBlogCategory,
    updatePost,
} from './api';
import { staleTime, cacheTime } from '@/contexts/constants';

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

export const useBlogCategories = () => {
    return useQuery(['blog-categories'], () => getBlogCategories(), {
        staleTime,
        cacheTime,
        onError: (error) => {
            console.error('Error fetching blog categories:', error);
        },
    });
};

export const useBlogCategory = (id) => {
    return useQuery(['blog-category', id], () => getBlogCategory(id), {
        staleTime,
        cacheTime,
        onError: (error) => {
            console.error('Error fetching blog category:', error);
        },
    });
};

export const useDeleteBlogCategory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteBlogCategory,
        onSuccess: () => {
            queryClient.invalidateQueries('blog-categories');
        },
        onError: (error) => {
            console.error('Error deleting blog category:', error);
        },
    });
};

export const useUpdateBlogCategory = () => {
    const queryClient = useQueryClient();

    return useMutation((data) => updateBlogCategory(data.id, data.category), {
        onSuccess: () => {
            queryClient.invalidateQueries('blog-categories');
        },
        onError: (error) => {
            console.error('Error updating blog category:', error);
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

export const useBlogPosts = () => {
    return useQuery(['posts'], () => getPosts(), {
        staleTime,
        cacheTime,
        onError: (error) => {
            console.error('Error fetching posts:', error);
        },
    });
};

export const useBlogPost = (id) => {
    return useQuery(['post'], () => getPost(id), {
        staleTime,
        cacheTime,
        onError: (error) => {
            console.error('Error fetching post:', error);
        },
    });
};

export const useDeleteBlogPost = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deletePost,
        onSuccess: () => {
            queryClient.invalidateQueries('posts');
        },
        onError: (error) => {
            console.error('Error deleting post:', error);
        },
    });
};

export const useUpdatePost = () => {
    const queryClient = useQueryClient();

    return useMutation((data) => updatePost(data.id, data.post), {
        onSuccess: () => {
            queryClient.invalidateQueries('posts');
        },
        onError: (error) => {
            console.error('Error updating post:', error);
        },
    });
};
