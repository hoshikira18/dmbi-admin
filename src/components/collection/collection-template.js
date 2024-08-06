'use client';
import { Layout } from '@/components/layout';
import DialogComponent from '@/components/common/dialog';
import NewCollectionCard from '@/components/collection/new-collection';
import { useAdminCollections } from 'medusa-react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { CirclePlus } from 'lucide-react';
import CollectionItemOptions from './collection-item-option';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

const CollectionsTemplate = () => {
    const { collections, isLoading } = useAdminCollections();
    console.log(collections);
    return (
        <Layout>
            <Card>
                <CardHeader>
                    <div className="flex justify-between">
                        <div>
                            <CardTitle>Bộ sưu tập</CardTitle>
                        </div>
                        <DialogComponent
                            title="Tạo mới danh mục"
                            triggerButton={
                                <button className="btn bg-green-500 text-primary-foreground hover:bg-green-400">
                                    <CirclePlus />
                                    Bộ sưu tập mới
                                </button>
                            }
                            size="md"
                        >
                            <NewCollectionCard />
                        </DialogComponent>
                    </div>
                </CardHeader>
                <CardContent>
                    {
                        <Table>
                            <TableCaption>Test Caption</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-1/10">
                                        STT
                                    </TableHead>
                                    <TableHead className="w-1/4">
                                        Mã ID bộ sưu tập
                                    </TableHead>
                                    <TableHead className="w-1/4">
                                        Tên bộ sưu tập
                                    </TableHead>
                                    <TableHead className="w-1/4">
                                        Ngày khởi tạo
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {collections?.map((collection, index) => (
                                    <TableRow key={collection.id}>
                                        <TableCell className="w-1/10">
                                            <Link
                                                href={`/collections/${collection.id}`}
                                                key={collection.id}
                                            >
                                                {index + 1}
                                            </Link>
                                        </TableCell>
                                        <TableCell className="max-w-[180px] truncate pr-[60px]">
                                            {collection.id}
                                        </TableCell>
                                        <TableCell className="max-w-[200px] truncate pr-[60px]">
                                            {collection.title}
                                        </TableCell>
                                        <TableCell className="w-1/4">
                                            {formatDate(collection.created_at)}
                                        </TableCell>
                                        <TableCell>
                                            <CollectionItemOptions
                                                id={collection.id}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    }
                </CardContent>
            </Card>
        </Layout>
    );
};

export default CollectionsTemplate;
