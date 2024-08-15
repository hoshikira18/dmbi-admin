/* eslint-disable @next/next/no-img-element */
'use client';
import dynamic from 'next/dynamic';
import { Layout } from '../layout';
import { BlogEditCard, BlogImageEditCard, BlogTitleEditCard } from '../blog';
import Spinner from '../common/spinner';
import { DialogComponent } from '../common';
import GeneralInfor from './detail/general';
import { PencilLineIcon } from 'lucide-react';
import { useBlogPost, useUpdatePost } from '@/api/blog/hook';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { useToast } from '../ui/use-toast';
import BlogContent from './detail/content';

const FroalaEditorView = dynamic(
    () => import('react-froala-wysiwyg/FroalaEditorView'),
    { ssr: false }
);

const PostDetailTemplate = ({ params }) => {
    const { toast } = useToast();
    const { data: post, isLoading } = useBlogPost(params.id);
    const { mutate: updatePost } = useUpdatePost();

    const handleUpdatePost = (data) => {
        updatePost(
            { id: post.id, post: data },
            {
                onSuccess: () => {
                    toast({
                        title: 'Cập nhật bài viết thành công',
                    });
                },
                onError: () => {
                    toast({
                        title: 'Cập nhật bài viết thất bại, đã có lỗi xảy ra',
                        status: 'error',
                    });
                },
            }
        );
    };

    return (
        <Layout>
            {isLoading ? (
                <div className="flex h-screen items-center justify-center">
                    <Spinner />
                </div>
            ) : (
                <Card className="relative">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>{post.title}</CardTitle>
                            <DialogComponent
                                title={'Chỉnh sửa bài viết'}
                                triggerButton={
                                    <button className="rounded-full p-2 hover:bg-gray-100">
                                        <PencilLineIcon size={24} />
                                    </button>
                                }
                                size="sm"
                            >
                                <BlogTitleEditCard
                                    post={post}
                                    handleUpdatePost={handleUpdatePost}
                                />
                            </DialogComponent>
                        </div>
                        <GeneralInfor
                            date={post.created_at}
                            category_id={post.category_id}
                            handleUpdatePost={handleUpdatePost}
                        />
                    </CardHeader>
                    <CardContent>
                        <div>
                            <div className="relative">
                                <BlogImageEditCard
                                    handleUpdatePost={handleUpdatePost}
                                />
                                <img
                                    className="rounded-lg border-2"
                                    src={post.image}
                                    alt={post.title}
                                />
                            </div>

                            <div className="mt-4">
                                <BlogContent
                                    content={post.content}
                                    handleUpdatePost={handleUpdatePost}
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}
        </Layout>
    );
};

export default PostDetailTemplate;
