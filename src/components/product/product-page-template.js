/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { Layout } from '../layout';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Ellipsis, PlusCircle } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/table';
import { useAdminProducts } from 'medusa-react';
import CategoriesCollapse from './categories-collapse';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import ProductItemOptions from './product-item-option';
import { Badge } from '../ui/badge';
import Spinner from '../common/spinner';

const ProductPageTemplate = () => {
    const { products, isLoading } = useAdminProducts();
    console.log(products);

    return (
        <Layout>
            {isLoading && (
                <div className="flex h-[80vh] items-center justify-center">
                    <Spinner />
                </div>
            )}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Danh sách sản phẩm</CardTitle>
                        <Link href="/products/new">
                            <button className="btn btn-outline btn-primary">
                                <PlusCircle size={24} />
                                Tạo sản phẩm mới
                            </button>
                        </Link>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]"></TableHead>
                                <TableHead className="w-[400px]">
                                    Tên hiển thị
                                </TableHead>
                                <TableHead>Danh mục</TableHead>
                                <TableHead>Bộ sưu tập</TableHead>
                                <TableHead>Trạng thái</TableHead>
                                <TableHead>Giá</TableHead>
                                <TableHead className="w-[50px] text-right"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products?.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>
                                        <img
                                            src={product.thumbnail}
                                            alt={product.title}
                                            className="h-[100px] w-[100px] border border-gray-200 object-cover"
                                        />
                                    </TableCell>
                                    <TableCell>{product.title}</TableCell>
                                    <TableCell>
                                        <CategoriesCollapse
                                            categories={product.categories}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        {product.collection?.title}
                                    </TableCell>
                                    <TableCell>
                                        <Badge>{product.status}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        {product.metadata?.price || 0}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <ProductItemOptions
                                            id={product.id}
                                            status={product.status}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </Layout>
    );
};

export default ProductPageTemplate;
