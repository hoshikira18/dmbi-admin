'use client';

import { usePartners } from '@/api/hook';
import { Layout } from '../layout';
import { Card, CardHeader, CardTitle } from '../ui/card';

const PartnersTemplate = () => {
    const { data, isLoading } = usePartners();
    console.log(data);
    return (
        <Layout>
            <Card>
                <CardHeader>
                    <CardTitle>Đối tác</CardTitle>
                </CardHeader>
            </Card>
        </Layout>
    );
};

export default PartnersTemplate;
