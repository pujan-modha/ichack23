import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import globalBG from "../assets/hero-bg.png";
import React from "react";
import {RegisterData} from "../data/RegisterData";

const Register = () => {
    return(
        <>
            <div className='font'>
                <div className='bg-dracula text-dracxt font-mono'>
                    <div className='font-mono text-dracxt h-auto sticky top-0 z-20 bg-fixed bg-cover bg-no-repeat' style={{backgroundImage: `url(${globalBG})`}}>
                        <div className=' bg-pracula bg-opacity-50 backdrop-blur-md'>
                            <Navbar />
                        </div>
                    </div>
                    <div className='lg:mx-[10vw] mx-[5vw]'>
                        <div className='justify-center' >
                            <h1 className='lg:text-6xl text-4xl text-center text-pracula font-bold py-[2.5vh]'>REGISTER</h1>
                        </div>
                        <div>
                            <div className='items-center justify-center flex'>
                                <select id="countries" className="h-8 w-72 rounded-lg border-r-8 border-pracula border-opacity-0 bg-dracxt backdrop-blur-3xl text-dracula px-4 text-sm font-medium outline outline-neutral-700">
                                    <option selected className='bg-dracula text-pracula'>Select a Region</option>
                                    <option className='bg-dracula text-pracula'>Region-1</option>
                                    <option className='bg-dracula text-pracula'>Region-2</option>
                                    <option className='bg-dracula text-pracula'>Region-3</option>
                                    <option className='bg-dracula text-pracula'>Region-4</option>
                                    <option className='bg-dracula text-pracula'>Region-5</option>
                                    <option className='bg-dracula text-pracula'>Region-6</option>
                                    <option className='bg-dracula text-pracula'>Region-7</option>
                                    <option className='bg-dracula text-pracula'>Region-8</option>
                                    <option className='bg-dracula text-pracula'>Region-9</option>
                                    <option className='bg-dracula text-pracula'>Region-10</option>
                                    <option className='bg-dracula text-pracula'>Region-11</option>
                                    <option className='bg-dracula text-pracula'>Region-12</option>


                                </select>
                            </div>
                            <div className='items-center justify-center flex'>
                                <div>
                                    <button type='submit' className='mt-4 px-4 py-2 bg-pracula rounded-lg'>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;