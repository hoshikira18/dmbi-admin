import dynamic from 'next/dynamic';
import { ViewIcon } from 'lucide-react';
import DialogComponent from '@/components/common/dialog';
import BlogContentEditCard from '../edit/edit-content';

const FroalaEditorView = dynamic(
    () => import('react-froala-wysiwyg/FroalaEditorView'),
    { ssr: false }
);

const BlogContent = ({ content, handleUpdatePost }) => {
    return (
        <div className="flex items-center space-x-4">
            <DialogComponent
                title="Nội dung bài viết"
                triggerButton={
                    <button className="btn btn-outline btn-primary flex items-center justify-center space-x-2">
                        <ViewIcon size={16} />
                        <span>Preview</span>
                    </button>
                }
                size="xl"
            >
                <FroalaEditorView model={content} />
            </DialogComponent>
            <BlogContentEditCard
                handleUpdatePost={handleUpdatePost}
                oldContent={content}
            />
        </div>
    );
};
export default BlogContent;
