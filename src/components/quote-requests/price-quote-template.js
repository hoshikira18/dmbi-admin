'use client';
import {
    useDeletePriceRequest,
    usePriceRequests,
} from '@/api/price-requests/hook';
import { Layout } from '../layout';

const PriceQuoteTemplate = () => {
    const { data: priceRequests } = usePriceRequests();
    console.log(priceRequests);

    const { mutate: deletePriceRequest } = useDeletePriceRequest();

    return (
        <Layout>
            <button
                className="btn btn-primary"
                onClick={() =>
                    deletePriceRequest('price-quote_01J4W3RAJFWCDB6VJWP68G6K2N')
                }
            >
                Delete
            </button>
        </Layout>
    );
};

export default PriceQuoteTemplate;
