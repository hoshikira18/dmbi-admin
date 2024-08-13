import { MessageCircle } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../ui/tooltip';

const TooltipComponent = ({ content }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <MessageCircle size={15} />
                </TooltipTrigger>
                <TooltipContent>
                    <p>{content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default TooltipComponent;
