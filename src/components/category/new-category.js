'use client';
import { useAdminCreateProductCategory } from 'medusa-react';
import { set, useForm } from 'react-hook-form';
import { useState } from 'react';
import { Form, FormField, FormItem } from '../ui/form';
import { Input } from '../ui/input';
import ImageUpload from '../common/image-upload';
import { formatHandle, uploadFile } from '@/utils/index';
import { useToast } from '../ui/use-toast';
const NewCategory = () => {
    const { toast } = useToast();
    const createCategory = useAdminCreateProductCategory();
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm({
        defaultValues: {
            name: '',
            image: '',
        },
    });

    const [files, setFiles] = useState([]);
    const [handle, setHandle] = useState('');

    const handleCreateCategory = (name, image) => {
        const handle = formatHandle(name);
        createCategory.mutate(
            {
                name,
                handle,
                is_active: true,
                metadata: {
                    image: image,
                },
            },
            {
                onSuccess: ({ product_category }) => {
                    console.log(product_category);
                    toast({
                        title: 'Tạo mới danh mục thành công',
                        description: `Danh mục ${product_category.name} đã được tạo`,
                    });
                    setIsLoading(false);
                    form.reset();
                    setFiles([]);
                },
            }
        );
    };

    return (
        <div className="relative">
            <Form {...form}>
                <form className="space-y-4">
                    <FormField
                        control={form.control}
                        name="category-name"
                        render={({ field }) => (
                            <FormItem>
                                <label htmlFor="name">Tên danh mục</label>
                                <Input
                                    id="category-name"
                                    placeholder="Danh mục mới"
                                    onChange={(e) => {
                                        setHandle(formatHandle(e.target.value));
                                        console.log(handle);
                                    }}
                                    {...form.register('category-name', {
                                        required: true,
                                    })}
                                />
                            </FormItem>
                        )}
                    />
                    <ImageUpload files={files} setFiles={setFiles} />
                    <button
                        onClick={form.handleSubmit(async (data) => {
                            setIsLoading(true);
                            await uploadFile(files[0]).then((url) => {
                                handleCreateCategory(
                                    data['category-name'],
                                    data['handle'],
                                    url
                                );
                            });
                        })}
                        className="btn btn-primary w-full"
                    >
                        {isLoading && (
                            <span className="loading loading-spinner"></span>
                        )}
                        Tạo danh mục
                    </button>
                </form>
            </Form>
        </div>
    );
};

export default NewCategory;
