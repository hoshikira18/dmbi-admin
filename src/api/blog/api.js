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

export const getPosts = async () => {
    const posts = await instance
        .get('/posts')
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    return posts;
};

export const getPost = async (id) => {
    const post = await instance
        .get(`/posts/${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    return post;
};

export const deletePost = async (id) => {
    const deletedPost = await instance
        .delete(`/posts?id=${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    return deletedPost;
};

export const updatePost = async (id, post) => {
    const updatedPost = await instance
        .put(`/posts?id=${id}`, post)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    return updatedPost;
};
