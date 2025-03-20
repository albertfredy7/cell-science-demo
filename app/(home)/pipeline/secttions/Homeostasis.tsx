import Image from "next/image";

const ListItem = ({ number, text }: { number: number; text: string[] }) => (
    <div className="flex items-start border-b pb-3">
        <span className="text-5xl font-normal mr-4">{number}</span>
        <div>
            <p className="text-2xl max-w-xs">
                {text}
            </p>
        </div>
    </div>
)

const Homeostasis = () => {
    const listItems = [
        ["Building up of extracellular aggregates."],
        ["Disrupted Proteostasis."],
        ["Stiffening of extra cellular matrix."],
        ["Chronic inflammation."],
        ["Changes in intercellular communications."],
        ["Building up of damaged tissues."],
    ]

    return (
        <section className="max-w-6xl mx-auto p-6 md:p-8 relative">
            <div className="bg-gray-100 mb-10 flex items-center p-4">
                <span className="text-7xl font-normal mr-6">1</span>
                <h2 className="text-2xl md:text-3xl font-light">
                    Disrupted homeostasis in ovarian micro-environment
                </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="md:w-1/2">
                    <div className="space-y-6">
                        {listItems.map((text, index) => (
                            <ListItem 
                                key={index} 
                                number={index + 1} 
                                text={text} 
                            />
                        ))}
                    </div>
                </div>

                <div className="md:w-1/2 flex items-center justify-center">
                    <Image
                        src="/pipeline/hallmarks.svg"
                        alt="Homeostasis Illustration"
                        width={500}
                        height={500}
                        className="w-full max-w-md"
                    />
                </div>
            </div>
        </section>
    )
}

export default Homeostasis
