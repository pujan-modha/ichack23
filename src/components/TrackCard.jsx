import React from "react";
import TracksData from "../data/TracksData";

const TracksCard = () => {
    return(
        <>
            {TracksData.map((tracks, index) => (
                <div key={index}>
                    <div className='font-mono'>
                        <div className="flex flex-col items-center justify-around bg-pracula bg-opacity-10 backdrop-blur-0 border border-pracula rounded-lg shadow md:flex-row mb-4 md:p-3">
                            {/*<img className="inline max-h-full max-w-full align-middle justify-between object-cover w-full rounded-t-lg h-full md:h-full md:w-96 md:rounded-none md:rounded-l-lg p-[1%]" src={ichack} alt=""/>*/}
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h1 className="text-2xl lg:text-4xl font-bold tracking-tight text-pracula mb-[2vh]">{tracks.tracksName}</h1>
                                <p className="mb-[3vh] font-normal text-dracxt lg:text-2xl text-justify">{tracks.tracksAbout}</p>
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
                </div>
            ))}
        </>
    );
}

export default TracksCard;  
