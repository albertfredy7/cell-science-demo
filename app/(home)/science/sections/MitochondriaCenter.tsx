import Image from "next/image"

export default function MitochondriaCenter() {
    return (
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
            <div className="space-y-6 md:space-y-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center max-w-3xl mx-auto leading-tight">
                    Mitochondria: Center of All Hallmarks of Ageing & Epigenetics
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl max-w-2xl mx-auto text-center font-light text-muted-foreground">
                    &quot;Perhaps no structure is so intimately and simultaneously connected to both the energy of youth and the
                    decline of the old&quot;
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-20 mx-auto max-w-5xl">
                <div className="relative w-full aspect-square  max-w-md">
                    <Image
                        src="/science/hallmarks.png"
                        alt="Diagram of hallmarks of aging showing integrative, primary and antagonistic processes"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <div className="relative w-full aspect-square  max-w-md">
                    <Image
                        src="/science/mitonuclearunit.png"
                        alt="Diagram of mito-nuclear unit with mitochondria, cytoplasm, nucleus and transcriptional regulation"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
