'use client';
import DialogComponent from '@/components/common/dialog';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PencilLineIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CollectionSelector from '../new/collection-selector';
import CategoriesSelector from '../new/categories-selector';
import { useToast } from '@/components/ui/use-toast';

const EditClassify = ({
    handleUpdate,
    collection,
    categories: oldCategories,
}) => {
    const { toast } = useToast();
    const [categories, setCategories] = useState([]);
    const form = useForm({
        defaultValues: {
            collection_id: collection?.id || '',
        },
    });

    const createPayload = (data) => {
        return {
            collection_id: data.collection_id,
            categories: categories.map((c) => ({
                id: c.value,
            })),
        };
    };

    return (
        <DialogComponent
            triggerButton={
                <button className="mr-2">
                    <PencilLineIcon size={16} />
                </button>
            }
            title="Đổi tên sản phẩm"
            size="lg"
        >
            <div className="min-h-[40vh] space-y-2">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit((data) => {
                            toast({
                                title: 'Đang cập nhật sản phẩm...',
                            });
                            handleUpdate(createPayload(data));
                        })}
                        className="grid grid-cols-2 gap-4"
                    >
                        <CategoriesSelector
                            categories={categories}
                            setCategories={setCategories}
                        />
                        <CollectionSelector form={form} />
                        <Button type="submit" size="lg" className="col-span-2">
                            Lưu
                        </Button>
                    </form>
                </Form>
            </div>
        </DialogComponent>
    );
};

export default EditClassify;
