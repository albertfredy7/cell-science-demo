import { TextAnimate } from "../../components/TextAnimate";

const Manifestations = () => {
    const manifestations = [
        { id: 1, title: "Neurological", description: "Seizures, dystonia, spasticity, intellectual disabilities" },
        { id: 2, title: "Renal", description: "Kidney disease" },
        { id: 3, title: "Cardiac", description: "Cardiac complications" },
        { id: 4, title: "Ophthalmologic", description: "Retinopathy" },
        { id: 5, title: "Hearing", description: "Hearing loss" },
        { id: 6, title: "Muscular", description: "Weakness, exercise intolerance" },
    ];

    return (
        <section className="container mx-auto px-4 py-12">
            <div className="flex flex-col w-full">
                <TextAnimate type="calmInUp">
                    <h2 className="text-2xl md:text-3xl font-normal mb-8 text-center">
                        CoQ10 Deficiency - Clinical Manifestations
                    </h2>
                </TextAnimate>
                <div className="flex flex-col items-center gap-10 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl">
                            {manifestations.map((item) => (
                                <div key={item.id} className="flex items-start space-x-4 border-gray-700 border-b py-2">
                                    <div className="text-5xl md:text-6xl font-normal text-gray-700">{item.id}</div>
                                    <TextAnimate type="calmInUp">
                                    <div>
                                        <h3 className="text-xl md:text-3xl font-normal">{item.title}</h3>
                                        <p className="text-sm md:text-base font-normal text-gray-600">{item.description}</p>
                                    </div>
                                    </TextAnimate>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Manifestations;