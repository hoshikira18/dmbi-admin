'use client';

import { useBlogCategories } from '@/api/blog/hook';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const BlogCategoryEditCard = ({ category_id, handleUpdatePost }) => {
    const { data: blogCategories, isLoading: isCategoriesLoading } =
        useBlogCategories();

    const form = useForm({
        defaultValues: {
            category_id: category_id,
        },
    });
    const onSubmit = (data) => {
        handleUpdatePost(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="category_id"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Danh mục mới</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Chọn danh mục bài viết" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {isCategoriesLoading ? (
                                        <SelectItem>Loading...</SelectItem>
                                    ) : (
                                        blogCategories.map((category) => (
                                            <SelectItem
                                                key={category.id}
                                                value={category.id}
                                            >
                                                {category.title}
                                            </SelectItem>
                                        ))
                                    )}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
                <Button type="submit">Lưu</Button>
            </form>
        </Form>
    );
};

export default BlogCategoryEditCard;
