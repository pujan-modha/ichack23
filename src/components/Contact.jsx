import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    AOS.init({
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        offset: 120,
        duration: 400,
        easing: 'ease',
        anchorPlacement: 'top-bottom',

    });
    return(
        <>
            <div className='justify-center my-[5vh]' >
                <h1 className='lg:text-6xl text-4xl text-center text-pracula font-semibold' data-aos="fade-up">CONTACT US</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 gap-6' data-aos="fade-up">
                {/*<div className='relative bg-pracula bg-opacity-10 border border-pracula rounded-lg lg:h-auto md:aspect-auto aspect-square'>*/}
                {/*    <iframe*/}
                {/*        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.877283914117!2d75.56265937558182!3d26.84385517668822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d67402d4eb863!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1694255447850!5m2!1sen!2sin"*/}
                {/*        className="absolute p-2 left-0 top-0 h-full w-full rounded-xl"*/}
                {/*        frameborder="0"*/}
                {/*        allowfullscreen>*/}
                {/*    </iframe>*/}
                {/*</div>*/}
                <div id='contact-form'>
                    <section className="border bg-dracula bg-opacity-10 border-pracula rounded-lg shadow p-5">
                        <div className="mx-auto max-w-screen-md">
                            {/*<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>*/}
                            {/*<p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>*/}
                            <form action="https://formspree.io/f/mleyobja" className="space-y-8 " method="POST">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-pracula">Your email</label>
                                    <input name="Email" type="email" id="email" className=" shadow-sm bg-pracula border border-pracula text-dracxt text-sm rounded-lg focus:ring-pracula focus:border-pracula block w-full p-2.5 bg-opacity-10 backdrop-blur-0" placeholder="name@example.com" required/>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-pracula">Subject</label>
                                    <input name="Subject" type="text" id="subject" className="shadow-sm bg-pracula border border-pracula text-dracxt text-sm rounded-lg focus:ring-pracula focus:border-pracula block w-full p-2.5 bg-opacity-10 backdrop-blur-0" placeholder="Let us know how we can help you" required/>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-pracula">Your message</label>
                                    <textarea name="Message" id="message" rows="6" className="block p-2.5 w-full text-sm text-dracxt bg-pracula rounded-lg shadow-sm border border-pracula backdrop-blur-0 bg-opacity-10 focus:ring-pracula focus:border-pracula" placeholder="Leave a comment..."></textarea>
                                </div>
                                <button type="submit" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:text-dracxt rounded-lg hover:bg-pracula hover:border-2 text-pracula hover:border-pracula bg-dracula border-2 border-pracula">Send Message</button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Contact;