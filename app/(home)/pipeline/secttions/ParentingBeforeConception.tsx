import type { ReactNode } from "react";

interface TargetAreaProps {
    children: ReactNode;
}

const TargetArea = ({ children }: TargetAreaProps) => (
    <div className="flex items-center mb-2 sm:mb-3">
        <div
            className="w-3 h-3 sm:w-4 sm:h-4 bg-black mr-2 sm:mr-3 flex-shrink-0"
            aria-hidden="true"
        />
        <span className="text-base sm:text-lg md:text-xl lg:text-2xl">{children}</span>
    </div>
);

const ParentingBeforeConception = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <header className="mb-6 sm:mb-8 flex items-center p-3 sm:p-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl max-w-6xl font-normal">
                    Parenting Before Conception
                </h2>
            </header>

            <div className="space-y-4 sm:space-y-6 text-lg sm:text-xl md:text-2xl font-light">
                <p>
                    CellScience&apos;s carefully selected pre-pregnancy supplements offers a novel blend of nature&apos;s best defence and
                    rejuvenation, orchestrate a refreshing &quot;cell spa&quot; to Ovary, reproductive tissues, micro environment and ova
                    duct to replenish the tissue to restore its beauty, functions and harmony from with in.
                </p>

                <p>
                    This pioneering brand targets age-related decline in ovarian tissues, cumulus cells, reproductive tract, ova
                    duct, and endometrium.
                </p>

                <p>
                    Our supplements help <strong>replenish and restore</strong> the ovary, reproductive tissues, and
                    microenvironment, ensuring balance, beauty, and optimal function.
                </p>

                <hr className="my-6 sm:my-8 border-gray-300" />

                <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-normal mb-3 sm:mb-4">
                        Science-Backed Innovation
                    </h3>

                    <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">
                        This is the first brand targeting age-related ovarian decline, specifically supporting:
                    </p>

                    <div className="mt-3 sm:mt-4 flex flex-wrap gap-4 sm:gap-6">
                        <TargetArea>Cumulus cells</TargetArea>
                        <TargetArea>Reproductive tract</TargetArea>
                        <TargetArea>Ova duct & endometrium</TargetArea>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParentingBeforeConception;