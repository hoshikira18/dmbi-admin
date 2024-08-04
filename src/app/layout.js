import { Inter } from 'next/font/google';
import './globals.css';
import MedusaClient from '@/components/common/MedusaClient';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'DMB Industrial',
    description:
        'DMB Industrial, chuyên cung cấp vật liệu điện tử, cơ khí chất lượng cao tạo Việt Nam.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MedusaClient>
                    <Toaster />
                    {children}
                </MedusaClient>
            </body>
        </html>
    );
}
