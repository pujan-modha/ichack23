import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Schedule = () => {
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
            <div className='bg-dracula overflow-hidden'>
                <div className='font-mono text-dracxt h-auto bg-dracula sticky top-0 z-20'>
                    <div className='bg-pracula'>
                        <Navbar />
                    </div>
                </div>
                <div className='justify-center pt-[2.5vh]' data-aos="fade-up">
                    <h1 className='lg:text-6xl text-4xl font-mono text-center text-pracula font-semibold py-[2.5vh]'>SCHEDULE</h1>
                </div>
                <div className='bg-dracula text-dracxt font-mono justify-center items-center flex' data-aos="fade-up">
                    {/*component*/}
                    <div className="container justify-center items-center xl:mx-auto max-w-7xl lg:mx-[10vw] mx-[5vw] justify-items-center align-middle flex">
                        <div
                            className="flex flex-col md:grid grid-cols-9 mx-auto text-dracxt"
                        >
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents" >
                                <div
                                    className="bg-pracula md:text-right md:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md" data-aos="fade-right"
                                >
                                    <h3 className="font-semibold text-pracula text-4xl mb-1">DAY 1</h3>
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">8:00 - 9:30</h3>
                                    <p className="leading-tight md:text-right">
                                        Breakfast
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-end justify-center">
                                        <div className="h-[50%] w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-pracula w-full md:w-[70%] bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md" data-aos="fade-left"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">9:30 - 10:30</h3>
                                    <p className="leading-tight">
                                        Registration and Verification
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-pracula md:text-right md:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md" data-aos="fade-right"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">10:30 - 11:30</h3>
                                    <p className="leading-tight md:text-right">
                                        Inauguration and Instructions
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-pracula w-full md:w-[70%] bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md" data-aos="fade-left"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">11:30 - 12:00</h3>
                                    <p className="leading-tight">
                                        Break
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-pracula md:text-right md:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md" data-aos="fade-right"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">12:00 - 12:30</h3>
                                    <p className="leading-tight md:text-right">
                                        Mentor allocation and talk with mentor
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-pracula w-full md:w-[70%] bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md" data-aos="fade-left"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">12:30</h3>
                                    <p className="leading-tight">
                                        Hackathon starts
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-pracula md:text-right md:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md" data-aos="fade-right"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">13:30 - 14:30</h3>
                                    <p className="leading-tight md:text-right">
                                        Lunch break
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-pracula w-full md:w-[70%] bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md" data-aos="fade-left"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">14:30 - 16:30</h3>
                                    <p className="leading-tight">
                                        Work on problem statement(Resume)
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-pracula md:text-right md:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md" data-aos="fade-right"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">16:30 - 17:30</h3>
                                    <p className="leading-tight md:text-right">
                                        Mentoring Session 1
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-pracula w-full md:w-[70%] bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md" data-aos="fade-left"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">17:30 - 18:00</h3>
                                    <p className="leading-tight">
                                        Evening snacks
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-pracula md:text-right md:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md" data-aos="fade-right"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">18:00 - 18:30</h3>
                                    <p className="leading-tight md:text-right">
                                        Icebreaker
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-pracula w-full md:w-[70%] bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md" data-aos="fade-left"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">18:30 - 20:30</h3>
                                    <p className="leading-tight">
                                        Work on problem statement(Resume)
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-pracula md:text-right md:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md" data-aos="fade-right"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">20:30 - 21:30</h3>
                                    <p className="leading-tight md:text-right">
                                        Dinner break
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-pracula w-full md:w-[70%] bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md" data-aos="fade-left"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">21:30 - 23:30</h3>
                                    <p className="leading-tight">
                                        Work on problem statement(Resume)
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-pracula md:text-right md:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md" data-aos="fade-right"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">23:30 - 00:00</h3>
                                    <p className="leading-tight md:text-right">
                                        Icebreaker
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-pracula w-full md:w-[70%] bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md" data-aos="fade-left"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">00:00</h3>
                                    <p className="leading-tight">
                                        End of Day 1
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents" >
                                <div
                                    className="bg-pracula md:text-right md:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md" data-aos="fade-right"
                                >
                                    <h3 className="font-semibold text-pracula text-4xl mb-1">DAY 2</h3>
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">00:00 - 7:00</h3>
                                    <p className="leading-tight md:text-right">
                                        Sleep / Work
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-end justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-pracula w-full md:w-[70%] bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md" data-aos="fade-left"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">07:00 - 09:00</h3>
                                    <p className="leading-tight">
                                        Breakfast
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents" >
                                <div
                                    className="bg-pracula md:text-right md:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md" data-aos="fade-right"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">09:00 - 10:00</h3>
                                    <p className="leading-tight md:text-right">
                                        Mentoring Session 2
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-end justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-pracula w-full md:w-[70%] bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md" data-aos="fade-left"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">10:00 - 13:00</h3>
                                    <p className="leading-tight">
                                        Work on problem statement(Resume)
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents" >
                                <div
                                    className="bg-pracula md:text-right md:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md" data-aos="fade-right"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">13:00 - 14:00</h3>
                                    <p className="leading-tight md:text-right">
                                        Lunch break
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-end justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-pracula w-full md:w-[70%] bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md" data-aos="fade-left"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">14:00 - 17:00</h3>
                                    <p className="leading-tight">
                                        Work on problem statement(Resume)
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents" >
                                <div
                                    className="bg-pracula md:text-right md:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md" data-aos="fade-right"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">17:00</h3>
                                    <p className="leading-tight md:text-right">
                                        Final Submission
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-end justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-pracula w-full md:w-[70%] bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md" data-aos="fade-left"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">17:00 - 18:00</h3>
                                    <p className="leading-tight">
                                        Evening snacks
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents" >
                                <div
                                    className="bg-pracula md:text-right md:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md" data-aos="fade-right"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">18:00 - 20:30</h3>
                                    <p className="leading-tight md:text-right">
                                        Final Pitching
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-end justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-pracula w-full md:w-[70%] bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md" data-aos="fade-left"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">20:30 - 21:30</h3>
                                    <p className="leading-tight">
                                        Dinner break
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents" >
                                <div
                                    className="bg-pracula md:text-right md:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md" data-aos="fade-right"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">21:30 - 00:00</h3>
                                    <p className="leading-tight md:text-right">
                                        Results and Closing Ceremony
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-end justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                                    <div className="h-[50%] w-6 flex items-start justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-pracula w-full md:w-[70%] bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md" data-aos="fade-left"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">00:00</h3>
                                    <p className="leading-tight">
                                        End of day 2 and end of Hackathon
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-dracula text-dracxt font-mono'>
                    <div className='xl:mx-auto max-w-7xl lg:mx-[10vw] justify-items-center mx-[5vw]'>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Schedule;