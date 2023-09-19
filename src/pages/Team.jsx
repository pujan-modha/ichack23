import React from 'react'
import TeamCard from "../components/TeamCard";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../components/Footer';


export const Team = () => {
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
        <div className='bg-dracula font-mono text-dracxt'>
            <div className='font-mono text-dracxt h-auto bg-dracula sticky top-0 z-20'>
                <div className='bg-pracula'>
                    <Navbar />
                </div>
            </div>
            <div className="xl:mx-auto max-w-7xl lg:mx-[10vw] justify-items-center mx-[5vw]" data-aos="fade-up">
                <div className='justify-center'>
                    <h1 className='lg:text-6xl text-4xl text-center text-pracula font-semibold py-[2.5vh]'>TEAM</h1>
                </div>
                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <TeamCard/>
                    <TeamCard/>
                </div>
            </div>
            <div className='xl:mx-auto max-w-7xl lg:mx-[10vw] justify-items-center mx-[5vw]'>
                <Footer/>
            </div>
        </div>
    );
};

export default Team;
