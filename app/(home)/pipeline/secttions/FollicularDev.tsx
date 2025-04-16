import Image from "next/image";

const FollicularDev = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-12 space-y-4 lg:text-center">
            {/* title */}
            <div>
                <h2 className="text-2xl sm:text-2xl md:text-4xl font-normal max-w-6xl">
                    Follicular Development and Reproductive Longevity
                </h2>
            </div>
            {/* paragraph */}
            <div>
                <p className="text-base sm:text-lg md:text-xl lg:text-xl  text-left lg:text-center  font-normal  max-w-5xl mx-auto">
                    Genetic deficiency in the detoxification process causes prolonged oxidative stress that alters the redox equilibrium of the ovary, resulting in downstream effects that promote <span className="font-medium">premature primordial follicle depletion by increasing primordial follicle activation and altering follicular metabolism and energetics in favour of accelerated ovarian aging.</span>
                </p>
            </div>

            {/* image */}
            <figure className="w-full  flex-shrink-0  pt-10">
                <Image
                    src="/pipeline/follicularDev.svg"
                    width={900}
                    height={900}
                    alt="diagram"
                    className="w-full max-w-4xl mx-auto h-auto object-contain"
                />
                <div className="w-full flex justify-center lg:-translate-y-10 px-4">
                    <p className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-xs sm:max-w-sm md:max-w-md">
                        Accelerated Follicular Atresia, Oogenesis and Reproductive Longevity.
                    </p>
                </div>
            </figure>
           
        </section>
    );
}

export default FollicularDev;