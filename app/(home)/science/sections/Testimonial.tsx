import Image from "next/image";

const Testimonial = () => {
    return (
        <section className="max-w-6xl mx-auto py-12 md:py-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="bg-gray-50 rounded-lg p-6 md:p-10 max-w-5xl mx-auto">
                    <blockquote className="text-gray-800  text-2xl md:text-2xl lg:text-2xl font-light  mb-8">
                    &quot;The mitochondria actively transport coenzyme Q to the cell surface to protect cells from cell death. It
                        is as if the mitochondria deliver band-aids to the surface to protect the cell, This again shows that
                        mitochondria are not only important as an energy supplier for our cells, but also play crucial regulatory
                        roles.&quot;
                    </blockquote>

                    <div className="flex items-center">
                        <div className="mr-4 flex-shrink-0 rounded-full bg-red-100">
                            <Image
                                src="/placeholder.svg?height=80&width=80"
                                alt="Dr. Soni Deshwal"
                                width={80}
                                height={80}
                                className="rounded-full"
                            />
                        </div>
                        <div>
                            <div className="font-medium text-gray-900 text-lg">Dr. Soni Deshwal</div>
                            <div className="text-gray-700 text-sm">
                                ER Group leader at Helmholtz-Munich
                                <br />
                                Max Planck Institute for Biology of Ageing
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;