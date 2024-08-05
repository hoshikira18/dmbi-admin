import CategoryDetailTemplate from '@/components/category/category-detail-template';

export const metadata = {
    title: 'DMBI | Danh mục',
    description: 'Category detail page',
};

const CategoryDetailPage = ({ params }) => {
    return <CategoryDetailTemplate params={params} />;
};

export default CategoryDetailPage;
