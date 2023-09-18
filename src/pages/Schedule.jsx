import globalBG from "../assets/hero-bg.png";
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
                    <div className="container justify-center items-center lg:mx-[10vw] mx-[5vw] align-middle flex">
                        <div
                            className="flex flex-col md:grid grid-cols-9 mx-auto text-dracxt"
                        >
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents" >
                                <div
                                    className="bg-pracula bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md" data-aos="fade-right"
                                >
                                    <h3 className="font-semibold text-pracula text-xl mb-1">Title</h3>
                                    <p className="leading-tight text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                                        quaerat?
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                    <div className="h-full w-6 flex items-end justify-center">
                                        <div className="h-[50%] w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-10 backdrop-blur-3xl border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-10 backdrop-blur-3xl border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-pracula bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md" data-aos="fade-left"
                                >
                                    <h3 className="font-semibold text-pracula text-xl mb-1">Title</h3>
                                    <p className="leading-tight text-justify">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Vitae, facilis.
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-pracula bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md" data-aos="fade-right"
                                >
                                    <h3 className="font-semibold text-pracula text-xl mb-1">Title</h3>
                                    <p className="leading-tight text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                                        quaerat?
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-10 backdrop-blur-3xl border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-10 backdrop-blur-3xl border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-pracula bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md" data-aos="fade-left"
                                >
                                    <h3 className="font-semibold text-pracula text-xl mb-1">Title</h3>
                                    <p className="leading-tight text-justify">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Vitae, facilis.
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-pracula bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md" data-aos="fade-right"
                                >
                                    <h3 className="font-semibold text-pracula text-xl mb-1">Title</h3>
                                    <p className="leading-tight text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                                        quaerat?
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-10 backdrop-blur-3xl border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-10 backdrop-blur-3xl border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-pracula bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md" data-aos="fade-left"
                                >
                                    <h3 className="font-semibold text-pracula text-xl mb-1">Title</h3>
                                    <p className="leading-tight text-justify">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Vitae, facilis.
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-pracula bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md" data-aos="fade-right"
                                >
                                    <h3 className="font-semibold text-pracula text-xl mb-1">Title</h3>
                                    <p className="leading-tight text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                                        quaerat?
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-10 backdrop-blur-3xl border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-10 backdrop-blur-3xl border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-pracula bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md" data-aos="fade-left"
                                >
                                    <h3 className="font-semibold text-pracula text-xl mb-1">Title</h3>
                                    <p className="leading-tight text-justify">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Vitae, facilis.
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-pracula bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md" data-aos="fade-right"
                                >
                                    <h3 className="font-semibold text-pracula text-xl mb-1">Title</h3>
                                    <p className="leading-tight text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                                        quaerat?
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-10 backdrop-blur-3xl border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                    <div className="h-[50%] w-6 flex items-start justify-center">
                                        <div className="h-full w-1 bg-pracula pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pracula bg-opacity-10 backdrop-blur-3xl border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-pracula bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md" data-aos="fade-left"
                                >
                                    <h3 className="font-semibold text-pracula text-xl mb-1">Title</h3>
                                    <p className="leading-tight text-justify">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Vitae, facilis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-dracula text-dracxt font-mono'>
                    <div className='lg:mx-[10vw] mx-[5vw]'>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Schedule;