import CollectionDetailTemplate from '@/components/collection/collection-detail-template';

export const metadata = {
    title: 'DMBI | Danh mục',
    description: 'Collection detail page',
};

const CollectionDetailPage = ({ params }) => {
    return <CollectionDetailTemplate params={params} />;
};

export default CollectionDetailPage;
