import Countdown from "./Countdown";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect, useState} from "react";
import CountUp from "react-countup";

const Hero = () => {

    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
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

    let interval;

    const startTimer = () => {

        const countDownDate = new Date("October 07, 2023 ").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                // Stop Timer
                clearInterval(interval.current);
            } else {
                // Update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        });
    }

useEffect(() => {
    startTimer();
});

return (
    <>
    <section className="h-screen items-center justify-center">
        <div
            className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div
                className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left lg:mt-0 mt-8"
                data-aos="fade-up">
                <div>
                    <h1 className="text-5xl font-bold leading sm:text-7xl text-pracula">
                        IC HACK 2.0
                    </h1>
                    <h2 className="md:text-5xl text-3xl font-bold leading text-dracxt">
                        <CountUp start={0} end={100000} duration={3} />+
                    </h2>
                    <p className="text-xl font-bold leading text-dracxt">
                        Price Pool
                    </p>
                </div>
                <p className="lg:mt-6 mt-8 mb-2 text-lg sm:mb-12">A student-run hackathon that brings together the best
                    young minds to hack in an environment that encourages and nurtures innovation and creative thinking.
                </p>
                <div
                    className="flex flex-col mt-8 lg:mt-0 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <a rel="noopener noreferrer" target="_noref" href="https://bit.ly/ieee_ic_hack_2023"
                       className="px-8 py-3 text-lg font-medium border-2 border-pracula hover:text-pracula rounded-lg hover:bg-opacity-0 bg-pracula text-dracxt">
                        REGISTER NOW
                    </a>
                </div>
            </div>
            <div
                className="flex flex-col items-center justify-center lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 overflow-hidden"
                data-aos="fade-up">

                {/*<img src={heroImage} alt="" className=" h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />*/}

                <Countdown
                    timerDays={timerDays}
                    timerHours={timerHours}
                    timerMinutes={timerMinutes}
                    timerSeconds={timerSeconds}
                />
            </div>
        </div>
    </section>
    </>
)
}

export default Hero;