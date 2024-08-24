'use client';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { PlusCircleIcon } from 'lucide-react';
import { Input } from '../ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { useForm } from 'react-hook-form';

const MultipleInput = ({ setData }) => {
    const form = useForm({
        defaultValues: {
            data: [
                {
                    title: '',
                    value: '',
                },
            ],
        },
    });

    const onSubmit = (data) => {
        // setData(data);
    };

    useEffect(() => {
        setData(form.getValues('data'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form.getValues('data')]);

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mx-auto max-w-screen-lg space-y-3"
            >
                {form.getValues('data').length > 0 && (
                    <div className="space-y-3">
                        {form.getValues('data').map((item, index) => (
                            <div key={index} className="grid grid-cols-2 gap-5">
                                <FormField
                                    control={form.control}
                                    name={`data.${index}.title`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nhãn</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Nhãn A"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name={`data.${index}.value`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Giá trị</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Giá trị"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        ))}
                    </div>
                )}
                <Button
                    variant="outline"
                    onClick={() => {
                        form.getValues('data').push({
                            title: '',
                            value: '',
                        });
                    }}
                    className="w-full space-x-2"
                >
                    <PlusCircleIcon />
                    <span>Thêm</span>
                </Button>
            </form>
        </Form>
    );
};

export default MultipleInput;
