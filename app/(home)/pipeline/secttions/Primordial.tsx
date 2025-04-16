import Image from "next/image";

const Primordial = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
            {/* Title Block */}
            <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl max-w-6xl font-normal ">
                    Extending the reproductive longevity by protecting the Primordial follicle pool
                </h2>
            </div>

            {/* Image + Text Block */}
            <div className="mt-10 flex flex-col lg:flex-row items-center lg:items-start gap-10">
                {/* Image */}
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg flex-shrink-0">
                    <Image
                        src={'/pipeline/primordial.svg'}
                        width={600}
                        height={600}
                        alt="diagram"
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Paragraph */}
                <div className="w-full lg:self-center">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl  text-left lg:max-w-sm  font-normal">
                        Our genetic detoxification software was designed to handle naturally-occurring toxins, not the 85,000 industrial chemicals present in our environment today. As a result, toxins can begin to build up in the cells, especially gametes, and cause damage to our cells making them vulnerable to premature aging.
                    </p>
                </div>

                
            </div>
        </section>
    );
};

export default Primordial;
