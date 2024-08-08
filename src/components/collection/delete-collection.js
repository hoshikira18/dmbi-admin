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
            <div>
                <div>Bạn có muốn xóa bộ sưu tập này?</div>
            </div>
            <div className="mt-[25px] flex justify-around">
                <button className="h-[50px] w-2/5 rounded bg-red-500"
                    onClick={() => {
                        handleDelete()
                    }}
                >
                    Có
                </button>
                <button className="h-[50px] w-2/5 rounded bg-green-500">
                    Không
                </button>
            </div>
        </div>
    );
};

export default CollectionDeleteButton