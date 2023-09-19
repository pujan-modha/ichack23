import Navbar from "../components/Navbar";
import TracksCard from "../components/TrackCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import globalBG from "../assets/hero-bg.png";
import React from "react";

function Tracks() {
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
  return (
    <>
        <div className='font-mono text-dracxt h-auto bg-dracula sticky top-0 z-20'>
            <div className='bg-pracula'>
                <Navbar />
            </div>
        </div>
        <div className='bg-dracula font-mono text-dracxt'>
            <div className='xl:mx-auto max-w-7xl lg:mx-[10vw] justify-items-center mx-[5vw]' data-aos="fade-up">
                <div className='justify-center'>
                    <h1 className='lg:text-6xl text-4xl text-center text-pracula font-semibold py-[2.5vh]'>TRACKS</h1>
                </div>
                <TracksCard />
                <Footer/>
            </div>
        </div>
    </>
  )
}

export default Tracks;
