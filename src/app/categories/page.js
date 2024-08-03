'use client';
import NewCategory from '@/components/category/new-category';
import DialogComponent from '@/components/common/dialog';
import { useAdminProductCategories } from 'medusa-react';

const Categories = () => {
    const { product_categories, isLoading } = useAdminProductCategories();
    console.log(product_categories);

    return (
        <div>
            <h1>Categories</h1>
            <DialogComponent
                title="Tạo mới danh mục"
                triggerButton={
                    <button className="btn bg-green-500 text-primary-foreground hover:bg-green-400">
                        Danh mục mới
                    </button>
                }
                size="lg"
            >
                <NewCategory />
            </DialogComponent>
        </div>
    );
};

export default Categories;
