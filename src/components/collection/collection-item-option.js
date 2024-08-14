import {
    Eclipse,
    Ellipsis,
    TriangleAlert,
    TriangleAlertIcon,
} from 'lucide-react';
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
import DialogComponent from '../common/dialog';
import CollectionDeleteButton from './delete-collection';

const CollectionItemOptions = ({ id }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <Ellipsis />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
                <Link href={`/collections/${id}`}>
                    <div className="w-1/1 mx-auto mb-[2px] h-[30px] rounded bg-green-400 py-[4px] text-center align-middle">
                        Chi tiết
                    </div>
                </Link>
                <CollectionDeleteButton id={id} />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default CollectionItemOptions;
