'use client';

import { usePartner } from '@/api/partner/hook';

const PartnerDetailTemplate = ({ params }) => {
    const { data, isLoading } = usePartner(params.id);
    return <div></div>;
};

export default PartnerDetailTemplate;
