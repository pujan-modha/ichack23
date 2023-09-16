import React from "react";
import TracksData from "../assets/TracksData";
import CustomButton from "./CustomButton";

const TracksCard = () => {
    return(
        <>
            {TracksData.map((Tracks, index) => (
                <div key={index}>
                    <div className=' justify-around'>
                        <div className='grid-rows-2'>
                            <div className='opacity-90 pb-[10%]'>
                                <div className='flex '>
                                    <h1 className='font-semibold text-2xl lg:text-4xl pb-[1%] justify-around text-pracula'>{Tracks.TracksName}</h1>
                                </div>
                                <div className='pb-[2vh]'>
                                    <p className=' py-[1%] justify-around text-justify lg:text-2xl text-dracxt'>
                                        {Tracks.TracksAbout}
                                    </p>
                                </div>
                                <div className='px-3 xl:max-w-[12.5vw]'>
                                    {/*<a href="/" className=''>*/}
                                    {/*    <CustomButton*/}
                                    {/*        backgroundColor="#0F1B4C"*/}
                                    {/*        color="#fff"*/}
                                    {/*        buttonText="Read More"*/}
                                    {/*        heroBtn={true}*/}
                                    {/*    />*/}
                                    {/*</a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default TracksCard;  
