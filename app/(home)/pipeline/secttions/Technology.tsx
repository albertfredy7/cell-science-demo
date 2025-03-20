import GradientText from "../../components/GradientText";
import { TextAnimate } from "../../components/TextAnimate";

const Technology = () => {
    return (
        <section className="h-auto md:h-[60vh] relative overflow-hidden flex items-center justify-center p-4">
            <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
                <TextAnimate type="shiftInUp"><h2 className="text-3xl md:text-5xl xl:text-4xl font-normal w-full text-center md:text-left">Innovative CoQ10 Absorption Technology</h2></TextAnimate>
                <div className="flex flex-col md:flex-row justify-between items-center pt-8">
                    <div className="w-full md:w-1/2">
                       <TextAnimate type="calmInUp" delay={0.3}>
                            <p className="text-xl md:text-3xl xl:text-2xl font-light max-w-lg pt-4 text-center md:text-left">
                                CellScience technological collaboration with biotech leaders and USFDA-approved manufacturing facility created a unique technology to bypass the current limitation of CoQ10 absorption and offers a patented technology with 4X absorption.
                            </p>
                       </TextAnimate>
                    </div>
                    <div className="hidden md:flex flex-col gap-0 justify-center items-center h-full w-full md:w-auto mt-8 md:mt-0">
                        <TextAnimate type="shiftInUp" delay={0.5}>
                            <GradientText>
                                <span className="text-[100px] md:text-[250px] xl:text-[200px] font-normal leading-none">4X</span>
                            </GradientText>
                        </TextAnimate>
                        <p className="text-xl md:text-2xl leading-none -translate-y-4 md:-translate-y-8 w-full text-center md:text-end">Absorption</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Technology;