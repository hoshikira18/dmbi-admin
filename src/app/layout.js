import { Inter } from 'next/font/google';
import './globals.css';
import MedusaClient from '@/components/common/MedusaClient';
import { Layout } from '@/components/layout';

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
                <Layout>
                    <MedusaClient>{children}</MedusaClient>
                </Layout>
            </body>
        </html>
    );
}
