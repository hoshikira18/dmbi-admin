import React from 'react';
import { EditClassify } from '../edit';
import { Label } from '@/components/ui/label';

const Classify = ({ collection, categories, handleUpdate }) => {
    console.log(collection, categories);
    return (
        <div>
            <h2 className="my-2 flex items-center text-xl font-semibold">
                <EditClassify
                    handleUpdate={handleUpdate}
                    collection={collection}
                    categories={categories}
                />
                Phân loại
            </h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label>Danh mục: </Label>
                    <span>
                        {categories
                            ?.map((category) => category.name)
                            .join(', ')}
                    </span>
                </div>
                <div>
                    <Label>Bộ sản phẩm: </Label>
                    <span>{collection?.title}</span>
                </div>
            </div>
        </div>
    );
};

export default Classify;
