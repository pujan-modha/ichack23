import IEEECS from "../assets/ieeecs.svg";

const LOGOS = [
    <IEEECS width={24} height={24} className="text-slate-800" />,
    <IEEECS width={24} height={24} className="text-slate-800" />,
    <IEEECS width={24} height={24} className="text-slate-800" />
];

const KnowMoreCard = () => {
    // return (
    //     <div className="w-full">
    //         <div className="h-auto m-auto overflow-hidden relative w-auto">
    //
    //                 <ul className="flex w-[calc(250px*5)] animate-scroll">
    //                     {LOGOS.map((logo, index) => (
    //                         <div key={index}>
    //                     <li className="w-full"><img src='https://brand-experience.ieee.org/wp-content/uploads/2019/07/logo-masterbrand-white-transparent.png' alt=""/></li>
    //                         </div>
    //                     ))}
    //                         </ul>
    //
    //         </div>
    //     </div>
    // );
    return (
        <div className="relative m-auto w-[500px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
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
                        className="slide flex w-[125px] items-center justify-center"
                        key={index}
                    >
                        {logo}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default KnowMoreCard;