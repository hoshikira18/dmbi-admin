'use client';
import { Layout } from '@/components/layout';
import DialogComponent from '@/components/common/dialog';
import NewCollectionCard from '@/components/collection/new-collection';
import { useAdminCollections } from 'medusa-react';

const CollectionsPage = () => {
    const { collections, isLoading } = useAdminCollections();
    console.log(collections);
    return (
        <Layout>
            <DialogComponent
                title="Tạo mới danh mục"
                triggerButton={
                    <button className="btn bg-green-500 text-primary-foreground hover:bg-green-400">
                        Bộ sưu tập mới
                    </button>
                }
                size="md"
            >
                <NewCollectionCard />
            </DialogComponent>
        </Layout>
    );
};

export default CollectionsPage;
