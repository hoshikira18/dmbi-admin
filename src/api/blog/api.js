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

export const getBlogCategories = async () => {
    const categories = await instance
        .get('/blog-categories')
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    return categories;
};

export const getBlogCategory = async (id) => {
    const blogCategory = await instance
        .get(`/blog-categories/${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    return blogCategory;
};

export const deleteBlogCategory = async (id) => {
    const deletedCategory = await instance
        .delete(`/blog-categories?id=${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    return deletedCategory;
};

export const updateBlogCategory = async (id, category) => {
    const updatedCategory = await instance
        .put(`/blog-categories?id=${id}`, category)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    return updatedCategory;
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
