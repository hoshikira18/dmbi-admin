import { Eclipse, Ellipsis } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { useAdminDeleteProductCategory } from 'medusa-react';
import DialogComponent from '../common/dialog';
import Category from './delete-category';
import CategoryDeleteButton from './delete-category';

const CategoryItemOptions = ({ id }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <Ellipsis />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
                <Link href={`/categories/${id}`}>
                    <div className="w-1/1 mx-auto mb-[2px] h-[30px] rounded bg-green-400 py-[4px] text-center align-middle">
                        Chi tiết
                    </div>
                </Link>
                <DialogComponent
                    title={"Bạn có muốn xóa danh mục này?"}
                    description={"⚠️Thao tác này không thể hoàn lại!"}
                    triggerButton={
                        <div className="w-1/1 mx-auto mt-[2px] h-[30px] rounded bg-red-400 py-[4px] text-center align-middle">
                            <button>Xóa</button>
                        </div>
                    }
                >
                    <CategoryDeleteButton id={id} />
                </DialogComponent>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default CategoryItemOptions;