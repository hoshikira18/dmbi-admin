'use client';
import { set, useForm } from 'react-hook-form';
import { Layout } from '../layout';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Form, FormField, FormItem } from '../ui/form';
import { Input } from '../ui/input';
import RequireLabel from '../common/require-label';
import ImageUpload from '../common/image-upload';
import { useState } from 'react';
import { useCreatePost } from '@/api/blog/hook';
import { useToast } from '../ui/use-toast';
import { uploadFile } from '@/lib/utils';
import Spinner from '../common/spinner';

const NewPostTemplate = () => {
    const { toast } = useToast();
    const form = useForm({
        defaultValues: {
            title: '',
            description: '',
            content: '',
        },
    });

    const [files, setFiles] = useState([]);
    const [isCreating, setIsCreating] = useState(false);
    const { mutate: createPost } = useCreatePost();
    const handleCreatePost = ({ title, description, content, image }) => {
        createPost(
            {
                title,
                description,
                content,
                image,
            },
            {
                onSuccess: () => {
                    setIsCreating(false);
                    form.reset();
                    setFiles([]);
                    toast({
                        title: 'Tạo bài viết thành công',
                    });
                },
            }
        );
    };
    return (
        <Layout>
            <Card>
                <CardHeader>
                    <CardTitle>Tạo mới bài viết</CardTitle>
                </CardHeader>
                <CardContent>
                    <div>
                        <Form {...form}>
                            <form className="space-y-4">
                                <ImageUpload
                                    files={files}
                                    setFiles={setFiles}
                                />
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <RequireLabel
                                                    label="Tiêu đề"
                                                    required
                                                />
                                                <Input
                                                    placeholder="Nhập tiêu đề"
                                                    {...form.register('title', {
                                                        required: true,
                                                    })}
                                                />
                                            </FormItem>
                                        );
                                    }}
                                />
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <RequireLabel
                                                    label="Mô tả"
                                                    required
                                                />
                                                <Input
                                                    placeholder="Mô tả ngắn"
                                                    {...form.register(
                                                        'description',
                                                        {
                                                            required: true,
                                                        }
                                                    )}
                                                />
                                            </FormItem>
                                        );
                                    }}
                                />
                                <FormField
                                    control={form.control}
                                    name="content"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <RequireLabel
                                                    label="Nội dung"
                                                    required
                                                />
                                                <Input
                                                    placeholder="Nhập nội dung"
                                                    {...field}
                                                    className="h-20 w-full"
                                                />
                                            </FormItem>
                                        );
                                    }}
                                />

                                <button
                                    onClick={form.handleSubmit(async (data) => {
                                        setIsCreating(true);
                                        await uploadFile(files).then((url) => {
                                            handleCreatePost({
                                                ...data,
                                                image: url,
                                            });
                                        });
                                    })}
                                    className="btn btn-primary w-full"
                                >
                                    {isCreating && <Spinner />}
                                    Tạo mới
                                </button>
                            </form>
                        </Form>
                    </div>
                </CardContent>
            </Card>
        </Layout>
    );
};

export default NewPostTemplate;
