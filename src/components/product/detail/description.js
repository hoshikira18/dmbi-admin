import dynamic from 'next/dynamic';
import { ViewIcon } from 'lucide-react';
import DialogComponent from '@/components/common/dialog';
import { EditDescription } from '../edit';

const FroalaEditorView = dynamic(
    () => import('react-froala-wysiwyg/FroalaEditorView'),
    { ssr: false }
);

const Description = ({ description, handleUpdate }) => {
    return (
        <div className="flex items-center space-x-4">
            <DialogComponent
                title="Mô tả sản phẩm"
                size="xl"
                triggerButton={
                    <button className="btn btn-outline btn-primary flex items-center justify-center space-x-2">
                        <ViewIcon size={16} />
                        <span>Preview</span>
                    </button>
                }
            >
                <FroalaEditorView model={description} />
            </DialogComponent>
            <EditDescription
                handleUpdate={handleUpdate}
                description={description}
            />
        </div>
    );
};
export default Description;
