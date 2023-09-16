import dummyImage from "../assets/IEEEREMOVEBG.png"

const HomeCard = () => {
    return(
        <>
            <div className=''>
                <div className='items-center justify-around justify-items-center'>
                    <div className="w-auto bg-pracula bg-opacity-5 backdrop-blur-3xl border border-pracula rounded-lg shadow justify-center items-center ">
                        <img className="rounded-t-lg" src={dummyImage} alt="" />
                        <div className="p-5">
                            {/*<a href="#">*/}
                                <h5 className="mb-2 text-2xl text-pracula font-bold tracking-tight">Noteworthy technology acquisitions 2021</h5>
                            {/*</a>*/}
                            <p className="mb-3 font-normal text-dracxt">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-dracxt rounded-lg bg-pracula border-2 border-dracula hover:bg-dracula hover:border-2 hover:border-pracula">
                                know More
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCard;