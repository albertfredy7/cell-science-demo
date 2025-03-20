import { VelocityScroll } from "@/components/ScrollVelocity";
import Image from "next/image";
import GradientText from "../../components/GradientText";

const ScrollVelocityChild = () => {
    return (
        <div className="w-full  py-10 ">

            <VelocityScroll
                default_velocity={3}
                className=" text-center text-xl font-light tracking-[-0.02em]  md:text-7xl md:leading-[5rem] pointer-events-auto">
                <span className="px-4 flex items-center gap-2 "><GradientText className="font-normal">Cell Science = Mito Science</GradientText> 
                    <Image src={'/pipeline/cell.svg'} alt="cell" width={300} height={300} className="w-12 h-12" />
                </span>
            </VelocityScroll>
        </div>
    );
}

export default ScrollVelocityChild;