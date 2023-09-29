import CV from "../assets/tracks/cv.png";
import HC from "../assets/tracks/hc.png";
import TP from "../assets/tracks/tp.png";
import OI from "../assets/tracks/oi.png";
import React from "react";


const HomeTracks = () => {
    return(
        <>
            <div className='place-items-center'>
                <div className='justify-center my-[5vh]'>
                    <h1 className='lg:text-6xl text-4xl text-center text-pracula font-semibold'>TRACKS</h1>
                </div>
                <div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-16 mx-auto justify-center justify-items-center align-middle'>
                        <div>
                            <div className='items-center justify-around justify-items-center'>
                                <div className="w-auto justify-center items-center">
                                    <img className="rounded-t-lg m-auto pt-5 w-auto scale-75" src={CV} alt="" />
                                    <div className="grid p-5 align-middle place-items-center items-center justify-items-center">
                                        <h5 className="mb-2 lg:text-3xl md:text-3xl text-2xl text-center text-pracula font-bold lg:font-semibold">
                                            COMPUTER VISION
                                        </h5>
                                        <a rel="noopener noreferrer" href="/tracks#CV"
                                           className="px-5 py-2 mt-1 text-lg border-2 border-pracula hover:text-pracula rounded-lg hover:bg-opacity-0 bg-pracula text-dracxt">
                                            KNOW MORE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='items-center justify-around justify-items-center'>
                                <div className="w-auto justify-center items-center">
                                    <img className="rounded-t-lg m-auto pt-5 w-auto scale-75" src={HC} alt="" />
                                    <div className="grid p-5 align-middle place-items-center items-center justify-items-center">
                                        <h5 className="mb-2 lg:text-3xl md:text-3xl text-2xl text-center text-pracula font-bold lg:font-semibold">
                                            HEALTHCARE
                                        </h5>
                                        <a rel="noopener noreferrer" href="/tracks#HC"
                                           className="px-5 py-2 mt-1 text-lg border-2 border-pracula hover:text-pracula rounded-lg hover:bg-opacity-0 bg-pracula text-dracxt">
                                            KNOW MORE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='items-center justify-around justify-items-center'>
                                <div className="w-auto justify-center items-center">
                                    <img className="rounded-t-lg m-auto pt-5 w-auto scale-75" src={TP} alt="" />
                                    <div className="grid p-5 align-middle place-items-center items-center justify-items-center">
                                        <h5 className="mb-2 lg:text-3xl md:text-3xl text-2xl text-center text-pracula font-bold lg:font-semibold">
                                            TRANSPORTATION
                                        </h5>
                                        <a rel="noopener noreferrer" href="/tracks#TP"
                                           className="px-5 py-2 mt-1 text-lg border-2 border-pracula hover:text-pracula rounded-lg hover:bg-opacity-0 bg-pracula text-dracxt">
                                            KNOW MORE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-16 justify-center justify-items-center align-middle lg:grid-cols-3 mx-auto mt-16'>
                        <div className='lg:col-start-2'>
                            <div className='items-center justify-around justify-items-center'>
                                <div className="w-auto justify-center items-center">
                                    <img className="rounded-t-lg m-auto pt-5 w-auto scale-75" src={OI} alt="" />
                                    <div className="grid p-5 align-middle place-items-center items-center justify-items-center">
                                        <h5 className="mb-2 lg:text-3xl md:text-3xl text-2xl text-center text-pracula font-bold lg:font-semibold">
                                            OPEN INNOVATION
                                        </h5>
                                        <a rel="noopener noreferrer" href="/tracks#OI"
                                           className="px-5 py-2 mt-1 text-lg border-2 border-pracula hover:text-pracula rounded-lg hover:bg-opacity-0 bg-pracula text-dracxt">
                                            KNOW MORE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeTracks;