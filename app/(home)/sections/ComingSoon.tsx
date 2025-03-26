import Link from 'next/link';

const ComingSoon = () => {
    return (
        <section className="min-h-screen w-full flex items-center justify-center px-4 py-12">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                    Coming Soon
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    We&apos;re working hard to bring you something amazing. Stay tuned for updates!
                </p>
                <div>
                    <Link href="/" className="inline-block bg-black text-white px-6 py-3 rounded-lg transition-colors duration-200">
                       Return Home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ComingSoon;
