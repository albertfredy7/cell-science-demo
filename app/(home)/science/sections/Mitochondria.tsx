import Image from "next/image";

const Mitochondria = () => {
    return (
        <section className="bg-gray-100 containerx">
            <div className="flex justify-center items-center max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-36">
                <div className="max-w-5xl mx-auto space-y-8">
                    <h1 className="text-3xl  font-light max-w-3xl ">
                        Mitochondria - Beyond the power house to the processor and signalling organelles of the cell
                    </h1>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16 items-center mt-6">


                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="relative w-full max-w-[400px] aspect-square">
                                <Image
                                    src="/science/mitochondria.svg"
                                    alt="Mitochondria diagram showing inputs and outputs"
                                    width={400}
                                    height={400}
                                    className="object-contain mix-blend-multiply"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2">
                            <div className="text-start text-2xl font-light">
                                <p className="font-light">
                                    The analogy of mitochondria as powerhouses has expired. Mitochondria are living, dynamic,
                                    maternally inherited, energy transforming, biosynthetic, and signaling organelles that
                                    actively transduce biological information. We argue that mitochondria are the professor of
                                    the cell.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mitochondria;