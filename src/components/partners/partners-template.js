/* eslint-disable @next/next/no-img-element */
'use client';

import { useDeletePartner, usePartners } from '@/api/hook';
import { Layout } from '../layout';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/table';
import { PlusCircle, Trash } from 'lucide-react';
import { useToast } from '../ui/use-toast';
import DialogComponent from '../common/dialog';
import NewPartner from './new-partner';
import { useState } from 'react';
import { set } from 'react-hook-form';
import Spinner from '../common/spinner';

const PartnersTemplate = () => {
    const { data, isLoading } = usePartners();
    const { toast } = useToast();
    const { mutate: deletePartner } = useDeletePartner();
    const [isDeleteLoading, setIsDeleteLoading] = useState(false);

    const handleDeletePartner = (id) => {
        setIsDeleteLoading(true);
        deletePartner(id, {
            onSuccess: () => {
                toast({
                    title: 'Xóa thành công',
                });
                setIsDeleteLoading(false);
            },
            onError: () => {
                toast({
                    title: 'Xóa thất bại',
                });
            },
        });
    };

    return (
        <Layout>
            <div className="relative">
                <div className="absolute right-4 top-4 flex items-center justify-between">
                    <DialogComponent
                        title="Thêm đối tác"
                        triggerButton={
                            <button className="btn btn-outline btn-primary">
                                <PlusCircle size={20} />
                                Thêm đối tác
                            </button>
                        }
                        size="md"
                    >
                        <NewPartner />
                    </DialogComponent>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Đối tác</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">
                                            STT
                                        </TableHead>
                                        <TableHead className="w-1/4">
                                            Tên
                                        </TableHead>
                                        <TableHead className="px-10">
                                            Ảnh
                                        </TableHead>
                                        <TableHead></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {data?.length > 0 &&
                                        data.map((partner, index) => (
                                            <TableRow key={partner.id}>
                                                <TableCell className="w-[100px]">
                                                    {index + 1}
                                                </TableCell>
                                                <TableCell className="w-1/4 font-medium">
                                                    {partner.name}
                                                </TableCell>
                                                <TableCell className="px-10">
                                                    <img
                                                        src={partner.image_url}
                                                        alt={partner.name}
                                                        className="h-[250px] w-full border-2 object-cover px-10"
                                                    />
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <button
                                                        onClick={async () => {
                                                            toast({
                                                                title: `Đang xóa đối tác ${partner.name}`,
                                                            });
                                                            handleDeletePartner(
                                                                partner.id
                                                            );
                                                        }}
                                                        className="btn btn-outline btn-error"
                                                    >
                                                        <Trash size={20} />
                                                    </button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        )}
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
};

export default PartnersTemplate;