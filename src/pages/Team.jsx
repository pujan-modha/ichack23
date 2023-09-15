import React from 'react'
import TeamCard from "../components/TeamCard";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './Footer';


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
        <div className='bg-dracula text-dracxt'>
            <Navbar />
            <div className="flex flex-col items-center justify-center" data-aos="fade-up">
                <h1 className="text-6xl text-center font-[#5A6473] font-bold mb-[5vh]">
                    TEAM
                </h1>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4" data-aos="fade-up">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <TeamCard/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Team;
