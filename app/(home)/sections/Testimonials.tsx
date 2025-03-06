'use client';

import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

interface Testimonial {
    id: number;
    quote: string;
    author: string;
    title: string;
    avatar: string;
}


// 350 charecters min and max

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "Integrating CellScience's protocols has transformed my preventive medicine practice. Data-driven insights into cellular health markers enable precise interventions that enhance well-being. Our results show remarkable improvements in cellular regeneration and vitality.",
        author: "Dr. Casey Means, MD",
        title: "Physician, author & health tech entrepreneur",
        avatar: "/testimonials/doctor1.png"
    },
    {
        id: 2,
        quote: "The cellular regeneration metrics observed in cardiac patients through CellScience's methodology are unprecedented. This approach has redefined cardiovascular care, yielding significant improvements in heart function and reducing inflammation through targeted molecular analysis.",
        author: "Dr. John Anderson",
        title: "Cardiologist & Researcher",
        avatar: "/testimonials/doctor2.jpg"
    },
    {
        id: 3,
        quote: "As a neurologist, I'm amazed by the cognitive gains in patients using CellScience's protocols. We've documented notable improvements in brain plasticity, processing speed, and memory. This data-driven approach is reshaping neurological care",
        author: "Dr. Sarah Chen",
        title: "Neurologist & Health Advocate",
        avatar: "/testimonials/doctor3.jpg"
    },
    {
        id: 4,
        quote: "CellScience has transformed athletic performance optimization. Our athletes show 40% faster recovery times and enhanced metrics. The integration of biometric data and cellular protocols has redefined peak training methodologies, advancing sports medicine significantly.",
        author: "Dr. Michael Roberts",
        title: "Sports Medicine Specialist",
        avatar: "/testimonials/doctor2.jpg"
    },
    {
        id: 5,
        quote: "Implementing CellScience's protocols in my practice has led to remarkable improvements across diverse health conditions. The fusion of conventional and cellular therapies provides measurable benefits, enhancing patient health and vitality consistently.",
        author: "Dr. Emily Thompson",
        title: "Integrative Medicine Expert",
        avatar: "/testimonials/doctor1.png"
    },
    {
        id: 6,
        quote: "The precision of CellScience's molecular analysis has revolutionized our approach to personalized medicine. Patient outcomes have improved dramatically with targeted interventions based on cellular biomarkers.",
        author: "Dr. Rachel Martinez",
        title: "Precision Medicine Specialist",
        avatar: "/testimonials/doctor2.jpg"
    },
    {
        id: 7,
        quote: "As an oncologist, I've witnessed remarkable improvements in patient recovery using CellScience's protocols. The cellular regeneration metrics have provided invaluable insights for treatment optimization.",
        author: "Dr. David Wilson",
        title: "Oncologist & Research Director",
        avatar: "/testimonials/doctor1.png"
    },
    {
        id: 8,
        quote: "CellScience's innovative approach to cellular health has transformed our understanding of aging. The comprehensive analysis of biomarkers has enabled us to develop more effective anti-aging protocols.",
        author: "Dr. Lisa Parker",
        title: "Anti-Aging Specialist",
        avatar: "/testimonials/doctor2.jpg"
    },
    {
        id: 9,
        quote: "The integration of CellScience's protocols in our clinic has led to breakthrough results in metabolic health. Patients show significant improvements in cellular energy production and overall vitality.",
        author: "Dr. James Cooper",
        title: "Metabolic Health Expert",
        avatar: "/testimonials/doctor1.png"
    },
    {
        id: 10,
        quote: "CellScience's methodology has revolutionized our approach to autoimmune conditions. The detailed cellular analysis allows for precise intervention strategies that significantly improve patient outcomes.",
        author: "Dr. Amanda Foster",
        title: "Immunology Specialist",
        avatar: "/testimonials/doctor2.jpg"
    },
];





export default function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        skipSnaps: false,
        dragFree:false,
        duration: 0
    });
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleAvatars, setVisibleAvatars] = useState<number[]>([0, 1, 2, 3, 4]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCurrentSlide(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', () => {
            const currentIndex = emblaApi.selectedScrollSnap();
            setCurrentSlide(currentIndex);
            
            // Update visible avatars in a circular queue
            if (currentIndex > 4) {
                const newVisibleAvatars = [
                    currentIndex - 4,
                    currentIndex - 3,
                    currentIndex - 2,
                    currentIndex - 1,
                    currentIndex
                ].map(index => index % testimonials.length);
                setVisibleAvatars(newVisibleAvatars);
            } else {
                setVisibleAvatars([0, 1, 2, 3, 4]);
            }
        });
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section className="py-12 sm:py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-8 sm:mb-12 md:mb-12 text-center md:text-left">
                    Find out why the experts trust CellScience
                </h2>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_100%] min-w-0 relative px-2 sm:px-4"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center min-h-[500px] md:min-h-[600px]">
                                        <div className="relative aspect-[4/3] sm:aspect-square w-full h-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px] order-1 md:order-none">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.author}
                                                fill
                                                className="object-cover object-top rounded-lg"
                                                priority
                                            />
                                        </div>
                                        <div className="flex flex-col justify-between h-full py-4 sm:py-6 md:py-10 order-2 md:order-none">
                                            <div className="hidden md:flex items-center justify-center md:justify-start flex-wrap p-2 sm:p-4 gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                                                {visibleAvatars.map((avatarIndex) => {
                                                    const testimonial = testimonials[avatarIndex];
                                                    return (
                                                        <button
                                                            key={testimonial.id}
                                                            onClick={() => emblaApi?.scrollTo(avatarIndex)}
                                                            className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-110 ${
                                                                currentSlide === avatarIndex
                                                                    ? 'opacity-100 ring-2 ring-offset-2 ring-gray-500 scale-110'
                                                                    : 'opacity-50 hover:opacity-75'
                                                            }`}
                                                        >
                                                            <Image
                                                                src={testimonial.avatar}
                                                                alt={testimonial.author}
                                                                fill
                                                                className="object-cover transition-transform duration-300"
                                                                priority
                                                            />
                                                        </button>
                                                    );
                                                })}
                                            </div>

                                            <div className="flex-grow overflow-hidden px-2 sm:px-0">
                                                <p className="text-xl sm:text-2xl md:text-2xl text-gray-700 font-light mb-4 sm:mb-6 line-clamp-7 overflow-hidden">
                                                    &quot; {testimonial.quote}&quot;
                                                </p>
                                                <div className='flex gap-0 flex-col mt-2 sm:mt-4'>
                                                    <p className="font-normal text-base sm:text-lg">{testimonial.author}</p>
                                                    <p className="text-gray-600 text-sm sm:text-base">{testimonial.title}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-start gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8">
                                                <Button
                                                    onClick={scrollPrev}
                                                    className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-transparent border border-gray-400 text-black flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white"
                                                >
                                                    <span className="text-xl sm:text-2xl"><ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" /></span>
                                                </Button>
                                                <span className="font-medium text-gray-500 w-12 sm:w-16 text-center text-sm sm:text-base">
                                                    {String(currentSlide + 1).padStart(2, '0')}/
                                                    {String(testimonials.length).padStart(2, '0')}
                                                </span>
                                                <Button
                                                    onClick={scrollNext}
                                                    className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-transparent border border-gray-400 text-black flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white"
                                                >
                                                    <span className="text-xl sm:text-2xl"><ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" /></span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
