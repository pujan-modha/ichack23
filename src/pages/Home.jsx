import globalBG from "../assets/hero-bg.png";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import React from "react";

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
            <div className='font-mono text-dracxt h-auto sticky top-0 z-20 bg-fixed bg-cover bg-no-repeat' style={{backgroundImage: `url(${globalBG})`}}>
                <div className=' bg-pracula bg-opacity-50 backdrop-blur-md'>
                    <Navbar />
                </div>
            </div>
            <div className='font-mono text-dracxt bg-dracula'>
            <div style={{backgroundImage: `url(${globalBG})`}} className='h-screen bg-fixed bg-cover bg-no-repeat'>
                {/*<div className='bg-pracula bg-opacity-25 backdrop-blur-md sticky top-0 z-20'>*/}
                {/*    <Navbar/>*/}
                {/*</div>*/}
                <div className='lg:mx-[10vw] mx-[5vw] pt-[5vh] lg:pt-[10vh]'>
                    <Hero />
                </div>
            </div>
                <div className='justify-center mt-[5vh]' >
                    <h1 className='lg:text-6xl text-4xl text-center text-pracula font-bold'>TRACKS</h1>
                </div>
                <div className='lg:mx-[10vw] mx-[5vw] mt-[5vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-around'>
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                </div>
                <div className='lg:mx-[10vw] mx-[5vw] mt-[5vh]'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home;