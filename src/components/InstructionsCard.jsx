import React from 'react';
import {InstructionsData} from "../data/InstructionsData";

const InstructionsCard = () => {
    return (
        <>
            {InstructionsData.map((instructions, index) => (
                <div key={index}>
                    <div className='font-mono'>
                        <div className="flex flex-col items-center justify-around bg-pracula bg-opacity-10 backdrop-blur-0 border border-pracula rounded-lg shadow md:flex-row mb-4 md:p-3">
                            {/*<img className="inline max-h-full max-w-full align-middle justify-between object-cover w-full rounded-t-lg h-full md:h-full md:w-96 md:rounded-none md:rounded-l-lg p-[15%] md:p-[7.5%] aspect-square" src={tracks.tracksImage} alt=""/>*/}
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                {/*<h1 className="text-2xl lg:text-4xl font-bold tracking-tight text-pracula mb-[2vh]">{instructions.InstructionsName}</h1>*/}
                                <p className="font-normal text-dracxt lg:text-2xl text-justify">{instructions.InstructionsAbout}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default InstructionsCard;