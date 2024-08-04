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
  } from "@/components/ui/table"
import { handler } from 'tailwindcss-animate';
import { formatDate } from '@/lib/utils';
import { Ellipsis } from 'lucide-react';
import CategoryItemOptions from '@/components/category/category-item-option';
import Link from 'next/link';

const Categories = () => {
    const { product_categories, isLoading } = useAdminProductCategories();
    console.log(product_categories);
    // product_categories.map((category, index) => {
    //     console.log(category)
    // })

    return (
        <Layout>
            <h1>Categories</h1>
            <DialogComponent
                title="Tạo mới danh mục"
                triggerButton={
                    <button className="btn bg-green-500 text-primary-foreground hover:bg-green-400">
                        Danh mục mới
                    </button>
                }
                size="lg"
            >
                <NewCategory />
            </DialogComponent>
            
            {
            <Table>
                <TableCaption>Test</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[80px]">STT</TableHead>
                        <TableHead className="w-[150px]">ID</TableHead>
                        <TableHead className="pl-[40px]">CategoryName</TableHead>
                        <TableHead>Handle</TableHead>
                        <TableHead>CreateAt</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {product_categories?.map((category, index) => (
                            
                            <TableRow key={category.handle}>
                                <TableCell><Link href={`/categories/${category.id}`} key={category.id}><p>{index+1}</p></Link></TableCell>
                                <TableCell className="max-w-[150px] truncate"><Link href={`/categories/${category.id}`} key={category.id}>{category.id}</Link></TableCell>
                                <TableCell className="pl-[40px]"><Link href={`/categories/${category.id}`} key={category.id}>{category.name}</Link></TableCell>
                                <TableCell>{category.handle}</TableCell>
                                <TableCell>{formatDate(category.created_at)}</TableCell>
                                <TableCell>
                                    <CategoryItemOptions id={category.id}/>
                                </TableCell>
                            </TableRow>
                    ))}
                </TableBody>
                <TableFooter>

                </TableFooter>
            </Table>
            }
        </Layout>
    );
};

export default Categories;
