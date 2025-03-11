import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Pipeline from './sections/Pipeline';
import ScienceExplore from './sections/ScienceExplore';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';

export default function Home() {
    return (
        <>
            <Hero />
           
            <div className="h-[100vh] bg-red-100"></div>
            <ScienceExplore/>
            <Pipeline/>
            <Team/>
            <Testimonials/>
            <Blog/>
            <Contact/>
        </>
    );
}
