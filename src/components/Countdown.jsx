// import { useCallback, useEffect, useState } from "react";
// const Countdown = () => {
//     const [countDownTime, setCountDownTIme] = useState({
//         days: "100",
//         hours: "00",
//         minutes: "00",
//         seconds: "00",
//     });
//     const getTimeDifference = (countDownTime) => {
//         const currentTime = new Date().getTime();
//         const timeDiffrence = countDownTime - currentTime;
//         let days =
//             Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
//                 ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
//                 : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
//         const hours =
//             Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
//             10
//                 ? Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
//                 : `0${Math.floor(
//                     (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
//                 )}`;
//         const minutes =
//             Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
//                 ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
//                 : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
//         const seconds =
//             Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
//                 ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
//                 : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
//         if (timeDiffrence < 0) {
//             setCountDownTIme({
//                 days: "00",
//                 hours: "00",
//                 minutes: "00",
//                 seconds: "00",
//             });
//             clearInterval();
//         } else {
//             setCountDownTIme({
//                 days: days,
//                 hours: hours,
//                 minutes: minutes,
//                 seconds: seconds,
//             });
//         }
//     };
//     const startCountDown = useCallback(() => {
//         const customDate = new Date();
//         const countDownDate = new Date(
//             customDate.getFullYear(),
//             customDate.getMonth() + 1,
//             customDate.getDate() + 6,
//             customDate.getHours(),
//             customDate.getMinutes(),
//             customDate.getSeconds() + 1
//         );
//         setInterval(() => {
//             getTimeDifference(countDownDate.getTime());
//         }, 1000);
//     }, []);
//     useEffect(() => {
//         startCountDown();
//     }, [startCountDown]);
//     return (
//         <div className="h-screen">
//             <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
//         {/*<span className="text-2xl sm:text-3xl font-semibold text-white text-center tracking-widest px-2">*/}
//         {/*  Act Now, Time is Short*/}
//         {/*</span>*/}
//                 <div className="flex justify-center gap-3 sm:gap-8">
//                     <div className="flex flex-col gap-5 relative">
//                         <div className="h-16 w-16 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex justify-between items-center bg-[#bd93f9] bg-opacity-100 backdrop-blur-xl rounded-lg">
//                             <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24] bg-opacity-0"></div>
//                             <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-dracxt">
//                 {countDownTime?.days}
//               </span>
//                             <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24] bg-opacity-0"></div>
//                         </div>
//                         <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
//               {countDownTime?.days == 1 ? "Day" : "Days"}
//             </span>
//                     </div>
//                     <div className="flex flex-col gap-5 relative">
//                         <div className="h-16 w-16 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex justify-between items-center bg-[#bd93f9] bg-opacity-100 backdrop-blur-xl rounded-lg">
//                             <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24] bg-opacity-0"></div>
//                             <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-dracxt">
//                 {countDownTime?.hours}
//               </span>
//                             <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24] bg-opacity-0"></div>
//                         </div>
//                         <span className="text-[#8486A9] text-xs sm:text-2xl text-center font-medium">
//               {countDownTime?.hours == 1 ? "Hour" : "Hours"}
//             </span>
//                     </div>
//                     <div className="flex flex-col gap-5 relative">
//                         <div className="h-16 w-16 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex justify-between items-center bg-[#bd93f9] bg-opacity-100 backdrop-blur-xl rounded-lg">
//                             <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24] bg-opacity-0"></div>
//                             <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-dracxt">
//                 {countDownTime?.minutes}
//               </span>
//                             <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24] bg-opacity-0"></div>
//                         </div>
//                         <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
//               {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
//             </span>
//                     </div>
//                     <div className="flex flex-col gap-5 relative">
//                         <div className="h-16 w-16 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex justify-between items-center bg-[#bd93f9] bg-opacity-100 backdrop-blur-xl rounded-lg">
//                             <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24] bg-opacity-0"></div>
//                             <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-dracxt">
//                 {countDownTime?.seconds}
//               </span>
//                             <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24] bg-opacity-0"></div>
//                         </div>
//                         <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
//               {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
//             </span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Countdown;



import { Fragment } from "react";

const Countdown = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
    return (
        <div className="h-screen">
            <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
                {/*<span className="text-2xl sm:text-3xl font-semibold text-white text-center tracking-widest">*/}
                {/*    TIME TILL ROUND-1*/}
                {/*</span>*/}
                <h1 className='bg-opacity-50 backdrop-blur-xl bg-[#bd93f9] text-dracxt rounded-3xl px-2.5 font-medium py-1'>Round-1 will begin in</h1>
                <div className="flex justify-center gap-3 sm:gap-8">
                    <div className="flex flex-col gap-5 relative">
                        <div className="h-16 w-16 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex justify-between items-center bg-[#bd93f9] bg-opacity-50 backdrop-blur-xl rounded-lg">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24] bg-opacity-0"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-dracxt">
                {timerDays}
              </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24] bg-opacity-0"></div>
                        </div>
                        <span className="text-dracxt text-xs sm:text-2xl text-center capitalize">
              {timerDays === 1 ? "Day" : "Days"}
            </span>
                    </div>
                    <div className="flex flex-col gap-5 relative">
                        <div className="h-16 w-16 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex justify-between items-center bg-[#bd93f9] bg-opacity-50 backdrop-blur-xl rounded-lg">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24] bg-opacity-0"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-dracxt">
                {timerHours}
              </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24] bg-opacity-0"></div>
                        </div>
                        <span className="text-dracxt text-xs sm:text-2xl text-center font-medium">
              {timerHours <= 1 ? "Hour" : "Hours"}
            </span>
                    </div>
                    <div className="flex flex-col gap-5 relative">
                        <div className="h-16 w-16 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex justify-between items-center bg-[#bd93f9] bg-opacity-50 backdrop-blur-xl rounded-lg">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24] bg-opacity-0"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-dracxt">
                {timerMinutes}
              </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24] bg-opacity-0"></div>
                        </div>
                        <span className="text-dracxt text-xs sm:text-2xl text-center capitalize">
              {timerMinutes <= 1 ? "Minute" : "Minutes"}
            </span>
                    </div>
                    <div className="flex flex-col gap-5 relative">
                        <div className="h-16 w-16 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex justify-between items-center bg-[#bd93f9] bg-opacity-50 backdrop-blur-xl rounded-lg">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24] bg-opacity-0"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-dracxt">
                {timerSeconds}
              </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24] bg-opacity-0"></div>
                        </div>
                        <span className="text-dracxt text-xs sm:text-2xl text-center capitalize">
              {timerSeconds <= 1 ? "Second" : "Seconds"}
            </span>
                    </div>
                </div>
                {/*<span className="text-2xl sm:text-3xl font-semibold text-white text-center tracking-widest">*/}
                {/*    TILL ROUND-1*/}
                {/*</span>*/}
            </div>
        </div>
    );
};

Countdown.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
};

export default Countdown;