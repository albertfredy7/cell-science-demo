import Image from 'next/image';
import React from 'react';


// Type definitions
interface Header {
    title: string;
    description: string;
}

interface Topic {
    title: string;
    colorClass: string;
    icon: string;
}

interface SectionProps {
    bgClass: string;
    header: Header;
    topics: Topic[];
}

// Reusable components
const SectionHeader: React.FC<Header> = ({ title, description }) => (
    <div>
        <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mb-6">{title}</h1>
        <p className="text-base md:text-lg lg:text-xl max-w-xl md:max-w-2xl leading-relaxed font-light">
            {description}
        </p>
    </div>
);

const TopicItem: React.FC<Topic> = ({ icon, title, colorClass }) => (
    <div className="flex items-center">
        <div className={`${colorClass} rounded-full w-16 h-16 flex items-center justify-center`}>
            <Image src={icon} alt={title}  width={500} height={500} className='w-16 h-16' quality={100} />
        </div>
        <div className="ml-4">
            <h3 className="font-medium text-lg">{title}</h3>
            <a href="#" className="text-sm flex items-center">
                Learn more
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 ml-1"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                        clipRule="evenodd"
                    />
                </svg>
            </a>
        </div>
    </div>
);

const Section: React.FC<SectionProps> = ({ bgClass, header, topics }) => (
    <div className={`sticky top-12 lg:p-0 lg:top-0 h-screen overflow-hidden flex ${bgClass}`}>
        <div className="container mx-auto px-4 md:px-6 md:py-20 flex flex-col md:flex-row items-center justify-around">
            <SectionHeader title={header.title} description={header.description} />
            <div className="md:mt-0 space-y-8 md:ml-8">
                {topics.map((topic, index) => (
                    <TopicItem key={index} {...topic} />
                ))}
            </div>
        </div>
    </div>
);

const Hallmarks: React.FC = () => {
    const sections: SectionProps[] = [
        {
            bgClass: '',
            header: {
                title: 'Molecular alterations',
                description: 'Our cells consist of DNA, RNA, proteins, fats, and other small molecules. Some of these molecules are long-lived and become damaged over time, impeding their function; others are over-produced as we age, building up and forming aggregates as the ability of our cells to recycle these molecules declines.'
            },
            topics: [
                {
                    title: 'Short telomeres',
                    colorClass: 'bg-green-400',
                    icon: '/hallmarks/short-telomeres.svg'
                },
                {
                    title: 'DNA damage',
                    colorClass: 'bg-green-400',
                    icon: '/hallmarks/dna-damge.svg'
                },
                {
                    title: 'Disrupted proteostasis',
                    colorClass: 'bg-green-400',
                    icon: '/hallmarks/disrupted-proteostasis.svg'
                },
                {
                    title: 'Loss of epigenetic information',
                    colorClass: 'bg-green-400',
                    icon: '/hallmarks/loss-of-epigentic-information.svg'
                }
            ]
        },
        {
            bgClass: 'bg-slate-200',
            header: {
                title: 'Cellular dysfunction',
                description: 'Our organs and tissues consist of trillions of cells, each of which has a life of its own. Cells must remain healthy and functional to contribute to the overarching function of a tissue. However, as we age, whole networks of cellular processes can stop functioning, leading to a decline in organ function and health.'
            },
            topics: [
                {
                    title: 'Loss of tissue stem cells',
                    colorClass: 'bg-blue-400',
                    icon: '/hallmarks/loss-of-tissue-stem-cells.svg'
                },
                {
                    title: 'Overactive cell growth signals',
                    colorClass: 'bg-blue-400',
                    icon: '/hallmarks/overactive-cell-growth-signals.svg'
                },
                {
                    title: 'Buildup of damaged cells',
                    colorClass: 'bg-blue-400',
                    icon: '/hallmarks/buildup-of-damaged-cells.svg'
                },
                {
                    title: 'Mitochondrial damage',
                    colorClass: 'bg-blue-400',
                    icon: '/hallmarks/mitochondrial-damage.svg'
                }
            ]
        },
        {
            bgClass: 'bg-white',
            header: {
                title: 'Tissue degeneration',
                description: 'The ultimate job of our cells and molecules is to uphold the function and integrity of our tissues, allowing for a balanced healthy state called homeostasis. These categories of age-related changes can negatively impact entire tissues from achieving this balance.'
            },
            topics: [
                {
                    title: 'Buildup of extracellular aggregates',
                    colorClass: 'bg-pink-400',
                    icon: '/hallmarks/Buildup of extracellular aggregates.svg'
                },
                {
                    title: 'Non-regenerating adult tissues',
                    colorClass: 'bg-pink-400',
                    icon: '/hallmarks/Non-regenerating adult tissues.svg'
                },
                {
                    title: 'Stiffening of extracellular matrix',
                    colorClass: 'bg-pink-400',
                    icon: '/hallmarks/Stiffening of extracellular matrix.svg'
                },
                {
                    title: 'Chronic inflammation',
                    colorClass: 'bg-pink-400',
                    icon: '/hallmarks/Chronic inflammation.svg'
                },
                {
                    title: 'Changes in endocrine signaling',
                    colorClass: 'bg-pink-400',
                    icon: '/hallmarks/Changes in endocrine signaling.svg'
                }
            ]
        }
    ];

    return (
        <div className="container mx-auto">
            {sections.map((section, index) => (
                <Section key={index} {...section} />
            ))}
        </div>
    );
};

export default Hallmarks;