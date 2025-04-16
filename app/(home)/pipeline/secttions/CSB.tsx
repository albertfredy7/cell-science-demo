import { ReactNode } from "react";

const CSB = () => {
    
    interface NumberedItemProps {
        number: string;
        children: ReactNode;
    }
    
    const NumberedItem = ({ number, children }: NumberedItemProps) => (
        <div className="flex items-start mb-6 sm:mb-8">
            <span className="text-4xl sm:text-5xl font-normal mr-4 flex-shrink-0">{number}</span>
            <div className="border-b border-gray-300 pb-4 w-full">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl">{children}</p>
            </div>
        </div>
    );

    const ITEMS = [
        { number: "1", text: "Guard the primordial follicles from premature activation." },
        { number: "2", text: "Maintain the redox balance and preserve the growing follicles." },
        { number: "3", text: "Enhance the body's natural detoxification process." },
        { number: "4", text: "Preserve the primordial follicle and augment the growing follicles." },
        { number: "5", text: "Enhance the reproductive longevity and health span." },
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6">
            <div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-left font-normal">
                    CellScience proprietary formula, CSB -003 targeting the body’s detox function by specially focusing on the GSTM family genes involved in the Detox activity and on women with polymorphism.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-20">
                {ITEMS.map(({ number, text }) => (
                    <NumberedItem key={number} number={number}>
                        {text}
                    </NumberedItem>
                ))}
            </div>
        </section>
    );
}

export default CSB;