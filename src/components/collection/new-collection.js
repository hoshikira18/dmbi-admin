import { useAdminCreateCollection } from 'medusa-react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useToast } from '../ui/use-toast';
import { Form, FormField, FormItem } from '../ui/form';
import { Input } from '../ui/input';
import ImageUpload from '../common/image-upload';
import { uploadFile } from '@/lib/utils';

const NewCollectionCard = () => {
    const { toast } = useToast();
    const createCollection = useAdminCreateCollection();

    const form = useForm({
        defaultValues: {
            title: '',
            handle: '',
            image: '',
        },
    });

    const [files, setFiles] = useState([]);

    const handleCreateCollection = (title, handle, image) => {
        createCollection.mutate(
            {
                title,
                handle,
                metadata: {
                    image: image,
                },
            },
            {
                onSuccess: ({ collection }) => {
                    console.log(collection);
                    toast({
                        title: 'Tạo mới bộ sưu tập thành công',
                        description: `Bộ sưu tập ${collection.title} đã được tạo`,
                    });
                    form.reset();
                    setFiles([]);
                },
                onError: (error) => {
                    console.log('error', error);
                    toast({
                        title: 'Đã có lỗi xảy ra',
                        description: 'Vui lòng thử lại',
                    });
                },
            }
        );
    };

    return (
        <div>
            <Form {...form}>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="category-name"
                            render={({ field }) => (
                                <FormItem>
                                    <label htmlFor="title">
                                        Tên bộ sưu tập
                                    </label>
                                    <Input
                                        id="collection-title"
                                        placeholder="Bộ sưu tập mới"
                                        {...form.register('title', {
                                            required: true,
                                        })}
                                    />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="Đường dẫn"
                            render={({ field }) => (
                                <FormItem>
                                    <label htmlFor="handle">Đường dẫn</label>
                                    <Input
                                        id="handle"
                                        placeholder="bo-suu-tap-moi"
                                        {...form.register('handle', {
                                            required: true,
                                        })}
                                    />
                                </FormItem>
                            )}
                        />
                    </div>
                    <ImageUpload files={files} setFiles={setFiles} />
                    <button
                        onClick={form.handleSubmit(async (data) => {
                            await uploadFile(files[0]).then((url) => {
                                handleCreateCollection(
                                    data['title'],
                                    data['handle'],
                                    url
                                );
                            });
                        })}
                        className="btn btn-primary w-full"
                    >
                        Tạo bộ sưu tập
                    </button>
                </form>
            </Form>
        </div>
    );
};

export default NewCollectionCard;
