import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import { FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useAdminProductCategories } from 'medusa-react';

const CategoriesSelector = ({ categories, setCategories }) => {
    const { product_categories, isLoading } = useAdminProductCategories();
    console.log(product_categories);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    const options = product_categories?.map((c) => ({
        label: c.name,
        value: c.id,
    }));

    return (
        <div className="space-y-2">
            <label className="text-sm font-semibold">Danh mục</label>
            <MultiSelect
                options={options}
                value={categories}
                onChange={setCategories}
                labelledBy="Select"
                className="text-sm font-normal"
            />
        </div>
    );
};

export default CategoriesSelector;
