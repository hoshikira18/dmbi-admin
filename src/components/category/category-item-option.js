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
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
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
                <CategoryDeleteButton id={id} />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default CategoryItemOptions;