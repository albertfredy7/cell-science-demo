import TextReveal from "@/components/TextReveal";

const About = () => {
    return (
        <section className="relative bg-white overflow-hidden  flex flex-col gap-8 items-center justify-center px-4 py-24">
            <div className="w-full  mt-8 mx-auto max-w-5xl">
                <TextReveal
                    className="text-start text-3xl md:text-4xl lg:text-4xl font-light "
                    theme="light"
                >At Cellscience Biotech, we use integrated biology to restore the mitochondrial cellular energy metabolism. We are discovering micro nutrients within the cell to leverage corner stone of evolution of life : mitochondria</TextReveal>
            </div>
        </section>
    );
}

export default About;