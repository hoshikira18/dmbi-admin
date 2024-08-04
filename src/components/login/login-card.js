import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '../ui/input';
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from '../ui/form';
import { set, useForm } from 'react-hook-form';
import { useAdminLogin } from 'medusa-react';
import { useAdminGetSession } from 'medusa-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';

const LoginCard = () => {
    const router = useRouter();
    const { toast } = useToast();
    const [error, setError] = useState(false);
    const form = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
    });
    const adminLogin = useAdminLogin();

    const handleLogin = (email, password) => {
        adminLogin.mutate(
            {
                email,
                password,
            },
            {
                onSuccess: () => {
                    setError(false);
                    console.log('login success');
                    router.push('/');
                    toast({
                        title: 'Đăng nhập thành công',
                        description: 'Chào mừng bạn đến với DMB Industrial',
                    });
                },
                onError: (error) => {
                    console.log('login error', error);
                    setError(true);
                },
            }
        );
    };
    return (
        <Card className="m-auto w-[400px]">
            <CardHeader>
                <CardTitle>DMB Industrial</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit((data) => {
                            handleLogin(data.username, data.password);
                        })}
                        className="space-y-4"
                    >
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tên đăng nhập</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="shop@gmail.com"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mật khẩu</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="********"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        {error && (
                            <FormMessage type="error">
                                Tên đăng nhập hoặc mật khẩu không đúng
                            </FormMessage>
                        )}
                        <button name="data" className="btn btn-primary w-full">
                            Đăng nhập
                        </button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default LoginCard;
