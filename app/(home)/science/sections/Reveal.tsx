import TextReveal from "@/components/TextReveal";
import Image from "next/image";

const Reveal = () => {
    return (
        <section className="relative bg-white overflow-hidden  flex flex-col gap-8 items-center justify-center px-4 py-16">
            <div className="w-full  mt-8 mx-auto max-w-4xl">
                <TextReveal
                    className="text-center text-3xl md:text-4xl lg:text-4xl font-light "
                    theme="light"
                >
                    Cellscience Biotech&apos;s scientific advisor has discovered the mechanism in which Mitochondria protects the cells from lethal form of cell death by trafficking Coq10 to cell membranes. Dr Soni Deshwal, scientist at the Max Planck Institute for Biology of Aging has discovered the enzyme called STARD7, helps transport the coenzyme.
                </TextReveal>
            </div>
            <div className="max-w-3xl mx-auto "><Image src={'/science/diagram.svg'} alt="diagram" className="object-contain" width={1000} height={1000}/></div>
        </section>
    );
}

export default Reveal;