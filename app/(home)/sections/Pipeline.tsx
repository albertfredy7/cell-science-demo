import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"

export default function Pipeline() {
    return (
        <section className="container mx-auto w-full py-12   md:py-16 lg:py-20">
            <div className=" px-4 md:px-6">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <p className="text-sm font-medium uppercase tracking-wider text-gray-500">OUR PIPELINE</p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
                                Advancing Breakthrough Therapies
                            </h2>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-normal">First-in-Class Medicines Targeting Ageing</h3>
                            <p className="text-gray-700 font-normal">
                                All our medicines are targeting core mechanisms of ageing, primarily first-in-class with a near-term
                                clinical indication for therapeutic development
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-normal text-gray-700">AI-enabled R&D</h3>
                            <p className="text-gray-600 font-normal">
                                We integrate leading AI & Data science tools to design novel compound, increase drug success rates and
                                compress development times
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-normal text-gray-700">Adaptive Clinical Trials</h3>
                            <p className="text-gray-600 font-normal">
                                We ensure our clinical studies have adaptive trial design, using patient stratification, biomarkers and
                                AI-enabled real-time analysis to provide meaningful efficacy readouts at Phase 1
                            </p>
                        </div>

                        <div>
                            <button className="inline-flex items-center px-6 py-3 bg-black text-white rounded-md font-medium">
                                Our Pipeline
                                <ArrowRightIcon className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">
                            <Image
                                src="/hallmarks.png"
                                alt="Hallmarks of aging circular diagram showing integrative, primary, and antagonistic mechanisms"
                                width={600}
                                height={600}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

