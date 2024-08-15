'use client';
import { TextEditor } from '@/components/common';
import DialogComponent from '@/components/common/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { PencilLineIcon, ViewIcon } from 'lucide-react';
import { useState } from 'react';

const BlogContentEditCard = ({ handleUpdatePost, oldContent }) => {
    const { toast } = useToast();
    const [content, setContent] = useState(oldContent);
    return (
        <div>
            <DialogComponent
                title="Chỉnh sửa nội dung bài viết"
                size="xl"
                triggerButton={
                    <button className="btn btn-outline btn-primary flex items-center justify-center space-x-2">
                        <PencilLineIcon size={16} />
                        <span>Chỉnh sửa</span>
                    </button>
                }
            >
                <div className="space-y-2">
                    <TextEditor
                        description={content}
                        setDescription={setContent}
                    />
                    <Button
                        onClick={() => {
                            toast({
                                title: 'Đang cập nhật nội dung...',
                            });
                            handleUpdatePost({ content });
                        }}
                        size="lg"
                        className="w-full"
                    >
                        Lưu
                    </Button>
                </div>
            </DialogComponent>
        </div>
    );
};

export default BlogContentEditCard;
