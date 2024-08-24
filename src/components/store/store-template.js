/* eslint-disable @next/next/no-img-element */
'use client';
import { useAdminStore, useAdminUpdateStore } from 'medusa-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { DialogComponent, Spinner } from '../common';
import { Label } from '../ui/label';
import { PencilLineIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import EditStore from './edit-store';
import EditImage from './edit-image';
import EditStandee from './edit-standee';
import { useToast } from '../ui/use-toast';
import EditAddress from './edit-address';

const FroalaEditorView = dynamic(
    () => import('react-froala-wysiwyg/FroalaEditorView'),
    { ssr: false }
);

const { Layout } = require('../layout');

const StoreTemplate = () => {
    const { toast } = useToast();

    const { store, isLoading } = useAdminStore();

    const updateStore = useAdminUpdateStore();

    console.log(store);

    const handleUpdate = (data) => {
        updateStore.mutate(data, {
            onSuccess: () => {
                toast({
                    title: 'Đã cập nhập thông tin cửa hàng.',
                });
            },
            onError: () => {
                toast({
                    title: 'Đã có lỗi xảy ra.',
                });
            },
        });
    };
    return (
        <Layout>
            {isLoading ? (
                <div className="flex h-[80vh] items-center justify-center">
                    <Spinner />
                </div>
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <div className="flex items-center justify-between">
                                <CardTitle>{store?.name}</CardTitle>
                                <DialogComponent
                                    title={'Chỉnh sửa bài viết'}
                                    triggerButton={
                                        <button className="rounded-full p-2 hover:bg-gray-100">
                                            <PencilLineIcon size={24} />
                                        </button>
                                    }
                                    size="lg"
                                >
                                    <EditStore
                                        handleUpdate={handleUpdate}
                                        name={store?.name}
                                        about={store?.metadata?.about}
                                    />
                                </DialogComponent>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <div className="grid grid-cols-2 gap-10 border-b-2 pb-5">
                                <div className="col-span-2 flex items-center px-20 lg:col-span-1">
                                    <EditImage handleUpdate={handleUpdate} />
                                    <img
                                        src={store?.metadata?.image}
                                        alt="about-image"
                                    />
                                </div>
                                <div className="col-span-2 px-5 lg:col-span-1">
                                    <Label>Giới thiệu: </Label>
                                    <FroalaEditorView
                                        model={store?.metadata?.about}
                                    />
                                </div>
                            </div>
                            <div className="space-y-5 border-b-2 py-5">
                                <div className="flex items-center space-x-1">
                                    <EditStandee handleUpdate={handleUpdate} />
                                    <CardTitle>Standee</CardTitle>
                                </div>
                                <img
                                    src={store?.metadata?.standee}
                                    alt="standee"
                                    className="mx-auto w-1/4"
                                />
                            </div>
                            <div className="space-y-5 py-10">
                                <div className="flex items-center space-x-1">
                                    <CardTitle>Thông tin chung</CardTitle>
                                </div>
                                <div>
                                    <div>
                                        <EditAddress />
                                        <Label className="text-lg">
                                            Địa chỉ
                                        </Label>
                                    </div>
                                    {store?.metadata?.address?.map((a, i) => {
                                        return (
                                            <div key={index}>
                                                <Label>Địa chỉ {i}: </Label>
                                                <div>
                                                    <p>{a.title}</p>
                                                    <p>{a.value}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}
        </Layout>
    );
};

export default StoreTemplate;
