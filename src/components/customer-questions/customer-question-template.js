'use client';

import {
    useCustomerQuestions,
    useDeleteCustomerQuestion,
} from '@/api/customer-question/hook';
import { Layout } from '../layout';

const CustomerQuestionsTemplate = () => {
    const { data: customerQuestions } = useCustomerQuestions();
    console.log(customerQuestions);

    const { mutate: deleteCustomerQuestion } = useDeleteCustomerQuestion();
    const handleDelete = (id) => {
        deleteCustomerQuestion(id);
    };

    return (
        <Layout>
            <h1>Customer Questions</h1>
            <p>
                Here are some of the questions that customers have asked us in
                the past.
            </p>

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
