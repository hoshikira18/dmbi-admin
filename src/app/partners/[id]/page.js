import { getPartner } from '@/api/api';
import PartnerDetailTemplate from '@/components/partners/partner-detail-template';

const PartnerDetailPage = async ({ params }) => {
    return <PartnerDetailTemplate params={params} />;
};

export default PartnerDetailPage;
