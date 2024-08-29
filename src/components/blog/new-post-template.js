'use client';
import { set, useForm } from 'react-hook-form';
import { Layout } from '../layout';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import ImageUpload from '../common/image-upload';
import { useState } from 'react';
import { useBlogCategories, useCreatePost } from '@/api/blog/hook';
import { useToast } from '../ui/use-toast';
import { uploadFile } from '@/lib/utils';
import Spinner from '../common/spinner';
import { TextEditor } from '../common';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';

const NewPostTemplate = () => {
    const { toast } = useToast();
    const form = useForm({
        defaultValues: {
            title: '',
            category_id: '',
            description: '',
        },
    });

    const [files, setFiles] = useState([]);
    const [content, setContent] = useState('');
    const { mutate: createPost } = useCreatePost();
    const [isCreating, setIsCreating] = useState(false);
    const { data: blogCategories, isLoading: isCategoriesLoading } =
        useBlogCategories();

    const handleCreatePost = (data) => {
        createPost(data, {
            onSuccess: () => {
                setIsCreating(false);
                form.reset();
                setFiles([]);
                toast({
                    title: 'Tạo bài viết thành công',
                });
            },
        });
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
                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => {
                                            return (
                                                <FormItem>
                                                    <FormLabel>
                                                        Tiêu đề
                                                    </FormLabel>
                                                    <Input
                                                        placeholder="Nhập tiêu đề"
                                                        {...form.register(
                                                            'title',
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
                                        name="category_id"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Danh mục</FormLabel>
                                                <Select
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    defaultValue={field.value}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Chọn danh mục bài viết" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {isCategoriesLoading ? (
                                                            <SelectItem>
                                                                Loading...
                                                            </SelectItem>
                                                        ) : (
                                                            blogCategories?.map(
                                                                (category) => (
                                                                    <SelectItem
                                                                        key={
                                                                            category.id
                                                                        }
                                                                        value={
                                                                            category.id
                                                                        }
                                                                    >
                                                                        {
                                                                            category.title
                                                                        }
                                                                    </SelectItem>
                                                                )
                                                            )
                                                        )}
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>
                                                    Mô tả ngắn
                                                </FormLabel>
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
                                                <TextEditor
                                                    description={content}
                                                    setDescription={setContent}
                                                    label="Nội dung"
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
                                                content: content,
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
