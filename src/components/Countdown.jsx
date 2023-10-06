const Countdown = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
    return (
        <div className="h-screen">
            <div className="flex flex-col items-center justify-center w-full h-full gap-6 sm:gap-16">
                <h1 className='bg-opacity-10 backdrop-blur-0 bg-pracula border-2 border-pracula text-dracxt rounded-3xl px-2.5 font-medium py-1'>PHASE-1 HAS BEGUN!!</h1>
                <div className="flex justify-center gap-3 sm:gap-8">
                    <div className="flex flex-col gap-5 relative">
                        <div className="border-pracula border-2 h-16 w-16 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex justify-between items-center bg-pracula bg-opacity-10 backdrop-blur-0 rounded-xl">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full opacity-0"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-dracxt">
                {timerDays < 10 ? `0`+timerDays : timerDays}
              </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full opacity-0"></div>
                        </div>
                        <span className="text-dracxt text-xs sm:text-2xl text-center capitalize">
              {timerDays === 1 ? "Day" : "Days"}
            </span>
                    </div>
                    <div className="flex flex-col gap-5 relative">
                        <div className="border-2 border-pracula h-16 w-16 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex justify-between items-center bg-pracula bg-opacity-10 rounded-xl">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full opacity-0"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-dracxt">
                {timerHours < 10 ? `0`+timerHours : timerHours}
              </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full opacity-0"></div>
                        </div>
                        <span className="text-dracxt text-xs sm:text-2xl text-center font-medium">
              {timerHours <= 1 ? "Hour" : "Hours"}
            </span>
                    </div>
                    <div className="flex flex-col gap-5 relative">
                        <div className="border-pracula border-2 h-16 w-16 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex justify-between items-center bg-pracula bg-opacity-10 backdrop-blur-0 rounded-xl">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full opacity-0"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-dracxt">
                {timerMinutes < 10 ? `0`+timerMinutes : timerMinutes}
              </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full opacity-0"></div>
                        </div>
                        <span className="text-dracxt text-xs sm:text-2xl text-center capitalize">
              {timerMinutes <= 1 ? "Minute" : "Minutes"}
            </span>
                    </div>
                    <div className="flex flex-col gap-5 relative">
                        <div className="border-pracula border-2 h-16 w-16 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex justify-between items-center bg-pracula bg-opacity-10 backdrop-blur-0 rounded-xl">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full opacity-0"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-dracxt">
                {timerSeconds < 10 ? `0`+timerSeconds : timerSeconds}
              </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full opacity-0"></div>
                        </div>
                        <span className="text-dracxt text-xs sm:text-2xl text-center capitalize">
              {timerSeconds <= 1 ? "Second" : "Seconds"}
            </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

Countdown.defaultProps = {
    timerDays: 0,
    timerHours: 0,
    timerMinutes: 0,
    timerSeconds: 0,
};

export default Countdown;