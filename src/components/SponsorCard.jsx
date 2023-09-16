import React from "react";
import {SponsorData} from "../assets/SponsorData";
import CustomButton from "./CustomButton";

const SponsorCard = () => {

    return(
        <>
            {SponsorData.map((sponsor, index) => (
                <div key={index} className=''>
                    <div className="flex flex-col items-center justify-around border border-gray-300 rounded-lg md:flex-row mb-4 bg-[#e3ebfa] md:p-8">
                        <img className="inline max-h-full max-w-full align-middle justify-between object-cover w-full rounded-t-lg h-full md:h-full md:w-96 md:rounded-none md:rounded-l-lg p-[1%]" src={sponsor.sponsorImage} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h1 className="text-xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-[2vh]">{sponsor.sponsorName}</h1>
                            <p className="mb-[3vh] font-normal text-gray-500 lg:text-2xl text-justify">{sponsor.sponsorAbout}</p>
                            <div className='pb-[1%] xl:max-w-[12.5vw]'>
                                <a href="/">
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

export default SponsorCard;
