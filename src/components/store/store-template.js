/* eslint-disable @next/next/no-img-element */
'use client';
import { useAdminStore, useAdminUpdateStore } from 'medusa-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { DialogComponent, Spinner } from '../common';
import { PencilLineIcon } from 'lucide-react';
import EditStore from './edit-store';
import { useToast } from '../ui/use-toast';
import AboutSection from './about-section';
import StandeeSection from './standee-section';
import GeneralInforSection from './general-infor-section';
import SupportInforSection from './support-infor-section';

const { Layout } = require('../layout');

const StoreTemplate = () => {
    const { toast } = useToast();

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
                        <div>
                            <AboutSection
                                store={store}
                                handleUpdate={handleUpdate}
                            />
                            <StandeeSection
                                store={store}
                                handleUpdate={handleUpdate}
                            />
                            <GeneralInforSection
                                store={store}
                                handleUpdate={handleUpdate}
                            />
                            <SupportInforSection
                                store={store}
                                handleUpdate={handleUpdate}
                            />
                        </div>
                    </CardContent>
                </Card>
            )}
        </Layout>
    );
};

export default StoreTemplate;
