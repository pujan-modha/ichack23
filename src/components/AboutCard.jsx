import React from "react";
import { AboutData } from "../data/AboutData";

const AboutCard = () => {

    return(
        <>
            {/*<div className='font-mono'>*/}
            {/*    <div className="flex flex-col items-center justify-around bg-pracula bg-opacity-10 backdrop-blur-0 border border-pracula rounded-lg shadow md:flex-row mb-4 md:p-3">*/}
            {/*        <img className="inline max-h-full max-w-full align-middle justify-between object-cover w-full rounded-t-lg h-full md:h-full md:w-96 md:rounded-none md:rounded-l-lg p-[1%]" src={ichack} alt=""/>*/}
            {/*        <div className="flex flex-col justify-between p-4 leading-normal">*/}
            {/*            <h1 className="text-2xl lg:text-4xl font-bold tracking-tight text-pracula mb-[2vh]">IC HACK 2023</h1>*/}
            {/*            <p className="mb-[3vh] font-normal text-dracxt lg:text-2xl text-justify">IEEE IC HACK ‘23 is a student-run hackathon brought to you by IEEE SB MUJ and IEEE India Council.*/}

            {/*                It is a 36-hour event where participants from all over India come together to build innovative solutions to real-world problems. The hackathon is open to all students, regardless of their skill level or background.*/}

            {/*                IEEE IC HACK ‘23 is a great opportunity for students to learn new skills, network with other tech enthusiasts, and build innovative solutions to real-world problems.*/}
            {/*            </p>*/}
            {/*            <div className='pb-[1%] xl:max-w-[12.5vw]'>*/}
            {/*                <a href="/" className='bg-pracula px-3 py-2 border-2 border-pracula rounded-lg hover:bg-dracula hover:text-pracula'>*/}
            {/*                    <button type='button'>*/}
            {/*                        Read More*/}
            {/*                    </button>*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {AboutData.map((about, index) => (
                <div key={index} className=''>
                    <div className="flex flex-col items-center justify-around bg-pracula bg-opacity-10 backdrop-blur-0 border border-pracula rounded-lg shadow md:flex-row mb-4 md:p-3">
                        <img className="inline max-h-full max-w-full align-middle justify-between object-cover w-full rounded-t-lg h-full md:h-full md:w-96 md:rounded-none md:rounded-l-lg p-[1%]" src={about.aboutImage} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h1 className="text-xl lg:text-4xl font-semibold tracking-tight text-pracula mb-[2vh]">{about.aboutName}</h1>
                            <p className="mb-[3vh] font-normal text-dracxt lg:text-2xl text-justify">{about.aboutAbout}</p>
                            <div className='pb-[1%] xl:max-w-[12.5vw]'>
                                <a href="/" className='bg-pracula px-3 py-2 border-2 border-pracula rounded-lg hover:bg-dracula hover:text-pracula'>
                                    <button type='button'>
                                        Read More
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default AboutCard;