'use client';

import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import CollectionSelector from './collection-selector';
import CategoriesSelector from './categories-selector';
import { useState } from 'react';
import ImageUpload from '@/components/common/image-upload';
import TextEditor from '@/components/common/text-editor';

const NewProductTemplate = () => {
    // Image state
    const [files, setFiles] = useState([]);
    const [categories, setCategories] = useState([]);
    const form = useForm({
        defaultValues: {
            title: '',
            options: ['normal'],
            variants: {
                title: 'normal',
                prices: {
                    amount: 0,
                },
            },
            metadata: {
                model: '',
                uses: '',
            },
        },
    });
    return (
        <Layout>
            <Card>
                <CardHeader>
                    <CardTitle>Tạo sản phẩm mới</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(() => {
                                console.log(form.getValues());
                            })}
                            className="space-y-8"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Tên sản phẩm</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Sản phẩm chăm sóc gia mặt"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="metadata.model"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Model</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Sản phẩm chăm sóc gia mặt"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="metadata.uses"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Ứng dụng</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Xử lý khí thải máy hút khói hàn, máy cắt kim loại, máy cắt CNC"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="metadata.guarantee"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Bảo hành</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="12 tháng"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="metadata.origin"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Xuất xứ</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Việt Nam"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="metadata.technology"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Công nghệ</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="HEPA"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="metadata.inventory"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Tồn kho</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    placeholder="100"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <CollectionSelector form={form} />
                                <CategoriesSelector
                                    categories={categories}
                                    setCategories={setCategories}
                                />
                            </div>
                            <ImageUpload
                                multiple
                                files={files}
                                setFiles={setFiles}
                            />
                            <TextEditor />

                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </Layout>
    );
};

const createPayload = () => {
    return;
};

export default NewProductTemplate;
