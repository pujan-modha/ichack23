import React from "react";
import { AboutData } from "../assets/AboutData";
import ichack from "../assets/ichackduotone.png";

const AboutCard = () => {

    return(
        <>
            <div className='font-mono'>
                <div className="flex flex-col items-center justify-around bg-pracula bg-opacity-5 backdrop-blur-3xl border border-pracula rounded-lg shadow md:flex-row mb-4 md:p-3">
                    <img className="inline max-h-full max-w-full align-middle justify-between object-cover w-full rounded-t-lg h-full md:h-full md:w-96 md:rounded-none md:rounded-l-lg p-[1%]" src={ichack} alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h1 className="text-xl lg:text-4xl font-semibold tracking-tight text-pracula mb-[2vh]">IC HACK 2023</h1>
                        <p className="mb-[3vh] font-normal text-dracxt lg:text-2xl text-justify">IEEE India Council Hack’23 is the student-run Hackathon, with its prime motive to provide a recognised platform to every tech enthusiast. Our 48-hour event will assist the participants in creating a coding solution to the problem statement, which is given on-spot to the participants. It aims to be an all-inclusive event that allows participants to express their creativity and eliminate the social obstacles surrounding programming. They need to show their managerial skills, teamwork, and the witty tactics they will implement to solve the problem. The Hackathon will offer a competitive environment focused on increasing diversity in the field of computer science. We want to inspire students from around India and beyond to enter the field of computer science, where their basic ideas may become the industry-level solution in future. We are trying to imbibe industry exposure to the participants, which will help them in the long run also want to spread the idea that programming is a useful skill that anyone can enjoy.</p>
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
            {AboutData.map((about, index) => (
                <div key={index} className=''>
                    <div className="flex flex-col items-center justify-around bg-pracula bg-opacity-5 backdrop-blur-3xl border border-pracula rounded-lg shadow md:flex-row mb-4 md:p-3">
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