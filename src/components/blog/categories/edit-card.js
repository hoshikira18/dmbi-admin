'use client';

import { updateBlogCategory } from '@/api/blog/api';
import { useUpdateBlogCategory } from '@/api/blog/hook';
import ImageUpload from '@/components/common/image-upload';
import { Form, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { uploadFile } from '@/lib/utils';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const BlogCategoryEditCard = ({ id, title, description, image }) => {
    const form = useForm({
        defaultValues: {
            title,
            description,
            image,
        },
    });
    const { toast } = useToast();
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const updateCategory = useUpdateBlogCategory();

    const handleUpdateCategory = (id, title, image, description) => {
        updateCategory.mutate(
            { id, category: { title, image, description } },
            {
                onSuccess: () => {
                    toast({
                        title: 'Cập nhật danh mục thành công',
                    });
                    setIsLoading(false);
                },
                onError: (error) => {
                    toast({
                        title: 'Đã có lỗi xảy ra',
                    });
                    console.error('Error updating blog category:', error);
                    setIsLoading(false);
                },
            }
        );
    };

    return (
        <Form {...form}>
            <form className="space-y-4">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <label htmlFor="title">Tên danh mục</label>
                            <Input
                                id="title"
                                placeholder="Danh mục mới"
                                {...form.register('title', {
                                    required: true,
                                })}
                            />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <label htmlFor="description">Mô tả danh mục</label>
                            <Input
                                id="description"
                                placeholder="Mô tả danh mục"
                                {...form.register('description', {
                                    required: false,
                                })}
                            />
                        </FormItem>
                    )}
                />
                <ImageUpload files={files} setFiles={setFiles} />
                <button
                    onClick={form.handleSubmit(async (data) => {
                        setIsLoading(true);
                        const image = await uploadFile(files);
                        if (image) {
                            handleUpdateCategory(
                                id,
                                data.title,
                                image,
                                data.description
                            );
                        } else {
                            handleUpdateCategory(
                                id,
                                data.title,
                                data.image,
                                data.description
                            );
                        }
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
    );
};

export default BlogCategoryEditCard;
