import React, {Component} from 'react';
import Contact from "./Contact";

class Footer extends Component {
    render() {
        return (
            <>
              <div>
                <Contact/>
              </div>
                <div>
                    <footer className="">
                        <div className="w-full mx-auto md:py-8">
                            <div className="sm:flex sm:items-center md:pt-0 pt-[2.5vh] sm:justify-between">
                                <a href="/" className="flex text-center justify-center items-center mb-4 sm:mb-0">
                                    <span className="self-center text-center text-2xl font-semibold whitespace-nowrap text-pracula">IC HACK 2.0</span>
                                </a>
                                <ul className="flex flex-wrap items-center mb-6 text-sm text-center justify-center font-medium text-dracxt sm:mb-0">
                                    <li className='hover:text-pracula'>
                                        <a href="mailto:ichack2023@gmail.com" className="mr-4 hover:underline md:mr-6 ">E-MAIL</a>
                                    </li>
                                    <li className='hover:text-pracula'>
                                        <a href="https://www.instagram.com/ieeeindiacouncil/" className="mr-4 hover:underline md:mr-6 ">INSTAGRAM</a>
                                    </li>
                                    <li className='hover:text-pracula'>
                                        <a href="https://www.linkedin.com/company/ieeeindiacouncil/" className="mr-4 hover:underline md:mr-6">LINKEDIN</a>
                                    </li>
                                    <li className='hover:text-pracula'>
                                        <a href="https://www.facebook.com/ieeeindiacouncil/" className="hover:underline">FACEBOOK</a>
                                    </li>
                                </ul>
                            </div>
                            <hr className="my-6 border-pracula sm:mx-auto lg:my-2" />
                            <span className="block text-sm text-dracxt font-light mt-6 sm:text-center text-center md:pb-0">© 2023 <a href="/" className="hover:underline text-pracula">IC HACK 2.0</a> All Rights Reserved.</span>
                            <span className="block text-xs text-dracxt font-extralight mt-3 sm:text-center text-center pb-[1vh] md:pb-0">Made with <span className='text-pracula'><a href="https://www.github.com/pujan-modha/ichack23#credits" target="_blank" rel="noreferrer" className="animate-pulse align-middle">💙</a> </span><span>by </span><a href="https://www.linkedin.com/in/pujan-modha/" target='_blank' rel="noreferrer" className="hover:underline text-pracula">Pujan Modha</a><span> and </span><a href="https://www.linkedin.com/in/arunabha-mukhopadhyay" target='_blank' rel="noreferrer" className="hover:underline text-pracula">Arunabha M.</a></span>
                        </div>
                    </footer>
                </div>
            </>
        );
    }
}

Footer.propTypes = {};

export default Footer;