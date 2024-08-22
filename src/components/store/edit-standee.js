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

const EditStandee = ({ handleUpdate }) => {
    const form = useForm();
    const { toast } = useToast();
    const [image, setImage] = useState([]);
    return (
        <DialogComponent
            triggerButton={
                <button className="mr-2">
                    <PencilLineIcon size={16} />
                </button>
            }
            title="Đổi ảnh Standee"
            size="md"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(async () => {
                        toast({
                            title: 'Đang cập nhật ảnh...',
                        });
                        const image_url = await uploadFile(image);
                        handleUpdate({
                            metadata: {
                                standee: image_url,
                            },
                        });
                    })}
                    className="grid gap-4"
                >
                    <ImageUpload
                        files={image}
                        setFiles={setImage}
                        label="Ảnh Standee"
                        description="Ảnh Standee"
                    />
                    <Button type="submit">Lưu</Button>
                </form>
            </Form>
        </DialogComponent>
    );
};

export default EditStandee;
