import AIC from "../assets/sponsors/AIC.png";
import CT from "../assets/sponsors/CT.png";
import ECELL from "../assets/sponsors/ECELL.png";
import PC from "../assets/sponsors/PC.png";
import TV from "../assets/sponsors/TV.png";
import MUJ from "../assets/mujlogo.png";
import React from "react";


const SponsorsHome = () => {
    return(
        <>
            <div className='place-items-center'>
                <div className='justify-center my-[5vh]'>
                    <h1 className='lg:text-6xl text-4xl text-center text-pracula font-semibold'>OUR SPONSORS</h1>
                </div>
                <div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-16 mx-auto justify-center justify-items-center align-middle'>
                        <div>
                            <div className='items-center justify-around justify-items-center'>
                                <div className="w-auto justify-center items-center">
                                    <img className="rounded-t-lg m-auto pt-5 w-auto" src={TV} alt="" />
                                    <div className="grid p-5 align-middle place-items-center items-center justify-items-center">
                                        <h5 className="mb-2 lg:text-3xl md:text-3xl text-2xl text-center text-pracula font-bold lg:font-semibold">
                                            Media Partner
                                        </h5>
                                        <a rel="noopener noreferrer" href="/sponsors#TV"
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
                                    <img className="rounded-t-lg m-auto pt-5 w-auto" src={CT} alt="" />
                                    <div className="grid p-5 align-middle place-items-center items-center justify-items-center">
                                        <h5 className="mb-2 lg:text-3xl md:text-3xl text-2xl text-center text-pracula font-bold lg:font-semibold">
                                            Community Partner
                                        </h5>
                                        <a rel="noopener noreferrer" href="/sponsors#CT"
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
                                    <img className="rounded-t-lg m-auto pt-5 w-auto" src={PC} alt="" />
                                    <div className="grid p-5 align-middle place-items-center items-center justify-items-center">
                                        <h5 className="mb-2 lg:text-3xl md:text-3xl text-2xl text-center text-pracula font-bold lg:font-semibold">
                                            Track Sponsor
                                        </h5>
                                        <a rel="noopener noreferrer" href="/sponsors#PC"
                                           className="px-5 py-2 mt-1 text-lg border-2 border-pracula hover:text-pracula rounded-lg hover:bg-opacity-0 bg-pracula text-dracxt">
                                            KNOW MORE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-16 justify-center justify-items-center align-middle lg:grid-cols-6 mx-auto mt-16'>
                        <div className='lg:col-start-2 lg:col-span-2'>
                            <div className='items-center justify-around justify-items-center'>
                                <div className="w-auto justify-center items-center">
                                    <img className="rounded-t-lg m-auto pt-5 w-auto h-48" src={AIC} alt="" />
                                    <div className="grid p-5 align-middle place-items-center items-center justify-items-center">
                                        <h5 className="mb-2 lg:text-3xl md:text-3xl text-2xl text-center text-pracula font-bold lg:font-semibold">
                                            Sponsor
                                        </h5>
                                        <a rel="noopener noreferrer" href="/sponsors#AIC"
                                           className="px-5 py-2 mt-1 text-lg border-2 border-pracula hover:text-pracula rounded-lg hover:bg-opacity-0 bg-pracula text-dracxt">
                                            KNOW MORE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:col-start-4 lg:col-span-2'>
                            <div className='items-center justify-around justify-items-center'>
                                <div className="w-auto justify-center items-center">
                                    <img className="rounded-t-lg m-auto pt-5 w-auto h-48" src={ECELL} alt="" />
                                    <div className="grid p-5 align-middle place-items-center items-center justify-items-center">
                                        <h5 className="mb-2 lg:text-3xl md:text-3xl text-2xl text-center text-pracula font-bold lg:font-semibold">
                                            Sponsor
                                        </h5>
                                        <a rel="noopener noreferrer" href="/sponsors#ECELL"
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
                                    <img className="rounded-t-lg m-auto pt-5 w-auto h-64" src={MUJ} alt="" />
                                    <div className="grid p-5 align-middle place-items-center items-center justify-items-center">
                                        <h5 className="mb-2 lg:text-3xl md:text-3xl text-2xl text-center text-pracula font-bold lg:font-semibold">
                                            Venue
                                        </h5>
                                        <a rel="noopener noreferrer" href="https://jaipur.manipal.edu/"
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

export default SponsorsHome;