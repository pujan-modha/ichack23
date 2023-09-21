import ClimateChange from "../assets/tracks/ccs.png";
import Sustainable from "../assets/tracks/ccs.png";
import IEEECS from "../assets/tracks/ccs.png";
import SPS from "../assets/tracks/ccs.png";
import GRSS from "../assets/tracks/ccs.png";

const LOGOS = [
    <img src={ClimateChange} alt="" className='px-3'/>,
    <img src={Sustainable} alt="" className='px-3'/>,
    <img src={IEEECS} alt="" className='px-3'/>,
    <img src={SPS} alt="" className='px-3'/>,
    <img src={GRSS} alt="" className='px-3'/>,
    <img src={ClimateChange} alt="" className='px-3'/>,
    <img src={IEEECS} alt="" className='px-3'/>,
    <img src={ClimateChange} alt="" className='px-3'/>,
    <img src={IEEECS} alt="" className='px-3'/>,
    <img src={ClimateChange} alt="" className='px-3'/>,
]

const SponsorCarousel = () => {
    return (
        <div className="relative m-auto xl:mx-auto max-w-7xl lg:mx-[10vw] justify-items-center align-middle mx-[5vw] overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:content-['']">
            <div className="animate-infinite-slider flex w-[calc(250px*10)]">
                {LOGOS.map((logo, index) => (
                    <div
                        className="slide flex w-[125px] items-center justify-center"
                        key={index}
                    >
                        {logo}
                    </div>
                ))}
                {LOGOS.map((logo, index) => (
                    <div
                        className="slide flex w-[100vw] items-center justify-center"
                        key={index}
                    >
                        {logo}
                    </div>
                ))}
            </div>
        </div>
    );

}

export default SponsorCarousel;