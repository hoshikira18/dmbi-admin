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
                        <Table>
                            <TableCaption>All question</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>STT</TableHead>
                                    <TableHead>Thời gian</TableHead>
                                    <TableHead>Tên khách hàng</TableHead>
                                    <TableHead>SĐT</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Ghi chú</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {customerQuestions?.map((question, index) => (
                                    <TableRow key={question.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>
                                            {formatDate(question.created_at)}
                                        </TableCell>
                                        <TableCell>
                                            {question.customerName}
                                        </TableCell>
                                        <TableCell>
                                            {question.customerPhone}
                                        </TableCell>
                                        <TableCell>
                                            {question.customerEmail}
                                        </TableCell>
                                        <TableCell>{question.note}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    }
                </CardContent>
            </Card>

            <button
                className="btn btn-primary"
                onClick={() => {
                    handleDelete(
                        'customer-questions_01J4W2GPT0TD3AQ7BP0273J1F1'
                    );
                }}
            >
                Delete
            </button>
        </Layout>
    );
};

export default CustomerQuestionsTemplate;
