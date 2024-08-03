'use client';
import { useAdminCreateProductCategory } from 'medusa-react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Form, FormField, FormItem } from '../ui/form';
import { Input } from '../ui/input';
import ImageUpload from '../common/image-upload';
import { uploadFile } from '@/lib/utils';
const NewCategory = () => {
    const createCategory = useAdminCreateProductCategory();
    const handleCreateCategory = (name, handle, image) => {
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
                },
            }
        );
    };

    const form = useForm({
        defaultValues: {
            name: '',
            handle: '',
            image: '',
        },
    });
    const [files, setFiles] = useState([]);

    return (
        <div>
            <Form {...form}>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="category-name"
                            render={({ field }) => (
                                <FormItem>
                                    <label htmlFor="name">Tên danh mục</label>
                                    <Input
                                        id="category-name"
                                        placeholder="Danh mục mới"
                                        {...form.register('category-name', {
                                            required: true,
                                        })}
                                    />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="Đường dẫn"
                            render={({ field }) => (
                                <FormItem>
                                    <label htmlFor="handle">Đường dẫn</label>
                                    <Input
                                        id="handle"
                                        placeholder="danh-muc-moi"
                                        {...form.register('handle', {
                                            required: true,
                                        })}
                                    />
                                </FormItem>
                            )}
                        />
                    </div>
                    <ImageUpload files={files} setFiles={setFiles} />
                    <button
                        onClick={form.handleSubmit(async (data) => {
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
                        Tạo danh mục
                    </button>
                </form>
            </Form>
        </div>
    );
};

export default NewCategory;
