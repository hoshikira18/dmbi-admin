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
                                    <TableHead className="w-1/15">
                                        STT
                                    </TableHead>
                                    <TableHead className="w-1/4 max-w-[150px]">
                                        Tên danh mục
                                    </TableHead>
                                    <TableHead className="w-1/2">
                                        Hình ảnh
                                    </TableHead>
                                    <TableHead className="w-1/4 max-w-[200px] text-right"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {blogCategories?.map((category, index) => (
                                    <TableRow key={category.id}>
                                        <TableCell className="w-1/15">
                                            <Link
                                                href={`/blog/categories/${category.id}`}
                                            >
                                                {index + 1}
                                            </Link>
                                        </TableCell>
                                        <TableCell className="w-1/4 max-w-[150px] pr-[30px]">
                                            <Link
                                                href={`/blog/categories/${category.id}`}
                                            >
                                                {category.title}
                                            </Link>
                                        </TableCell>
                                        <TableCell className="w-3/5">
                                            <Link
                                                href={`/blog/categories/${category.id}`}
                                            >
                                                <img
                                                    src={category.image}
                                                    alt={category.name}
                                                    className="h-1/4 max-h-[350px] min-h-[100px] w-full min-w-[150px] border-2 object-cover"
                                                />
                                            </Link>
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
