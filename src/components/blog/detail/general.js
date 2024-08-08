import RequireLabel from '@/components/common/require-label';
import { formatDate } from '@/lib/utils';

const { useBlogCategory } = require('@/api/blog/hook');

const GeneralInfor = ({ date, category_id }) => {
    const { data: category, isLoading } = useBlogCategory(category_id);
    console.log(category);

    if (isLoading) return <div></div>;

    return (
        <div>
            <div>
                <span className="font-semibold">Ngày tạo: </span>
                <span>{formatDate(date)}</span>
            </div>
            {category && (
                <div>
                    <span className="font-semibold">Danh mục: </span>
                    <span>{category.title}</span>
                </div>
            )}
        </div>
    );
};

export default GeneralInfor;
