import  heroImage from "../assets/herollu.svg";
import Countdown from "./Countdown";

const Hero = () => {
    return(
        <section className="h-screen items-center justify-center my-[5vh]">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl">IC HACK
                        <span className="dark:text-violet-400"> 2023</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">IC HACK 2023
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Register Now</a>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 overflow-hidden">
                    {/*<img src={heroImage} alt="" className=" h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />*/}
                        <Countdown />
                </div>
            </div>
        </section>
    )
}

export default Hero;