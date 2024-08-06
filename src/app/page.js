'use client';
import { Layout } from '@/components/layout';
import { useAuth, useAuthStore } from '@/store/auth-store';
const HomePage = () => {
    const { token } = useAuth();
    console.log(token);
    return <Layout></Layout>;
};

export default HomePage;
