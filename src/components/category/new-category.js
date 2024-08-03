'use client';
import { useAdminCreateProductCategory } from 'medusa-react';
const NewCategory = () => {
    const createCategory = useAdminCreateProductCategory();
    const handleCreateCategory = () => {
        createCategory.mutate(
            {
                name: 'Newasdasd Cadsadategasdasory',
                // metadata: {
                //     image: 'https://example.com/image.jpg',
                // },
            },
            {
                onSuccess: ({ product_category }) => {
                    console.log(product_category.id);
                },
            }
        );
    };
    return (
        <div>
            <h1>New Category</h1>
            <button
                onClick={handleCreateCategory}
                className="btn bg-green-500 text-primary-foreground hover:bg-green-400"
            >
                Create Category
            </button>
        </div>
    );
};

export default NewCategory;
