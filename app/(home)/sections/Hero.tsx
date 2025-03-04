
const Hero = () => {
    return (
        <>
            <section className="relative h-screen overflow-hidden">
                {/* ribbon 1 */}
                <svg width="777" height="192" viewBox="0 0 777 192" fill="none" className="absolute bottom-0 left-0 z-0 sm:-left-[25%] lg:-left-2">
                    <defs>
                        <path id="curve1" d="M7 33.6776C22.823 24.9424 80.0525 8.78236 182.386 14.0235C310.303 20.5749 478.896 109.327 521.665 135.224C643.086 208.745 707.045 166.282 776 171.257" />
                        {/* Filter for white glow effect */}
                        <filter id="glow1" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feFlood floodColor="white" result="color" />
                            <feComposite in="color" in2="blur" operator="in" />
                            <feComposite in="SourceGraphic" />
                        </filter>
                    </defs>

                    {/* White ribbon background */}
                    <path
                        d="M7 33.6776C22.823 24.9424 80.0525 8.78236 182.386 14.0235C310.303 20.5749 478.896 109.327 521.665 135.224C643.086 208.745 707.045 166.282 776 171.257"
                        stroke="#f0f0f0"
                        opacity={0.5}
                        strokeWidth="25"
                        filter="url(#glow1)"
                    />

                    {/* Text along the path */}
                    <text className="text-xs font-semibold tracking-wide" dy={5}>
                        <textPath href="#curve1" startOffset="0%" className="animate-marquee fill-[#3a3a3a]">
                            {Array(18)
                                .fill('Explore Now!')
                                .map((text, index) => (
                                    <tspan key={index}>{text} &nbsp;</tspan>
                                ))}
                        </textPath>
                    </text>
                </svg>
                {/* ribbon 2  */}
                <svg
                    width="1000"
                    height="400"
                    viewBox="0 0 600 376"
                    fill="none"
                    className="custom1:-right-[15%] custom1:bottom-[10%] absolute z-0 hidden sm:right-[10%] md:-right-[70%] md:bottom-[10%] md:block lg:-right-[40%] lg:bottom-[15%] xl:-right-[20%] xl:bottom-[20%] 2xl:-right-[2%] 2xl:bottom-[15%] custom:-right-[22%] custom:bottom-[10%]"
                >
                    <defs>
                        <path id="curve2" d="M11 430C21.2609 414.172 42.2851 369.972 44.2954 319.792C46.8083 257.067 21.0515 79.4442 173.08 38.4093C294.702 5.58129 620.369 11.4434 768 18.478" />
                        <filter id="glow2" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feFlood floodColor="white" result="color" />
                            <feComposite in="color" in2="blur" operator="in" />
                            <feComposite in="SourceGraphic" />
                        </filter>
                    </defs>

                    <path
                        d="M11 430C21.2609 414.172 42.2851 369.972 44.2954 319.792C46.8083 257.067 21.0515 79.4442 173.08 38.4093C294.702 5.58129 620.369 11.4434 768 18.478"
                        stroke="#f0f0f0"
                        strokeWidth="25"
                        opacity={0.5}
                        filter="url(#glow2)"
                    />

                    <text className="text-xs font-semibold tracking-wide" dy={5}>
                        <textPath href="#curve2" startOffset="0%" className="fill-[#3a3a3a]">
                            {Array(18)
                                .fill('Explore Now!')
                                .map((text, index) => (
                                    <tspan key={index}>{text} &nbsp;</tspan>
                                ))}
                        </textPath>
                    </text>
                </svg>

                {/* <div className="container relative mx-auto h-full px-4">
                    <div className="xs:pt-28 flex h-full w-full pt-28 lg:top-1/4">
                        <div className="max-w-screen relative flex w-full flex-col gap-2 px-8 lg:px-0">
                            <div className="absolute top-[5%] space-y-4 lg:left-[3%]">
                                <h1 className="custom1:text-5xl text-4xl tracking-tight md:text-5xl xl:text-4xl 2xl:text-5xl">
                                    Timeless Living,
                                    <br />
                                    Backed by Science
                                </h1>
                                <p className="max-w-xs text-sm leading-tight text-gray-600 sm:max-w-sm sm:text-sm md:text-base">
                                    CellScience Biotech, a cell health company that targets cellular health through mitochondrial health and enhances longevity.
                                </p>
                                <div>
                                    <Button size={'sm'} className="hidden items-center gap-2 rounded-md bg-black text-xs font-bold text-white lg:flex">
                                        KNOW MORE{' '}
                                        <span className="text-sm">
                                            <ArrowRight />
                                        </span>
                                    </Button>
                                    <CustomButton className="lg:hidden">KNOW MORE</CustomButton>
                                </div>
                            </div>
                            <div className="absolute right-[5%] top-[55%] hidden lg:top-[45%] lg:block xl:top-[48%] 2xl:top-[50%]">
                                <div className="max-w-52 2xl:max-w-xs">
                                    <p className="text-lg tracking-tight md:text-2xl xl:text-2xl 2xl:text-3xl">
                                        Even though we are unique, we all aspire to be our <span className="text-teal-500">best.</span>
                                    </p>
                                    <div className="hidden pt-4 lg:block">
                                        <CustomButton>KNOW MORE</CustomButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="custom2:max-w-xl custom1:max-w-4xl absolute bottom-0 left-0 right-0 mx-auto flex h-[calc(100vh-20%)] max-h-[90vh] w-full max-w-2xl items-end justify-center sm:max-w-lg md:max-w-2xl lg:max-w-2xl xl:max-w-2xl 2xl:max-w-5xl">
                        <Image src="/hero.png" alt="hero" className="xs:scale-150 xs:-translate-y-20 h-fit w-auto" width={972} height={830} />
                    </div>
                </div> */}

               

                <div className="absolute bottom-4 left-4 flex w-fit items-center gap-2 rounded-md bg-teal-500/10 bg-gradient-to-r p-2 md:bottom-10 md:right-10 lg:left-auto lg:right-4">
                    <div className="rounded-md px-2 py-1 text-xs font-bold text-teal-500 md:text-lg">#1</div>

                    <div className="flex flex-col">
                        <p className="text-xs md:text-sm">Doctor Recommended</p>
                        <p className="text-xs text-gray-700 md:text-sm">SIMPLY GENIUS</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
