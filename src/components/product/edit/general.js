'use client';
import DialogComponent from '@/components/common/dialog';
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
import { useToast } from '@/components/ui/use-toast';
import { PencilLineIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

const EditGeneral = ({ handleUpdate, product }) => {
    const { toast } = useToast();
    const form = useForm({
        defaultValues: {
            origin_country: product?.origin_country || '',
            metadata: {
                model: product?.metadata?.model || '',
                uses: product?.metadata?.uses || '',
                guarantee: product?.metadata?.guarantee || '',
                technology: product?.metadata?.technology || '',
                inventory: product?.metadata?.inventory || 0,
                price: product?.metadata?.price || 0,
            },
        },
    });
    return (
        <DialogComponent
            triggerButton={
                <button className="mr-2">
                    <PencilLineIcon size={16} />
                </button>
            }
            title="Chỉnh sửa thông tin chung"
            size="lg"
        >
            <div className="space-y-2">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(async (data) => {
                            toast({
                                title: 'Đang cập nhật...',
                            });
                            handleUpdate(data);
                        })}
                        className="space-y-8"
                    >
                        <div className="grid grid-cols-2 gap-4">
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
                        </div>
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
                                name="origin_country"
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
                        <FormField
                            control={form.control}
                            name="metadata.price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Giá</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="688.000"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full" size="lg">
                            Lưu
                        </Button>
                    </form>
                </Form>
            </div>
        </DialogComponent>
    );
};

export default EditGeneral;
