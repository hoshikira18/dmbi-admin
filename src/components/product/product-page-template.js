import Link from 'next/link';
import { Layout } from '../layout';

const ProductPageTemplate = () => {
    return (
        <Layout>
            <Link href="/products/new">
                <button className="btn btn-primary">Tạo sản phẩm mới</button>
            </Link>
        </Layout>
    );
};

export default ProductPageTemplate;
