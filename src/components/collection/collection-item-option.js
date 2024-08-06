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

const CollectionItemOptions = ({ id }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <Ellipsis />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
                <DropdownMenuItem>
                    <Link href={`/collections/${id}`}>Chi tiết</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Xóa</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default CollectionItemOptions;
