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
        sm: 'sm:max-w-[400px]',
        md: 'sm:max-w-[500px] md:max-w-[600px]',
        lg: 'md:max-w-[750px] lg:max-w-[900px]',
        xl: 'lg:max-w-[1100px] xl:max-w-[1200px] ',
    };

    return (
        <Dialog>
            <DialogTrigger asChild>{triggerButton}</DialogTrigger>
            <DialogContent
                className={`max-h-screen ${dialogSize[size]} w-screen overflow-auto`}
            >
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
