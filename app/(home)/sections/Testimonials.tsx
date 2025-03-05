'use client';

import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

interface Testimonial {
    id: number;
    quote: string;
    author: string;
    title: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "It has only recently occurred to me that after finishing 18 holes of golf, my endurance and recovery-time, are now akin to that of a 40 year old... I could not be happier!",
        author: "Dr. Casey Means, MD",
        title: "Physician, author & health tech entrepreneur",
        avatar: "/testimonials/doctor1.png"
    },
    {
        id: 2,
        quote: "Sample testimonial 2",
        author: "Dr. John Anderson",
        title: "Cardiologist & Researcher",
        avatar: "/testimonials/doctor2.jpg"
    },
    {
        id: 3,
        quote: "Sample testimonial 3",
        author: "Dr. Sarah Chen",
        title: "Neurologist & Health Advocate",
        avatar: "/testimonials/doctor1.png"
    },
    {
        id: 4,
        quote: "Sample testimonial 4",
        author: "Dr. Michael Roberts",
        title: "Sports Medicine Specialist",
        avatar: "/testimonials/doctor1.png"
    },
    {
        id: 5,
        quote: "Sample testimonial 5",
        author: "Dr. Emily Thompson",
        title: "Integrative Medicine Expert",
        avatar: "/testimonials/doctor1.png"
    }
];

export default function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [currentSlide, setCurrentSlide] = useState(0);

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
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-normal mb-16">
                    Find out why the experts trust CellScience
                </h2>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className="flex-[0_0_100%] min-w-0 relative px-4"
                                >
                                    <div className="grid md:grid-cols-2 gap-12 items-center">
                                        <div className="relative aspect-[3/4] md:aspect-square">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.author}
                                                fill
                                                className="object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <div className="flex items-center gap-3 mb-8">
                                                {testimonials.map((t, idx) => (
                                                    <button
                                                        key={t.id}
                                                        onClick={() => emblaApi?.scrollTo(idx)}
                                                        className={`relative w-14 h-14 rounded-full overflow-hidden transition-opacity ${currentSlide === idx ? 'opacity-100 ring-2 ring-offset-2 ring-gray-500' : 'opacity-50'
                                                            }`}
                                                    >
                                                        <Image
                                                            src={t.avatar}
                                                            alt={t.author}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </button>
                                                ))}
                                            </div>



                                            <div>
                                                <p className='text-3xl text-gray-700 font-light'> {testimonial.quote}</p>
                                                <p className="font-semibold text-lg" key={index}>{testimonial.author}</p>
                                                <p className="text-gray-600">{testimonial.title}</p>
                                            </div>
                                            <div className="flex items-center gap-4 mt-8">
                                                <Button
                                                    onClick={scrollPrev}
                                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                                >
                                                    ←
                                                </Button>
                                                <span className="font-medium">
                                                    {String(currentSlide + 1).padStart(2, '0')}/
                                                    {String(testimonials.length).padStart(2, '0')}
                                                </span>
                                                <button
                                                    onClick={scrollNext}
                                                    className="text-black hover:text-gray-800 transition-colors"
                                                >
                                                    →
                                                </button>
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
