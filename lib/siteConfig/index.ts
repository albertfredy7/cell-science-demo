

export type siteConfigType = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links?: {
        twitter: string;
        facebook: string;
        linkdein: string;
        instagram: string;
    };
    keywords: string[];
    creator: string;
    contact: {
        email: string;
    };
};

export const siteConfig: siteConfigType = {
    name: 'CellScience Biotech',
    description:
        'CellScience Biotech develops new and safer treatment options for women and couples struggling with conception, focusing on cellular vitality and the "back to Cell intelligence" approach.',
    url: 'https://www.cellsciencebiotech.com',
    ogImage: '/ogImage.png',
    keywords: [
        'CellScience Biotech',
        'biotechnology',
        'fertility treatments',
        'conception challenges',
        'cellular vitality',
        'reproductive medicine',
        'cell therapy',
        'mitochondrial research',
        'CoQ10',
        'AI in healthcare',
        'clinical trials',
        'cell science',
        'cellscience biotech pvt ltd'
    ],
    creator: 'cellsciencebiotech.com',
    contact: {
        email: 'ani@cellsciencebiotech.com',
    },
};
