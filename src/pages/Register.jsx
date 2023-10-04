import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, {useState} from "react";
import {RegisterData} from "../data/RegisterData";
import {Helmet} from "react-helmet";

const Register = () => {
    const [reg, setReg] = useState('');

    const handleChange = (event) => {
        setReg(event.target.value);
    };
    return(
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

                <link rel="icon" href="%PUBLIC_URL%/favicon.svg"/>
                <meta
                    name="description"
                    content="IC HACK 2.0 by IEEE India Council and IEEE MUJ."
                />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png"/>
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>

                <title>IC HACK 2.0 | Register</title>
                <meta
                    content="IEEE India Council Hack 2.0 is the student-run Hackathon, with its prime motive to provide a recognised platform to every tech enthusiast."
                    name="description"/>
                <meta
                    content="hackathon, jaipur, prize money, tech, IC, IEEE, Hack, Hackathon, India council, Grss, sps, team, R10,"
                    name="keywords"/>

                <title>IC Hack 2.0 | Register</title>
                <meta name="title" content="IC Hack 2.0 | Register"/>
                <meta name="description"
                      content="IEEE India Council Hack 2.0 is the student-run Hackathon, with its prime motive to provide a recognised platform to every tech enthusiast."/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://ichack2023.ieeemuj.com/"/>
                <meta property="og:title" content="IC Hack 2.0 | Register"/>
                <meta property="og:description"
                      content="IEEE India Council Hack 2.0 is the student-run Hackathon, with its prime motive to provide a recognised platform to every tech enthusiast."/>
                <meta property="og:image" content="ic-logo-og.png"/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://ichack2023.ieeemuj.com/"/>
                <meta property="twitter:title" content="IC Hack 2.0 | Register"/>
                <meta property="twitter:description"
                      content="IEEE India Council Hack 2.0 is the student-run Hackathon, with its prime motive to provide a recognised platform to every tech enthusiast."/>
                <meta property="twitter:image" content="ic-logo-og.png"/>
            </Helmet>
            <div className='font'>
                <div className='bg-dracula text-dracxt font-mono'>
                    <div className='font-mono text-dracxt h-auto bg-dracula sticky top-0 z-20'>
                        <div className='bg-pracula'>
                            <Navbar />
                        </div>
                    </div>
                    <div className='xl:mx-auto max-w-7xl lg:mx-[10vw] justify-items-center mx-[5vw]'>
                        <div className='h-screen my-auto'>
                            <div className='justify-center' >
                                <h1 className='lg:text-6xl text-4xl text-center text-pracula font-semibold pt-[2.5vh]'>REGISTER</h1>
                            </div>
                            <div>
                                <div className='items-center justify-center flex mt-[7.5vh] lg:mt-[12.5vh] mb-[5vh]'>
                                    <select value={reg} onChange={handleChange} className="h-8 lg:w-[50vw] w-full rounded-lg border-r-8 border-pracula border-opacity-0 bg-pracula backdrop-blur-0 text-dracula px-4 text-sm font-semibold outline outline-1 outline-dracxt">
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
                                            SUBMIT
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-auto xl:mx-auto max-w-7xl lg:mx-[10vw] justify-items-center mx-[5vw] lg:w-[50vw] text-justify justify-center items-center'>
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