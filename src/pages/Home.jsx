import globalBG from "../assets/hero-bg.png";
import Countdown from "../components/Countdown";
import CustomButton from "../components/CustomButton";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import AOS from "aos";
import "aos/dist/aos.css";

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
            <div style={{backgroundImage: `url(${globalBG})`}} className='h-screen'>
                <div>
                    <Navbar/>
                </div>
                <div className='mx-[10vw]'>

                </div>
            </div>
                <div className='mx-[10vw] mt-[10vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    )
}

export default Home;