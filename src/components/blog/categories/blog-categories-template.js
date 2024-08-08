/* eslint-disable @next/next/no-img-element */
'use client';
import DialogComponent from '@/components/common/dialog';
import { Layout } from '@/components/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import NewBlogCategory from './new-blog-category';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { useBlogCategories, useDeleteBlogCategory } from '@/api/blog/hook';
import Spinner from '@/components/common/spinner';
import { EyeIcon, Pencil, Trash } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import BlogCategoryEditCard from './edit-card';
import Link from 'next/link';

const BlogCategoriesTemplate = () => {
    const { toast } = useToast();
    const { data: blogCategories, isLoading } = useBlogCategories();
    const { mutate: deleteBlogCategory } = useDeleteBlogCategory();

    const handleDeleteBlogCategory = (id) => {
        toast({
            title: 'Đang xóa danh mục...',
        });
        deleteBlogCategory(id, {
            onSuccess: () => {
                toast({
                    title: 'Xóa danh mục thành công',
                });
            },
            onError: (error) => {
                toast({
                    title: 'Đã có lỗi xảy ra',
                });
                console.error('Error deleting blog category:', error);
            },
        });
    };

    return (
        <Layout>
            <DialogComponent
                title={'Tạo mới danh mục'}
                triggerButton={
                    <button className="btn btn-primary">Tạo mới</button>
                }
                size="lg"
            >
                <NewBlogCategory />
            </DialogComponent>
            {isLoading ? (
                <Spinner />
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle>Danh mục bài viết</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">
                                        STT
                                    </TableHead>
                                    <TableHead className="w-[250px]">
                                        Tên danh mục
                                    </TableHead>
                                    <TableHead>Hình ảnh</TableHead>
                                    <TableHead className="min-w-[300px] text-right"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {blogCategories?.map((category, index) => (
                                    <TableRow key={category.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell className="">
                                            {category.title}
                                        </TableCell>
                                        <TableCell>
                                            <img
                                                src={category.image}
                                                alt={category.name}
                                                className="h-[250px] w-full border-2 object-cover"
                                            />
                                        </TableCell>
                                        <TableCell className="space-x-2 text-right">
                                            <Link
                                                href={`/blog/categories/${category.id}`}
                                            >
                                                <button className="btn btn-outline">
                                                    <EyeIcon size={20} />
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDeleteBlogCategory(
                                                        category.id
                                                    )
                                                }
                                                className="btn btn-outline btn-error"
                                            >
                                                <Trash size={20} />
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            )}
        </Layout>
    );
};
export default BlogCategoriesTemplate;
