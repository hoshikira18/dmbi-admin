'use client';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const BlogTitleEditCard = ({ post, handleUpdatePost }) => {
    const form = useForm({
        defaultValues: {
            title: post.title,
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
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tiêu đề mới</FormLabel>
                            <FormControl>
                                <Input placeholder="Tiêu đề mới" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit">Lưu</Button>
            </form>
        </Form>
    );
};

export default BlogTitleEditCard;
