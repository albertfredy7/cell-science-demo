import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MoveUpRight } from 'lucide-react';
import * as React from 'react';


interface CustomButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export function CustomButton({ children, onClick, className }: CustomButtonProps) {
    return (
        <div
            className={`flex items-center ${className}`}
        >
            <Button className="rounded-full bg-black px-4 py-2 text-[60%] font-normal shadow-none hover:bg-black sm:px-5 sm:py-3 md:px-6 md:py-4" onClick={onClick}>
                {children}
            </Button>
            <div className="h-2 w-2 bg-black" />
            <motion.div
                className="flex h-6 w-6 items-center justify-center rounded-full bg-black sm:h-7 sm:w-7 md:h-9 md:w-9"
                variants={{
                    hover: { rotate: 45 },
                    initial: { rotate: 0 }
                }}
                initial="initial"
                animate="initial"
                transition={{ duration: 0.2 }}
            >
                <MoveUpRight className="h-3 font-bold text-white sm:h-4 md:h-5" />
            </motion.div>
        </div>
    );
}
