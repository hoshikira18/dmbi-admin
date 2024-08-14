'use client';
import {
    useDeletePriceRequest,
    usePriceRequests,
} from '@/api/price-requests/hook';
import { Layout } from '../layout';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/table';
import { formatDate } from '@/lib/utils';

const PriceQuoteTemplate = () => {
    const { data: priceRequests } = usePriceRequests();
    console.log(priceRequests);

    const { mutate: deletePriceRequest } = useDeletePriceRequest();
    const handleDelete = (id) => {
        deletePriceRequest(id);
    };

    return (
        <Layout>
            <Card>
                <CardHeader>
                    <CardTitle>Price Quote</CardTitle>
                </CardHeader>
                <CardContent>
                    {
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-1/15">
                                        STT
                                    </TableHead>
                                    <TableHead className="w-1/10">
                                        Thời gian
                                    </TableHead>
                                    <TableHead className="w-1/6">
                                        Tên khách hàng
                                    </TableHead>
                                    <TableHead className="w-1/8">
                                        Sản phẩm
                                    </TableHead>
                                    <TableHead className="w-1/10">
                                        SĐT
                                    </TableHead>
                                    <TableHead className="w-1/8">
                                        Email
                                    </TableHead>
                                    <TableHead className="w-1/8">
                                        Ghi chú
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {priceRequests?.map((request, index) => (
                                    <TableRow key={request.id}>
                                        <TableCell className="w-1/15">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell className="w-1/10">
                                            {formatDate(request.created_at)}
                                        </TableCell>
                                        <TableCell className="w-1/6">
                                            {request.customerName}
                                        </TableCell>
                                        <TableCell className="w-1/8 max-w-[160px]">
                                            {request.product}
                                        </TableCell>
                                        <TableCell className="w-1/10">
                                            {request.customerPhone}
                                        </TableCell>
                                        <TableCell className="w-1/8 max-w-[120px] truncate">
                                            {request.customerEmail}
                                        </TableCell>
                                        <TableCell className="w-1/8 max-w-[120px]">
                                            {request.detail}
                                        </TableCell>
                                        <TableCell>
                                            <button
                                                className="btn bg-blue-600"
                                                onClick={() => {
                                                    handleDelete(request.id);
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    }
                </CardContent>
            </Card>
        </Layout>
    );
};

export default PriceQuoteTemplate;
