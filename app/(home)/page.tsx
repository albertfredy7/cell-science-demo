import About from './sections/About';
import About2 from './sections/About2';
import About3 from './sections/About3';
import About4 from './sections/About4';
import Contact from './sections/Contact';
import Hallmarks from './sections/Hallmarks';
import Hero from './sections/Hero';
import Mitochondria from './sections/Mitochondria';
import Pipeline from './sections/Pipeline';
import ScienceExplore from './sections/ScienceExplore';
import Team from './sections/Team';

export default function Home() {
    return (
        <>
            <Hero />
            <About/>
           <About2/>
           <About3/>
           <About4/>
           <Mitochondria/>
            <ScienceExplore/>
            <Hallmarks/>
            <Pipeline/>
            <Team/>
            {/* currently hiding, will add after implementation */}
            {/* <Testimonials/>
            <Blog/> */}
            <Contact/>
        </>
    );
}
