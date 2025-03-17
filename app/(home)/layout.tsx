import Footer from './components/Footer';
import Header from './components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            
            
            
            <div className="flex flex-col ">
                <Header />
                <div className="flex-grow">
                    {/* Your main content */}
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}
