const Countdown = () => {
    return(
        <>
            <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>

            <div className="min-w-screen flex items-center justify-center px-5 py-5" x-data="beer()" x-init="start()">
                <div className="text-white">
                    <h1 className="text-3xl text-center mb-3 font-extralight">IC HACK 2023</h1>
                    <div className="text-6xl text-center flex w-full items-center justify-center">
                        <div className="w-24 mx-1 p-2 bg-white text-[#bd93f9] rounded-xl">
                            <div className="font-mono leading-none" x-text="days">08</div>
                            <div className="font-mono uppercase text-sm leading-none">Days</div>
                        </div>
                        <div className="w-24 mx-1 p-2 bg-white text-[#bd93f9] rounded-xl">
                            <div className="font-mono leading-none" x-text="hours">11</div>
                            <div className="font-mono uppercase text-sm leading-none">Hours</div>
                        </div>
                        <div className="w-24 mx-1 p-2 bg-white text-[#bd93f9] rounded-xl">
                            <div className="font-mono leading-none" x-text="minutes">43</div>
                            <div className="font-mono uppercase text-sm leading-none">Minutes</div>
                        </div>
                        <div className="w-24 mx-1 p-2 bg-white text-[#bd93f9] rounded-xl">
                            <div className="font-mono leading-none" x-text="seconds">26</div>
                            <div className="font-mono uppercase text-sm leading-none">Seconds</div>
                        </div>
                    </div>
                </div>
            </div>
            <script src='./Timer.js'></script>
        </>
    )
}

export default Countdown;