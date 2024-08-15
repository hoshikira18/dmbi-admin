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
import { uploadImageCloudinary } from '@/lib/cloudinary';
import dynamic from 'next/dynamic';

const NewPostTemplate = () => {
    const { toast } = useToast();
    const form = useForm({
        defaultValues: {
            title: '',
            description: '',
            content: '',
        },
    });

    const FroalaEditorView = dynamic(
        () => import('react-froala-wysiwyg/FroalaEditorView'),
        { ssr: false }
    );

    const FroalaEditor = dynamic(
        async () => {
            const values = await Promise.all([
                import('react-froala-wysiwyg'), // must be first import since we are doing values[0] in return
                import('froala-editor/js/plugins.pkgd.min.js'),
                import('froala-editor/css/froala_style.min.css'),
                import('froala-editor/css/froala_editor.pkgd.min.css'),
            ]);
            return values[0];
        },
        {
            loading: () => <p>LOADING!!!</p>,
            ssr: false,
        }
    );

    const TextEditor = ({ description = '', setDescription }) => {
        const config = {
            events: {
                'image.beforeUpload': async function (images) {
                    await uploadImageCloudinary(images)
                        .then((data) => {
                            // Insert the image into the editor
                            this.image.insert(
                                data.secure_url,
                                false,
                                null,
                                this.image.get(),
                                null
                            );

                            // Optionally add data attributes to the image
                            const $img = this.image.get();
                            $img.attr('data-id', data.public_id);
                        })
                        .catch((error) => {
                            console.error('Image upload error:', error);
                        });

                    // Prevent the default image upload
                    return false;
                },
            },
        };

        return (
            <div className="space-y-2">
                <FroalaEditor
                    model={description}
                    tag="textarea"
                    config={config}
                    onModelChange={(e) => {
                        setDescription(e);
                        console.log(e);
                    }}
                />
            </div>
        );
    };

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
                                                <TextEditor/>
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
