import { Eclipse, Ellipsis } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button"
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
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import DialogComponent from '../common/dialog'
import CollectionDeleteButton from './delete-collection'

const CollectionItemOptions = ({id}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
            <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
      <Link href={`/collections/${id}`}>
                    <div className="mx-auto mb-[2px] h-[30px] w-1/1 bg-green-400 py-[4px] align-middle text-center rounded">
                        Chi tiết
                    </div>
                </Link>
                    <DialogComponent triggerButton={<div className="mx-auto mt-[2px] h-[30px] w-1/1 bg-red-400 py-[4px] align-middle text-center rounded"><button>Xóa</button></div>}>
                    <CollectionDeleteButton id={id} />
                    </DialogComponent>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CollectionItemOptions