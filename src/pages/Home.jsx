import globalBG from "../assets/hero-bg.png";
import Countdown from "../components/Countdown";
import CustomButton from "../components/CustomButton";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "../components/Contact";

const Home = () => {
    AOS.init({
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 200,
        duration: 800,
        easing: 'ease',
        anchorPlacement: 'top-bottom',

    });
    return(
        <>
            <div className='font-mono text-dracxt bg-dracula'>
            <div style={{backgroundImage: `url(${globalBG})`}} className='h-screen bg-fixed bg-cover bg-no-repeat'>
                <div className='bg-pracula bg-opacity-25 backdrop-blur-md sticky top-0 z-20'>
                    <Navbar/>
                </div>
                <div className='mx-[10vw]'>
                    <Hero />
                </div>
            </div>
                <div className='mx-[10vw] mt-[10vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'>
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                </div>
                <div className='mx-[10vw] mt-8'>
                    <Contact/>
                </div>
            </div>
        </>
    )
}

export default Home;