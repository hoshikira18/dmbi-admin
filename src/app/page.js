'use client';
import { getToken } from '@/lib/data';
import {
    useAdminGetSession,
    useAdminLogin,
    useAdminUploadFile,
} from 'medusa-react';
import { getAuth } from '@/store/auth-store';

export default function Home() {
    const uploadFile = useAdminUploadFile();
    const adminLogin = useAdminLogin();
    const { setToken } = getAuth();

    const handleLogin = (email, password) => {
        adminLogin.mutate(
            {
                email,
                password,
            },
            {
                onSuccess: async ({ user }) => {
                    console.log(user);
                    const token = await getToken(email, password);
                    setToken(token);
                },
            }
        );
    };

    const handleFileUpload = (file) => {
        uploadFile.mutate(file, {
            onSuccess: ({ uploads }) => {
                console.log(uploads[0]);
            },
        });
    };

    return (
        <div>
            <input
                type="file"
                onChange={(e) => {
                    handleFileUpload(e.target.files[0]);
                }}
            />

            <button
                onClick={() => {
                    handleLogin('dmbi@gmail.com', '12345');
                }}
            >
                Click
            </button>
        </div>
    );
}
