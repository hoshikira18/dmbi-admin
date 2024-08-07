import DialogComponent from '@/components/common/dialog';
import { Layout } from '@/components/layout';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import NewBlogCategory from './new-blog-category';

const BlogCategoriesTemplate = () => {
    return (
        <Layout>
            <Card>
                <CardHeader>
                    <CardTitle>Danh mục bài viết</CardTitle>
                    <DialogComponent
                        title={'Tạo mới danh mục'}
                        triggerButton={
                            <button className="btn btn-primary">Tạo mới</button>
                        }
                        size="lg"
                    >
                        <NewBlogCategory />
                    </DialogComponent>
                </CardHeader>
            </Card>
        </Layout>
    );
};
export default BlogCategoriesTemplate;
