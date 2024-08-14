import { Label } from '@/components/ui/label';
import { EditGeneral } from '../edit';
import { formatDate, formatNumber } from '@/lib/utils';

const GeneralInfo = ({ product, handleUpdate }) => {
    return (
        <div>
            <h2 className="my-2 flex items-center text-xl font-semibold">
                <EditGeneral handleUpdate={handleUpdate} product={product} />
                Thông tin chung
            </h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <span>
                        <Label>Giá: </Label>
                        <span className="font-bold text-red-600">
                            {formatNumber(product?.metadata?.price) || 0} VNĐ
                        </span>
                    </span>
                </div>
                <div>
                    <Label>Ngày tạo: </Label>
                    {formatDate(product?.created_at)}
                </div>
                <div>
                    <span>
                        <Label>Tồn kho: </Label>
                        {formatNumber(product?.metadata?.inventory) || 0}
                    </span>
                </div>
                <div>
                    <span>
                        <Label>Nguồn gốc: </Label>
                        {product?.origin_country}
                    </span>
                </div>
                {product?.metadata?.technology && (
                    <div>
                        <Label>Công nghệ: </Label>
                        {product?.metadata?.technology}
                    </div>
                )}
                {product?.metadata?.uses && (
                    <div>
                        <Label>Ứng dụng: </Label>
                        {product?.metadata?.uses}
                    </div>
                )}
                {product?.metadata?.guarantee && (
                    <div>
                        <Label>Bảo hành: </Label>
                        {product?.metadata?.guarantee}
                    </div>
                )}
                {product?.metadata?.model && (
                    <div>
                        <Label>Model: </Label>
                        {product?.metadata?.model}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GeneralInfo;
