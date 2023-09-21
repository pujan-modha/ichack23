import CCS from "../assets/tracks/ccs.png";
import CSSPS from "../assets/tracks/cssps.png";
import GRSS from "../assets/tracks/grss.png";
import AESSMTTAPS from "../assets/tracks/aessmttaps.png";
import OI from "../assets/tracks/openinnovation.png";


const HomeCard = () => {
    return(
        <>
            <div className='place-items-center'>
                <div className='grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-6 justify-items-center justify-center place-items-center align-middle'>
                    <div className='h-auto lg:col-span-2 md:col-span-2'>
                        {/*new card*/}
                        <div>
                            <div className='items-center justify-around justify-items-center'>
                                <div className="w-auto justify-center items-center">
                                    <img className="rounded-t-lg m-auto pt-5 w-[50%]" src={CCS} alt="" />
                                    <div className="grid p-5 align-middle place-items-center items-center justify-items-center">
                                        <h5 className="mb-2 lg:text-3xl md:text-3xl text-2xl text-center text-pracula font-bold lg:font-semibold tracking-tight">
                                            CLIMATE CHANGE AND SUSTAINABILITY
                                        </h5>
                                        <a rel="noopener noreferrer" href="/"
                                           className="px-5 py-2 text-lg border-2 border-pracula hover:text-pracula rounded-lg hover:bg-opacity-0 bg-pracula text-dracxt">
                                            KNOW MORE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-auto lg:col-span-2 md:col-span-2'>
                        {/*new card*/}
                        <div>
                            <div className='items-center justify-around justify-items-center'>
                                <div className="w-auto justify-center items-center">
                                    <img className="rounded-t-lg m-auto pt-5 w-[50%]" src={CSSPS} alt="" />
                                    <div className="grid p-5 align-middle place-items-center items-center justify-items-center">
                                        <h5 className="mb-2 lg:text-3xl md:text-3xl text-2xl text-center text-pracula font-bold lg:font-semibold tracking-tight">
                                            CS AND SIGNAL PROCESSING SOCIETY
                                        </h5>
                                        <a rel="noopener noreferrer" href="/"
                                           className="px-5 py-2 text-lg border-2 border-pracula hover:text-pracula rounded-lg hover:bg-opacity-0 bg-pracula text-dracxt">
                                            KNOW MORE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-auto lg:col-span-2 md:col-span-2'>
                        {/*new card*/}
                        <div>
                            <div className='items-center justify-around justify-items-center'>
                                <div className="w-auto justify-center items-center">
                                    <img className="rounded-t-lg m-auto pt-5 w-[50%]" src={GRSS} alt="" />
                                    <div className="grid p-5 align-middle place-items-center items-center justify-items-center">
                                        <h5 className="mb-2 lg:text-3xl md:text-3xl text-2xl text-center text-pracula font-bold lg:font-semibold tracking-tight">
                                            GEOSCIENCE AND REMOTE SENSING SOCIETY
                                        </h5>
                                        <a rel="noopener noreferrer" href="/"
                                           className="px-5 py-2 text-lg border-2 border-pracula hover:text-pracula rounded-lg hover:bg-opacity-0 bg-pracula text-dracxt">
                                            KNOW MORE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-auto lg:col-span-2 md:col-span-2 lg:col-start-2'>
                        {/*new card*/}
                        <div>
                            <div className='items-center justify-around justify-items-center'>
                                <div className="w-auto justify-center items-center">
                                    <img className="rounded-t-lg m-auto pt-5 w-[50%]" src={AESSMTTAPS} alt="" />
                                    <div className="grid p-5 align-middle place-items-center items-center justify-items-center">
                                        <h5 className="mb-2 lg:text-3xl md:text-3xl text-2xl text-center text-pracula font-bold lg:font-semibold tracking-tight">
                                            AESS AND MTTAPS
                                        </h5>
                                        <a rel="noopener noreferrer" href="/"
                                           className="px-5 py-2 text-lg border-2 border-pracula hover:text-pracula rounded-lg hover:bg-opacity-0 bg-pracula text-dracxt">
                                            KNOW MORE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-auto lg:col-span-2 md:col-span-2 lg:col-start-4 md:col-start-2'>
                        {/*new card*/}
                        <div>
                            <div className='items-center justify-around justify-items-center'>
                                <div className="w-auto justify-center items-center">
                                    <img className="rounded-t-lg m-auto pt-5 w-[50%]" src={OI} alt="" />
                                    <div className="grid p-5 align-middle place-items-center items-center justify-items-center">
                                        <h5 className="mb-2 lg:text-3xl md:text-3xl text-2xl text-center text-pracula font-bold lg:font-semibold tracking-tight">
                                            OPEN INNOVATION
                                        </h5>
                                        <a rel="noopener noreferrer" href="/"
                                           className="px-5 py-2 text-lg border-2 border-pracula hover:text-pracula rounded-lg hover:bg-opacity-0 bg-pracula text-dracxt">
                                            KNOW MORE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCard;