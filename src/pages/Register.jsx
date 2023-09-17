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
                            <div className='items-center justify-center flex mt-[10vh] lg:mt-[20vh] mb-[5vh]'>
                                <select value={reg} onChange={handleChange} className="h-8 lg:w-[45vw] w-full rounded-lg border-r-8 border-pracula border-opacity-0 bg-dracxt backdrop-blur-3xl text-dracula px-4 text-sm font-medium outline outline-neutral-700">
                                    <option selected className='bg-dracula text-pracula'>Select a Section</option>
                                    {RegisterData.map((RegData, index) => (
                                        <option className='bg-dracula text-pracula' value={RegData.value}>{RegData.data}</option>
                                    ))
                                    }

                                </select>
                            </div>
                            <div className='items-center justify-center flex mb-[15vh]'>
                                <div>
                                    <a href={reg} type='submit' className='mt-4 px-4 py-2 bg-pracula rounded-lg'>
                                        Submit
                                    </a>
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