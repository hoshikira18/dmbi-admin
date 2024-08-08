/* eslint-disable @next/next/no-img-element */
'use client';
import { useBlogCategory, useBlogPost } from '@/api/blog/hook';
import Spinner from '../common/spinner';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Layout } from '../layout';
import { formatDate } from '@/lib/utils';
import GeneralInfor from './detail/general';

const PostDetailTemplate = ({ params }) => {
    const { data: post, isLoading } = useBlogPost(params.id);
    console.log(post);

    return (
        <Layout>
            {isLoading ? (
                <div className="flex h-screen items-center justify-center">
                    <Spinner />
                </div>
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle>{post.title}</CardTitle>
                        <GeneralInfor
                            date={post.created_at}
                            category_id={post.category_id}
                        />
                    </CardHeader>
                    <CardContent>
                        <div>
                            <img
                                className="rounded-lg border-2"
                                src={post.image}
                                alt={post.title}
                            />

                            <div className="mt-4">{post.content}</div>
                        </div>
                    </CardContent>
                </Card>
            )}
        </Layout>
    );
};

export default PostDetailTemplate;
