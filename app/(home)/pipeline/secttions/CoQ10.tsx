import Image from "next/image";

const CoQ10 = () => {
    return (
        <section className="relative p-4 md:p-6 py-12 md:py-20">
            <div className="max-w-6xl mx-auto space-y-6 md:space-y-10">
                {/* title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal">
                    Impaired mtDNA gene expression, due to mutations in either mtDNA or nuclear DNA, <span className="font-medium">may develop secondary CoQ10 deficiency</span>
                </h1>

                {/* image */}
                <div className="h-full flex items-center justify-center">
                    <Image
                        src={'/pipeline/coQ10-diagram.svg'}
                        alt="diagram"
                        width={600}
                        height={800}
                        className="w-full  max-w-4xl "
                        priority
                    />
                </div>

                {/* quote */}
                <div className="max-w-5xl mx-auto">
                    <blockquote className="text-xl sm:text-2xl md:text-3xl font-normal">
                        &quot;Mitochondria are so small that one billion of them would fit comfortably in a grain of sand. The evolution of mitochondria fitted life with a turbo charged engine, revved up and ready for use at any time.&quot;
                    </blockquote>
                    <i><p className="font-light text-base sm:text-lg md:text-2xl mt-2">Nick Lane, Power, Sex, Suicide</p></i>
                </div>
            </div>
        </section>
    );
}

export default CoQ10;