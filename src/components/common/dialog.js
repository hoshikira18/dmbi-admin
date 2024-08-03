import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from '@/components/ui/dialog';

const DialogComponent = ({
    title,
    description,
    triggerButton = <button className="btn">Click</button>,
    size = 'sm',
    children,
}) => {
    const dialogSize = {
        sm: 'sm:max-w-[425px]',
        md: 'md:max-w-screen-md',
        lg: 'lg:max-w-screen-lg',
        xl: 'xl:max-w-screen-xl',
    };
    return (
        <Dialog>
            <DialogTrigger asChild>{triggerButton}</DialogTrigger>
            <DialogContent className={`${dialogSize[size]}`}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div className="">{children}</div>
                <DialogFooter></DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DialogComponent;
