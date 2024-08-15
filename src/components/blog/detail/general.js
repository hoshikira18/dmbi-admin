import { Label } from '@/components/ui/label';
import { formatDate } from '@/lib/utils';
import BlogCategoryEditCard from '../edit/edit-category';
import { DialogComponent } from '@/components/common';
import { PencilLineIcon } from 'lucide-react';

const { useBlogCategory } = require('@/api/blog/hook');

const GeneralInfor = ({ date, category_id, handleUpdatePost }) => {
    const { data: category, isLoading } = useBlogCategory(category_id);
    console.log(category);

    if (isLoading) return <div></div>;

    return (
        <div>
            <div>
                <Label>Ngày tạo: </Label>
                <span>{formatDate(date)}</span>
            </div>
            {category && (
                <div className="flex items-center space-x-2">
                    <div>
                        <Label>Danh mục: </Label>
                        <span>{category.title}</span>
                    </div>
                    <DialogComponent
                        title={'Chỉnh sửa danh mục'}
                        triggerButton={
                            <button className="">
                                <PencilLineIcon size={20} />
                            </button>
                        }
                        size="sm"
                    >
                        <BlogCategoryEditCard
                            category_id={category_id}
                            handleUpdatePost={handleUpdatePost}
                        />
                    </DialogComponent>
                </div>
            )}
        </div>
    );
};

export default GeneralInfor;
