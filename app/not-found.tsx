import Link from 'next/link';
import Header from './(home)/components/Header';

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow flex flex-col items-center justify-center  p-8">
                <h1 className="text-6xl font-bold text-black mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-black mb-6">Page Not Found</h2>
                <p className="text-xl text-black mb-8 text-center max-w-md">
                    We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t exist yet.
                </p>
                <Link href="/" className="inline-block bg-black text-white px-6 py-3 rounded-lg transition-colors duration-200">
                    Return Home
                </Link>
            </div>
        </div>
    );
}
