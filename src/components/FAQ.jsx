import React, { useState } from "react";

const FAQ = () => {
    return (
        <section className="relative z-10 overflow-hidden">
            <div className='justify-center' >
                <h1 className='lg:text-6xl text-4xl text-center text-pracula font-bold pb-[2.5vh]'>FAQs</h1>
            </div>
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <AccordionItem
                            header="How long we deliver your first blog post?"
                            text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                        />
                        <AccordionItem
                            header="How long we deliver your first blog post?"
                            text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                        />
                        <AccordionItem
                            header="How long we deliver your first blog post?"
                            text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                        />
                    </div>
                </div>
        </section>
    );
};

export default FAQ;

const AccordionItem = ({ header, text }) => {
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        event.preventDefault();// eslint-disable-line no-restricted-globals
        setActive(!active);
    };
    return (
        <div className="single-faq mt-4 w-full bg-pracula bg-opacity-5 backdrop-blur-3xl border border-pracula rounded-lg shadow p-4 sm:p-8 lg:px-6 xl:px-8">
            <button
                className={`faq-btn flex w-full text-left`}
                onClick={() => handleToggle()}
            >


                <div className="w-full">
                    <h4 className="text-lg font-semibold text-pracula">{header}</h4>
                </div>
                <div className="mr-2 lg:mr-5 flex h-7 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                    <svg
                        className={`duration-250 ease-in-out fill-primary stroke-primary ${
                            active ? "rotate-180" : ""
                        }`}
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill="#bd93f9"
                            stroke=""
                        />
                    </svg>
                </div>
            </button>

            <div
                className={`duration-200 ease-in-out ${
                    active ? "block" : "hidden"
                }`}
            >
                <p className="py-3 text-base leading-relaxed text-dracxt">{text}</p>
            </div>
        </div>
    );
};