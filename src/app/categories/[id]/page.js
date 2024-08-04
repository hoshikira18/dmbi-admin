/* eslint-disable @next/next/no-img-element */
'use client';
import { Layout } from '@/components/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Car } from 'lucide-react';
import { useAdminProductCategory, useProductCategory } from 'medusa-react';
import React from 'react';

const CategoryDetailPage = ({ params }) => {
    const { product_category, isLoading } = useAdminProductCategory(params.id);

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
