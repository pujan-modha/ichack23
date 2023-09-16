import  heroImage from "../assets/herollu.svg";
import Countdown from "./Countdown";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    AOS.init({
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 200,
        duration: 800,
        easing: 'ease',
        anchorPlacement: 'top-bottom',

    });
    return(
        <section className="h-screen items-center justify-center">
            <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left lg:mt-0 mt-8" data-aos="fade-up">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl text-pracula">
                        IC HACK 2.0
                    </h1>
                    <p className="lg:mt-6 mt-8 mb-2 text-lg sm:mb-12">IC Hack is a national-level hackathon organized by the IEEE India Council every year.
                        It is a 48-hour hackathon where participants are given a problem statement on the spot and have to create a coding solution to it.
                    </p>
                    <div className="flex flex-col mt-8 lg:mt-0 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-medium border-2 border-pracula hover:text-pracula rounded-lg hover:bg-opacity-0 bg-pracula text-dracxt">REGISTER NOW</a>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center p-6 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 overflow-hidden" data-aos="fade-up">
                    {/*<img src={heroImage} alt="" className=" h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />*/}
                        <Countdown />
                </div>
            </div>
        </section>
    )
}

export default Hero;