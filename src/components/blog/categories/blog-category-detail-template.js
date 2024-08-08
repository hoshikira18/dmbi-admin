/* eslint-disable @next/next/no-img-element */
'use client';

import { useBlogCategory } from '@/api/blog/hook';
import DialogComponent from '@/components/common/dialog';
import { Layout } from '@/components/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BlogCategoryEditCard from './edit-card';
import { Pencil } from 'lucide-react';

const BlogCategoryDetailTemplate = ({ params }) => {
    const { data: blogCategory, isLoading } = useBlogCategory(params.id);
    console.log(blogCategory);
    return (
        <Layout>
            {!blogCategory && !isLoading ? (
                <div>Not found</div>
            ) : (
                <Card>
                    <CardHeader className="relative">
                        <CardTitle className="pb-10">
                            {blogCategory?.title}
                        </CardTitle>
                        <img
                            className="rounded-lg border-2 object-cover"
                            src={blogCategory?.image}
                            alt={blogCategory?.title}
                        />
                        <div className="absolute right-4 top-4">
                            <DialogComponent
                                title={'Chỉnh sửa danh mục'}
                                triggerButton={
                                    <button className="btn btn-outline btn-success">
                                        <Pencil size={20} />
                                    </button>
                                }
                                size="lg"
                            >
                                <BlogCategoryEditCard {...blogCategory} />
                            </DialogComponent>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <p>{blogCategory?.description}</p>
                        </div>
                    </CardContent>
                </Card>
            )}
        </Layout>
    );
};
export default BlogCategoryDetailTemplate;
