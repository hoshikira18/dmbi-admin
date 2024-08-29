'use client';
import DialogComponent from '@/components/common/dialog';
import ImageUpload from '@/components/common/image-upload';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { uploadFile } from '@/lib/utils';
import { PencilLineIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';

const EditHotline = ({ handleUpdate }) => {
    const form = useForm();
    const { toast } = useToast();
    return (
        <DialogComponent
            triggerButton={
                <button className="mr-2">
                    <PencilLineIcon size={16} />
                </button>
            }
            title="Chỉnh sửa hotline"
            size="md"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(async () => {
                        toast({
                            title: 'Đang cập nhật...',
                        });
                        handleUpdate({
                            metadata: {
                                hotline: form.getValues('hotline'),
                            },
                        });
                    })}
                    className="grid gap-4"
                >
                    <FormField
                        control={form.control}
                        name="hotline"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Hotline</FormLabel>
                                <FormControl>
                                    <Input placeholder="1900 5678" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Lưu</Button>
                </form>
            </Form>
        </DialogComponent>
    );
};

export default EditHotline;
