import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';

export default function Home() {
    return (
        <div>
            <Hero />
            <div className="h-[100vh] bg-red-100"></div>
            <Team/>
            <Testimonials/>
            <Contact/>
        </div>
    );
}
