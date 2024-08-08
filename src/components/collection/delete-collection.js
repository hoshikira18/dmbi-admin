import React from 'react';
import { useAdminDeleteCollection } from 'medusa-react';
import { useToast } from '../ui/use-toast';

const CollectionDeleteButton = ({ id }) => {
    const {toast} = useToast();
    const  deleteCollection =
        useAdminDeleteCollection(id);

    const handleDelete = () => {
        deleteCollection.mutate(void 0, {
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

export default CollectionDeleteButton