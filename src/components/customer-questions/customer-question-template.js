'use client';

import {
    useCustomerQuestions,
    useDeleteCustomerQuestion,
} from '@/api/customer-question/hook';
import { Layout } from '../layout';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { formatDate } from '@/lib/utils';
import { check } from 'prettier';
import { Trash } from 'lucide-react';

const CustomerQuestionsTemplate = () => {
    const { data: customerQuestions } = useCustomerQuestions();
    console.log(customerQuestions);

    const { mutate: deleteCustomerQuestion } = useDeleteCustomerQuestion();
    const handleDelete = (id) => {
        deleteCustomerQuestion(id);
    };

    return (
        <Layout>
            {/* <h1>Customer Questions</h1>
            <p>
                Here are some of the questions that customers have asked us in
                the past.
            </p> */}
            <Card>
                <CardHeader>
                    <CardTitle>Customer questions</CardTitle>
                </CardHeader>
                <CardContent>
                    {
                        <Table id="questionTable">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-1/15">STT</TableHead>
                                    <TableHead className="w-1/8">
                                        Thời gian
                                    </TableHead>
                                    <TableHead className="mr-[20px] w-1/6">
                                        Tên khách hàng
                                    </TableHead>
                                    <TableHead className="w-1/10">
                                        SĐT
                                    </TableHead>
                                    <TableHead className="w-1/6">
                                        Email
                                    </TableHead>
                                    <TableHead className="w-1/4">
                                        Ghi chú
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {customerQuestions?.map((question, index) => (
                                    <TableRow key={question.id}>
                                        <TableCell className="w-1/15">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell className="w-1/8">
                                            {formatDate(question.created_at)}
                                        </TableCell>
                                        <TableCell className="mr-[10px] w-1/6">
                                            {question.customerName}
                                        </TableCell>
                                        <TableCell className="w-1/10 max-w-[200px] truncate">
                                            {question.customerPhone}
                                        </TableCell>
                                        <TableCell className="w-1/6 max-w-[120px] truncate">
                                            {question.customerEmail}
                                        </TableCell>
                                        <TableCell className="w-1/4 max-w-[180px]">
                                            {question.note}
                                        </TableCell>
                                        <TableCell className="w-1/20">
                                            <button
                                                className="btn btn-outline btn-error"
                                                onClick={() => {
                                                    handleDelete(question.id);
                                                }}
                                            >
                                                <Trash size={20} />
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

export default CustomerQuestionsTemplate;
