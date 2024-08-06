import { useCreatePartner } from '@/api/hook';
import { useToast } from '../ui/use-toast';
import { Input } from '../ui/input';
import { Form, FormField, FormItem, FormLabel } from '../ui/form';
import { useState } from 'react';
import { Label } from '../ui/label';
import ImageUpload from '../common/image-upload';
import { set, useForm } from 'react-hook-form';
import { uploadFile } from '@/lib/utils';

const NewPartner = () => {
    const { toast } = useToast();
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [partnerName, setPartnerName] = useState('');
    const { mutate: createPartner } = useCreatePartner();

    const form = useForm({
        defaultValues: {
            name: '',
            image: '',
        },
    });

    const handleCreatePartner = (partner) => {
        createPartner(partner, {
            onSuccess: () => {
                toast({
                    title: `Đã thêm đối tác ${partner.name}`,
                });
                setIsLoading(false);
            },
            onError: () => {
                console.log('Đã có lỗi xảy ra');
            },
        });
    };
    return (
        <Form {...form}>
            <form className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <label htmlFor="name">Tên đối tác</label>
                            <Input
                                id="name"
                                placeholder="Nhập tên đối tác"
                                onChange={(e) => {
                                    setHandle(formatHandle(e.target.value));
                                }}
                                {...form.register('name', {
                                    required: true,
                                })}
                            />
                        </FormItem>
                    )}
                />
                <ImageUpload files={files} setFiles={setFiles} />
                <button
                    onClick={form.handleSubmit(async (data) => {
                        setIsLoading(true);
                        await uploadFile(files)
                            .then((url) => {
                                handleCreatePartner({
                                    name: data['name'],
                                    image_url: url,
                                });
                            })
                            .catch((error) => {
                                console.error('Error uploading file:', error);
                            });
                    })}
                    className="btn btn-primary w-full"
                >
                    {isLoading && (
                        <span className="loading loading-spinner"></span>
                    )}
                    Thêm đối tác
                </button>
            </form>
        </Form>
    );
};

export default NewPartner;
