/* eslint-disable @next/next/no-img-element */
'use client';
import { useBanners, useDeleteBanner } from '@/api/banners/hook';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Layout } from '../layout';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/table';
import { PlusCircleIcon, Trash } from 'lucide-react';
import { useToast } from '../ui/use-toast';
import { DialogComponent } from '../common';
import NewBannerCard from './new-banner-card';

const BannersTemplate = () => {
    const { toast } = useToast();
    const { data: banners, isLoading } = useBanners();
    const { mutate: deleteBanner } = useDeleteBanner();
    console.log(banners);

    const handleDeleteBanner = (id) => {
        deleteBanner(id, {
            onSuccess: () => {
                toast({
                    title: 'Đã xóa thành công banner',
                });
            },
            onError: () => {
                toast({
                    title: 'Đã có lỗi xảy ra',
                });
            },
        });
    };
    return (
        <Layout>
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Banners</CardTitle>{' '}
                        <DialogComponent
                            title={'Tạo mới banner'}
                            triggerButton={
                                <button className="btn btn-outline btn-primary">
                                    <PlusCircleIcon size={20} />
                                    Tạo mới banner
                                </button>
                            }
                            size="md"
                        >
                            <NewBannerCard />
                        </DialogComponent>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[300px]">ID</TableHead>
                                <TableHead>Hình ảnh</TableHead>
                                <TableHead className="text-right"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {banners &&
                                banners.map((banner, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell className="truncate font-medium">
                                                {banner.id}
                                            </TableCell>
                                            <TableCell>
                                                <img
                                                    src={banner.image_pc}
                                                    alt={banner.id}
                                                    className="h-[400px] rounded border-2"
                                                />
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <button
                                                    onClick={() => {
                                                        handleDeleteBanner(
                                                            banner.id
                                                        );
                                                    }}
                                                    className="btn btn-outline btn-error"
                                                >
                                                    <Trash size={20} />
                                                </button>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </Layout>
    );
};

export default BannersTemplate;
