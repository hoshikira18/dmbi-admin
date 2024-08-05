'use client';
import NewCategory from '@/components/category/new-category';
import DialogComponent from '@/components/common/dialog';
import { Layout } from '@/components/layout';
import { useAdminProductCategories } from 'medusa-react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { formatDate } from '@/lib/utils';
import { CirclePlus, Ellipsis } from 'lucide-react';
import CategoryItemOptions from '@/components/category/category-item-option';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CategoriesTemplate = () => {
    const { product_categories, isLoading } = useAdminProductCategories();

    return (
        <Layout>
            <Card className="bg-orange-100">
                <CardHeader>
                    <div className="flex justify-between">
                        <CardTitle className="inline-flex text-left">
                            Các danh mục
                        </CardTitle>
                        <div>
                            <DialogComponent
                                className="inline-flex text-right"
                                title="Tạo mới danh mục"
                                triggerButton={
                                    <button className="btn bg-green-500 text-primary-foreground hover:bg-green-400">
                                        <CirclePlus />
                                        Danh mục mới
                                    </button>
                                }
                                size="md"
                            >
                                <NewCategory />
                            </DialogComponent>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {
                        <Table>
                            <TableCaption>Test</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[40px]">
                                        STT
                                    </TableHead>
                                    <TableHead className="w-[150px]">
                                        Mã ID
                                    </TableHead>
                                    <TableHead className="w-[230px] pl-[50px]">
                                        Tên danh mục
                                    </TableHead>
                                    <TableHead className="w-[230px] px-[50px]">
                                        Handle
                                    </TableHead>
                                    <TableHead className="w-[220px] pr-[50px]">
                                        Ngày khởi tạo
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {product_categories?.map((category, index) => (
                                    <TableRow key={category.id}>
                                        <TableCell className="w-[40px]">
                                            <Link
                                                href={`/categories/${category.id}`}
                                                key={category.id}
                                            >
                                                <p>{index + 1}</p>
                                            </Link>
                                        </TableCell>
                                        <TableCell className="max-w-[150px] truncate">
                                            <Link
                                                href={`/categories/${category.id}`}
                                                key={category.id}
                                            >
                                                {category.id}
                                            </Link>
                                        </TableCell>
                                        <TableCell className="max-w-[200px] truncate pl-[50px]">
                                            <Link
                                                href={`/categories/${category.id}`}
                                                key={category.id}
                                            >
                                                {category.name}
                                            </Link>
                                        </TableCell>
                                        <TableCell className="max-w-[230px] truncate px-[50px]">
                                            <Link
                                                href={`/categories/${category.id}`}
                                                key={category.id}
                                            >
                                                {category.handle}
                                            </Link>
                                        </TableCell>
                                        <TableCell className="w-[230px] pr-[50px]">
                                            {formatDate(category.created_at)}
                                        </TableCell>
                                        <TableCell>
                                            <CategoryItemOptions
                                                id={category.id}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter></TableFooter>
                        </Table>
                    }
                </CardContent>
            </Card>
        </Layout>
    );
};

export default CategoriesTemplate;
