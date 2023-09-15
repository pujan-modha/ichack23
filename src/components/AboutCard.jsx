import React from "react";
import { AboutData } from "../assets/AboutData";
import ichack from "../assets/ichackduotone.png";
import CustomButton from "./CustomButton";

const AboutCard = () => {

    return(
        <>
            <div className='xl:px-[10%] px-[1%]'>
                <div className="flex flex-col items-center justify-around border border-gray-300 rounded-lg md:flex-row mb-4 bg-[#e3ebfa] md:p-8">
                    <img className="inline max-h-full max-w-full align-middle justify-between object-cover w-full rounded-t-lg h-full md:h-full md:w-96 md:rounded-none md:rounded-l-lg p-[1%]" src={ichack} alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h1 className=" lg:text-4xl text-3xl font-semibold tracking-tight text-gray-900 mb-[2vh]">IC HACK’23</h1>
                        <p className="mb-[3vh] font-normal text-gray-500 lg:text-2xl text-justify">IEEE India Council Hack’23 is the student-run Hackathon, with its prime motive to provide a recognised platform to every tech enthusiast. Our 48-hour event will assist the participants in creating a coding solution to the problem statement, which is given on-spot to the participants. It aims to be an all-inclusive event that allows participants to express their creativity and eliminate the social obstacles surrounding programming. They need to show their managerial skills, teamwork, and the witty tactics they will implement to solve the problem. The Hackathon will offer a competitive environment focused on increasing diversity in the field of computer science.</p>
                        {/*<div className='pb-[1%] xl:max-w-[12.5vw]'>*/}
                        {/*    <a href="/">*/}
                        {/*        <CustomButton*/}
                        {/*            backgroundColor="#0F1B4C"*/}
                        {/*            color="#fff"*/}
                        {/*            buttonText="Read More"*/}
                        {/*            heroBtn={true}*/}
                        {/*        />*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            {AboutData.map((sponsor, index) => (
                <div key={index} className='xl:px-[10%] px-[1%]'>
                    <div className="flex flex-col items-center justify-around border border-gray-300 rounded-lg md:flex-row mb-4 bg-[#e3ebfa] md:p-8">
                        <img className="inline max-h-full max-w-full align-middle justify-between object-cover w-full rounded-t-lg h-full md:h-full md:w-96 md:rounded-none md:rounded-l-lg p-[1%]" src={sponsor.sponsorImage} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h1 className=" lg:text-4xl text-3xl font-semibold tracking-tight text-gray-900 mb-[2vh]">{sponsor.sponsorName}</h1>
                            <p className="mb-[3vh] font-normal text-gray-500 lg:text-2xl text-justify">{sponsor.sponsorAbout}</p>
                            <div className='pb-[1%] xl:max-w-[12.5vw]'>
                                <a href={sponsor.sponsorUrl}>
                                    <CustomButton
                                        backgroundColor="#0F1B4C"
                                        color="#fff"
                                        buttonText="Read More"
                                        heroBtn={true}
                                    />
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