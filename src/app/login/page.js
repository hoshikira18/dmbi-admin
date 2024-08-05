'use client';

import LoginCard from '@/components/login/login-card';
import { getAuth } from '@/store/auth-store';

const Login = () => {
    const token = getAuth().token;
    console.log('Token: ', token);
    return (
        <div className="flex min-h-screen items-center justify-center">
            <LoginCard />
        </div>
    );
};

export default Login;
