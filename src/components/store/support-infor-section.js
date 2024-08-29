'use client';
import React from 'react';
import { CardTitle } from '../ui/card';
import { useBlogPosts } from '@/api/blog/hook';
import { useForm } from 'react-hook-form';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/table';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Check, ChevronsUpDown } from 'lucide-react';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '../ui/command';
import { cn } from '@/lib/utils';

const SupportInforSection = ({ store, handleUpdate }) => {
    const { data: posts, isLoading } = useBlogPosts();

    const supportInformation = store?.metadata?.support_info
        ? store?.metadata?.support_info
        : [
              {
                  label: 'Giới thiệu',
                  id: '/',
              },
              {
                  label: 'Chính sách bảo hành',
                  id: '/',
              },
              {
                  label: 'Chính sách đổi trả',
                  id: '/',
              },
              {
                  label: 'Bảo mật thông tin',
                  id: '/',
              },
              {
                  label: 'Chính sách giao hàng',
                  id: '/',
              },
              {
                  label: 'Phương thức thanh toán',
                  id: '/',
              },
          ];

    const form = useForm({
        defaultValues: {
            supportInformation: [...supportInformation],
        },
    });

    return (
        <div className="space-y-5 py-10">
            <div className="flex items-center space-x-1">
                <CardTitle>Thông tin hỗ trợ</CardTitle>
            </div>
            <Form {...form}>
                <form className="w-2/3 space-y-6">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[300px]">
                                    Tiêu đề
                                </TableHead>
                                <TableHead className="">Bài viết</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {form
                                .getValues('supportInformation')
                                ?.map((item, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell className="min-w-[300px] font-medium">
                                                {item.label}
                                            </TableCell>
                                            <TableCell>
                                                <FormField
                                                    control={form.control}
                                                    name={`supportInformation.${index}.value`}
                                                    render={({ field }) => (
                                                        <FormItem className="flex flex-col">
                                                            <Popover>
                                                                <PopoverTrigger
                                                                    asChild
                                                                >
                                                                    <FormControl>
                                                                        <Button
                                                                            variant="outline"
                                                                            role="combobox"
                                                                            className={cn(
                                                                                'justify-between',
                                                                                !field.value &&
                                                                                    'text-muted-foreground'
                                                                            )}
                                                                        >
                                                                            {field.value
                                                                                ? posts?.find(
                                                                                      (
                                                                                          item
                                                                                      ) =>
                                                                                          item.title ===
                                                                                          field.value
                                                                                  )
                                                                                      ?.title
                                                                                : 'Select post'}
                                                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                                        </Button>
                                                                    </FormControl>
                                                                </PopoverTrigger>
                                                                <PopoverContent className="p-0">
                                                                    <Command>
                                                                        <CommandInput placeholder="Search post..." />
                                                                        <CommandList>
                                                                            <CommandEmpty>
                                                                                Không
                                                                                tìm
                                                                                thấy
                                                                                bài
                                                                                viết.
                                                                            </CommandEmpty>
                                                                            <CommandGroup>
                                                                                {posts?.map(
                                                                                    (
                                                                                        post
                                                                                    ) => (
                                                                                        <CommandItem
                                                                                            value={
                                                                                                post.title +
                                                                                                '|' +
                                                                                                post.id
                                                                                            }
                                                                                            key={
                                                                                                post.title
                                                                                            }
                                                                                            onSelect={() => {
                                                                                                form.setValue(
                                                                                                    `supportInformation.${index}.value`,
                                                                                                    post.title
                                                                                                );
                                                                                                form.setValue(
                                                                                                    `supportInformation.${index}.id`,
                                                                                                    post.id
                                                                                                );
                                                                                            }}
                                                                                        >
                                                                                            <Check
                                                                                                className={cn(
                                                                                                    'mr-2 h-4 w-4',
                                                                                                    post.title ===
                                                                                                        field.value
                                                                                                        ? 'opacity-100'
                                                                                                        : 'opacity-0'
                                                                                                )}
                                                                                            />
                                                                                            {
                                                                                                post.title
                                                                                            }
                                                                                        </CommandItem>
                                                                                    )
                                                                                )}
                                                                            </CommandGroup>
                                                                        </CommandList>
                                                                    </Command>
                                                                </PopoverContent>
                                                            </Popover>
                                                        </FormItem>
                                                    )}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                        <Button
                            type="button"
                            onClick={() => {
                                handleUpdate({
                                    metadata: {
                                        support_info:
                                            form.getValues(
                                                'supportInformation'
                                            ),
                                    },
                                });
                            }}
                        >
                            Click
                        </Button>
                    </Table>
                </form>
            </Form>
        </div>
    );
};

export default SupportInforSection;
