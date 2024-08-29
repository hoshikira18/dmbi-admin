'use client';

import { useState } from 'react';
import { useToast } from '../ui/use-toast';
import { DialogComponent, MultipleInput } from '../common';
import { PencilLineIcon } from 'lucide-react';
import { Button } from '../ui/button';

const EditAddress = ({ handleUpdate, store }) => {
    const { toast } = useToast();
    const [address, setAddress] = useState(store?.metadata?.address);

    return (
        <DialogComponent
            triggerButton={
                <button className="mr-2">
                    <PencilLineIcon size={16} />
                </button>
            }
            title="Đổi địa chỉ"
            size="lg"
        >
            <MultipleInput data={address} setData={setAddress} />
            <Button
                type="button"
                size="lg"
                className="mt-5 w-full"
                onClick={() => {
                    handleUpdate({
                        metadata: {
                            address: address,
                        },
                    });
                }}
            >
                Lưu
            </Button>
        </DialogComponent>
    );
};

export default EditAddress;
