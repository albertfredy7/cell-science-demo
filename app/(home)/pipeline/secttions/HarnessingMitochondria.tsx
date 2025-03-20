import Image from "next/image";
import type { ReactNode } from "react";

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

// Moved items array outside component to prevent re-creation on each render
const ITEMS = [
    { number: "1", text: "Restore oocyte mitochondrial metabolism" },
    { number: "2", text: "Enhance reproductive longevity" },
    { number: "3", text: "Support offspring's long-term health" },
    { number: "4", text: "Utilize as preventative therapy to improve overall quality of life for women as they age" },
];

const HarnessingMitochondria = () => (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">
        <header className="bg-gray-200 mb-6 sm:mb-8 flex items-center p-3 sm:p-4">
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mr-4 sm:mr-6">3</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-normal">Harnessing the Power of Mitochondria</h2>
        </header>

        <div className="space-y-4 sm:space-y-6  font-light">
            <h3 className="text-lg sm:text-xl md:text-2xl">
                The Driver of Ovarian Aging & The Interconnecting Hub of All Hallmarks
            </h3>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8">
                Our approach focuses on evidence-based prospective molecules (COQ10) to:
            </p>

            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-3/5">
                    {ITEMS.map(({ number, text }) => (
                        <NumberedItem key={number} number={number}>
                            {text}
                        </NumberedItem>
                    ))}
                </div>

                <div className="md:w-2/5 flex items-center justify-center">
                    <Image
                        src="/pipeline/cell.svg"
                        alt="Cell illustration showing mitochondrial function"
                        width={300}
                        height={300}
                        className="w-full max-w-xs"
                        priority
                    />
                </div>
            </div>
        </div>
    </section>
);

export default HarnessingMitochondria;