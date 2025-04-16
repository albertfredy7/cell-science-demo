import Image from "next/image";
import type { ReactNode } from "react";

interface NumberedItemProps {
    number: string;
    children: ReactNode;
}

const NumberedItem = ({ number, children }: NumberedItemProps) => (
    <div className="flex items-start mb-6 sm:mb-8 max-w-sm mx-auto">
        <span className="text-4xl sm:text-5xl font-normal mr-4 flex-shrink-0">{number}</span>
        <div className="border-b border-gray-300 pb-4 w-full  ">
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
    <section className=" flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10">
        <header className=" mb-6 sm:mb-8 flex items-center ">
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-normal max-w-3xl">Harnessing the Power of Mitochondria</h2>
        </header>

        <div className="space-y-2 font-light">
            <h3 className="text-lg sm:text-xl md:text-2xl">
                Mitochondria - The Driver of Ovarian Aging &  Interconnecting Hub of All Hallmarks</h3>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8">
                Our approach focus on evidence-based prospective molecules (COQ10) to:
            </p>

            <div className="flex flex-col md:flex-row gap-6 md:gap-10 pt-8">
                <div className="md:w-2/5 flex items-center justify-center">
                    <Image
                        src="/mitochondria.png"
                        alt="Cell illustration showing mitochondrial function"
                        width={300}
                        height={300}
                        className="w-full max-w-xs"
                        priority
                    />
                </div>

                <div className="md:w-3/5">
                    {ITEMS.map(({ number, text }) => (
                        <NumberedItem key={number} number={number}>
                            {text}
                        </NumberedItem>
                    ))}
                </div>


            </div>
        </div>
    </section>
);

export default HarnessingMitochondria;