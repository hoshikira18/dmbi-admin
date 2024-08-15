'use client';
import DialogComponent from '@/components/common/dialog';
import ImageUpload from '@/components/common/image-upload';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { uploadFile } from '@/lib/utils';
import { PencilLineIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const BlogImageEditCard = ({ handleUpdatePost }) => {
    const form = useForm();
    const { toast } = useToast();
    const [thumbnail, setThumbnail] = useState([]);
    return (
        <DialogComponent
            triggerButton={
                <button className="btn btn-outline btn-primary absolute right-4 top-4 mr-2">
                    <PencilLineIcon size={16} />
                </button>
            }
            title="Đổi ảnh bài viết"
            size="md"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(async () => {
                        toast({
                            title: 'Đang cập nhật ảnh...',
                        });
                        const thumbnail_url = await uploadFile(thumbnail);
                        handleUpdatePost({ image: thumbnail_url });
                    })}
                    className="grid gap-4"
                >
                    <ImageUpload
                        files={thumbnail}
                        setFiles={setThumbnail}
                        label="Thumbnail"
                        description="Ảnh thumbnail của bài viết"
                    />
                    <Button type="submit">Lưu</Button>
                </form>
            </Form>
        </DialogComponent>
    );
};

export default BlogImageEditCard;
