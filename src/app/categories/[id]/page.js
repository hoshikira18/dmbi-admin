/* eslint-disable @next/next/no-img-element */
'use client';
import DialogComponent from '@/components/common/dialog';
import ImageUpload from '@/components/common/image-upload';
import { Layout } from '@/components/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { formatDate } from '@/lib/utils';
import { Car, Pencil } from 'lucide-react';
import { useAdminProductCategory, useProductCategory } from 'medusa-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CategoryDetailPage = ({ params }) => {
    const { product_category, isLoading } = useAdminProductCategory(params.id);
    const imageForm = useForm({
        defaultValues: {
            image: '',
        },
    });

    const [newImage, setNewImage] = useState([]);

    return (
        <Layout>
            <Card>
                <CardHeader>
                    <CardTitle>{product_category?.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col space-y-4">
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
                            <div className="absolute right-2 top-2 z-20">
                                <DialogComponent
                                    title={'Thay đổi ảnh'}
                                    triggerButton={
                                        <button className="btn btn-square bg-green-500/30 hover:bg-green-500/50">
                                            <Pencil size={15} />
                                        </button>
                                    }
                                >
                                    <Form {...imageForm}>
                                        <form>
                                            <ImageUpload />
                                        </form>
                                    </Form>
                                </DialogComponent>
                            </div>
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
