import React from 'react';
import { useAdminDeleteProductCategory } from 'medusa-react';
import { useToast } from '../ui/use-toast';

const CategoryDeleteButton = ({ id }) => {
    const {toast} = useToast();
    const  deleteCategory =
        useAdminDeleteProductCategory(id);

    const handleDelete = () => {
        deleteCategory.mutate(void 0, {
            onSuccess: ({ id, object, deleted }) => {
                console.log(id);
                toast({
                    title: "Xóa thành công"
                })
            },
            onError: ({ id }) => {
                console.log(id);
            },
        });
    };

    return (
        
        <div className="m-[-10px] p-[-10px]">
            <div className="mt-[25px] flex justify-around">
                <button className="h-[50px] w-4/5 rounded bg-red-500"
                    onClick={() => {
                        handleDelete()
                    }}
                >
                    Có
                </button>
            </div>
        </div>
    );
};

export default CategoryDeleteButton