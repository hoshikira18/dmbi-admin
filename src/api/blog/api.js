import { instance } from '@/contexts/axios';

export const createBlogCategory = async (category) => {
    const newCategory = await instance
        .post('/blog-categories', category)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    return newCategory;
};

export const createPost = async (post) => {
    const newPost = await instance
        .post('/posts', post)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    return newPost;
};
