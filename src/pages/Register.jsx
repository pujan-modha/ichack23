import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import globalBG from "../assets/hero-bg.png";
import React, {useState} from "react";
import {RegisterData} from "../data/RegisterData";

const Register = () => {
    const [reg, setReg] = useState('');

    const handleChange = (event) => {
        setReg(event.target.value);
    };
    return(
        <>
            <div className='font'>
                <div className='bg-dracula text-dracxt font-mono'>
                    <div className='font-mono text-dracxt h-auto bg-dracula sticky top-0 z-20'>
                        <div className='bg-pracula bg-opacity-50 backdrop-blur-0'>
                            <Navbar />
                        </div>
                    </div>
                    <div className='lg:mx-[10vw] mx-[5vw]'>
                        <div className='h-screen my-auto'>
                            <div className='justify-center' >
                                <h1 className='lg:text-6xl text-4xl text-center text-pracula font-semibold pt-[2.5vh]'>REGISTER</h1>
                            </div>
                            <div>
                                <div className='items-center justify-center flex mt-[7.5vh] lg:mt-[12.5vh] mb-[5vh]'>
                                    <select value={reg} onChange={handleChange} className="h-8 lg:w-[45vw] w-full rounded-lg border-r-8 border-pracula border-opacity-0 bg-pracula backdrop-blur-3xl text-dracula px-4 text-sm font-semibold outline outline-dracxt">
                                        <option selected className='bg-dracula text-pracula'>Select a Section</option>
                                        {RegisterData.map((RegData, index) => (
                                            <option className='bg-dracula text-pracula' value={RegData.value}>{RegData.data}</option>
                                        ))
                                        }

                                    </select>
                                </div>
                                <div className='items-center justify-center flex mb-[10vh]'>
                                    <div>
                                        <a href={reg} type='submit' className='hover:text-pracula mt-4 px-4 py-1 border-2 border-pracula hover:bg-dracula bg-pracula rounded-lg'>
                                            Submit
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-auto lg:mx-[10vw] mx-[5vw] text-justify justify-center items-center'>
                                <ul className='list-disc'>
                                    <li>
                                        Click "Register Now" below to register your team.
                                    </li>
                                    <li>
                                        Team size should be minimum 2 and max upto 4.
                                    </li>
                                    <li>
                                        A team can have IEEE and Non IEEE Members. No minimum restrictions on the number of IEEE or Non IEEE members.
                                    </li>
                                    <li>
                                        After purchasing a ticket, check your email where you'll receive the ticket information along with a Google Form to fill in your team details.
                                    </li>
                                    <li>
                                        Tickets are Non-Refundable please contact the India Council or the Student Branch Coordinator if you have any concerns.
                                    </li>
                                </ul>
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