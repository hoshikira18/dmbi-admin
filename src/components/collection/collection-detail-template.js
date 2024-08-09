/* eslint-disable @next/next/no-img-element */
'use client';
import DialogComponent from '@/components/common/dialog';
import ImageUpload from '@/components/common/image-upload';
import { Layout } from '@/components/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormField, FormItem } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { Car, Pencil } from 'lucide-react';
import { useAdminCollection, useAdminUpdateCollection } from 'medusa-react';
import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { formatDate, uploadFile } from '@/lib/utils';

const CollectionDetailTemplate = ({ params }) => {
    const { toast } = useToast();
    const { collection: product_collection, isLoading: isCollectionLoading } =
        useAdminCollection(params.id);
    console.log(product_collection);

    const updateProductCollection = useAdminUpdateCollection(params.id);
    const form = useForm({
        defaultValues: {
            name: product_collection?.name,
            image: product_collection?.metadata.image,
        },
    });

    const [files, setFiles] = useState([]);
    const [isSaving, setIsSaving] = useState(false);

    const handleUpdateCollection = (
        name = product_collection?.name,
        image = product_collection?.metadata.image
    ) => {
        updateProductCollection.mutate(
            {
                name,
                metadata: {
                    image,
                },
            },
            {
                onSuccess: ({ product_collection }) => {
                    console.log(product_collection);
                    toast({
                        title: 'Cập nhật danh mục thành công',
                        description: `Danh mục ${product_collection.name} đã được cập nhật`,
                        status: 'success',
                    });
                    setIsSaving(false);
                },
            }
        );
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
                                                    Tên bộ sưu tập
                                                </label>
                                                <Input
                                                    id="name"
                                                    placeholder="Bộ sưu tập mới"
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
                                        onClick={form.handleSubmit(
                                            async (data) => {
                                                setIsSaving(true);
                                                await uploadFile(files).then(
                                                    (res) => {
                                                        handleUpdateCollection(
                                                            data['name'],
                                                            res
                                                        );
                                                    }
                                                );
                                            }
                                        )}
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
                        <CardTitle>{product_collection?.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="relative flex flex-col space-y-4">
                            <div className="flex items-center space-x-2">
                                <div className="font-semibold">Handle: </div>
                                <span>{product_collection?.title}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="font-semibold">Ngày tạo: </div>
                                <span>
                                    {formatDate(product_collection?.created_at)}
                                </span>
                            </div>
                            <div className="relative overflow-hidden rounded-lg border-2 border-gray-400">
                                <img
                                    src={product_collection?.metadata?.image}
                                    alt="category-image"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Layout>
        );
    };
};

export default CollectionDetailTemplate;
