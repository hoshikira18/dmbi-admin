/* eslint-disable @next/next/no-img-element */
'use client';
import { useAdminStore, useAdminUpdateStore } from 'medusa-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { DialogComponent, Spinner } from '../common';
import { Label } from '../ui/label';
import { PencilLineIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Form } from '../ui/form';
import { useForm } from 'react-hook-form';
import ImageUpload from '../common/image-upload';
import EditStore from './edit-store';
import EditImage from './edit-image';

const FroalaEditorView = dynamic(
    () => import('react-froala-wysiwyg/FroalaEditorView'),
    { ssr: false }
);

const { Layout } = require('../layout');

const StoreTemplate = () => {
    const form = useForm();
    const { store, isLoading } = useAdminStore();
    const updateStore = useAdminUpdateStore();
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
                        <div className="grid grid-cols-2 gap-10">
                            <div className="col-span-2 flex items-center lg:col-span-1">
                                <EditImage handleUpdate={handleUpdate} />
                                <img
                                    src={store?.metadata?.image}
                                    alt="about-image"
                                />
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <Label>Giới thiệu: </Label>
                                <FroalaEditorView
                                    model={store?.metadata?.about}
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}
        </Layout>
    );
};

export default StoreTemplate;
