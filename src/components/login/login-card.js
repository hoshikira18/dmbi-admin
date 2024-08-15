import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { useAdminGetSession, useAdminLogin } from 'medusa-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';
import { useAuthStore } from '@/store/auth-store';
import { getToken } from '@/lib/data';
import Spinner from '../common/spinner';

const LoginCard = () => {
    const router = useRouter();
    const { user, isLoading } = useAdminGetSession();
    if (user) {
        router.push('/products');
    }
    const { toast } = useToast();
    const [error, setError] = useState(false);
    const [isLoginLoading, setIsLoginLoading] = useState(false);

    const { setToken } = useAuthStore();

    const form = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
    });
    const adminLogin = useAdminLogin();

    const handleLogin = (email, password) => {
        setIsLoginLoading(true);
        adminLogin.mutate(
            {
                email,
                password,
            },
            {
                onSuccess: async () => {
                    setIsLoginLoading(false);
                    setError(false);
                    console.log('login success');
                    router.push('/products');
                    toast({
                        title: 'Đăng nhập thành công',
                        description: 'Chào mừng bạn đến với DMB Industrial',
                    });
                    const token = await getToken({ email, password });
                    console.log('token', token);
                    setToken(token);
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
                            {isLoginLoading && <Spinner />}
                            Đăng nhập
                        </button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default LoginCard;
