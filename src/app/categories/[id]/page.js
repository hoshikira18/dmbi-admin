/* eslint-disable @next/next/no-img-element */
'use client';
import DialogComponent from '@/components/common/dialog';
import ImageUpload from '@/components/common/image-upload';
import { Layout } from '@/components/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormField, FormItem } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { formatDate, uploadFile } from '@/lib/utils';
import { Car, Pencil } from 'lucide-react';
import {
    useAdminProductCategory,
    useAdminUpdateProductCategory,
} from 'medusa-react';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { set, useForm } from 'react-hook-form';

const CategoryDetailPage = ({ params }) => {
    const { toast } = useToast();
    const { product_category, isLoading: isCategoryLoading } =
        useAdminProductCategory(params.id);

    const updateProductCategory = useAdminUpdateProductCategory(params.id);
    const form = useForm({
        defaultValues: {
            name: product_category?.name,
            image: product_category?.metadata.image,
        },
    });

    const [files, setFiles] = useState([]);
    const [isSaving, setIsSaving] = useState(false);

    const handleUpdateCategory = (
        name = product_category?.name,
        image = product_category?.metadata.image
    ) => {
        updateProductCategory.mutate(
            {
                name,
                metadata: {
                    image,
                },
            },
            {
                onSuccess: ({ product_category }) => {
                    console.log(product_category);
                    toast({
                        title: 'Cập nhật danh mục thành công',
                        description: `Danh mục ${product_category.name} đã được cập nhật`,
                    });
                    setIsSaving(false);
                },
            }
        );
    };

    return (
        <Layout>
            <Card className="relative">
                <div className="absolute right-4 top-4 z-20">
                    <DialogComponent
                        title={'Thay đổi ảnh'}
                        size="md"
                        triggerButton={
                            <button className="btn btn-square bg-green-500/30 hover:bg-green-500/50">
                                <Pencil size={15} />
                            </button>
                        }
                    >
                        <Form {...form}>
                            <form>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <label htmlFor="name">
                                                Tên danh mục
                                            </label>
                                            <Input
                                                id="name"
                                                placeholder="Danh mục mới"
                                                {...form.register('name', {
                                                    required: true,
                                                })}
                                            />
                                        </FormItem>
                                    )}
                                />

                                <ImageUpload
                                    files={files}
                                    setFiles={setFiles}
                                />
                                <button
                                    className="btn btn-primary w-full"
                                    onClick={form.handleSubmit(async (data) => {
                                        setIsSaving(true);
                                        await uploadFile(files).then((res) => {
                                            handleUpdateCategory(
                                                data['name'],
                                                res
                                            );
                                        });
                                    })}
                                >
                                    {isSaving && (
                                        <span className="loading loading-spinner"></span>
                                    )}
                                    Lưu thay đổi
                                </button>
                            </form>
                        </Form>
                    </DialogComponent>
                </div>
                <CardHeader>
                    <CardTitle>{product_category?.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative flex flex-col space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="font-semibold">Handle: </div>
                            <span>{product_category?.handle}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="font-semibold">Ngày tạo: </div>
                            <span>
                                {formatDate(product_category?.created_at)}
                            </span>
                        </div>
                        <div className="relative overflow-hidden rounded-lg border-2 border-gray-400">
                            <img
                                src={product_category?.metadata?.image}
                                alt="category-image"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Layout>
    );
};

export default CategoryDetailPage;
