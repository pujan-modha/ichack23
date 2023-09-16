import React, {Component} from 'react';
import Contact from "./Contact";


class Footer extends Component {

    render() {
        return (
            <>
                <div className='justify-center my-[5vh]' >
                    <h1 className='lg:text-6xl text-4xl text-center text-pracula font-bold'>CONTACT US</h1>
                </div>
              <div>
                <Contact/>
              </div>
                <div>
                    <footer className="">
                        <div className="w-full mx-auto md:py-8">
                            {/*<div className="sm:flex sm:items-center sm:justify-between">*/}
                            {/*    <a href="/" className="flex items-center mt-4 sm:mb-0">*/}
                            {/*        /!*<img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />*!/*/}
                            {/*        <span className="self-center text-2xl font-semibold whitespace-nowrap text-pracula">IC HACK 2.0</span>*/}
                            {/*    </a>*/}
                            {/*    <ul className="flex flex-wrap align-middle self-center items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">*/}
                            {/*        <li>*/}
                            {/*            <a href="#" className="mx-4 hover:underline md:mx-0">*/}
                            {/*                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512 " fill="#bd93f9">*/}
                            {/*                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM218 271.7L64.2 172.4C66 156.4 79.5 144 96 144H352c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4V336c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V210.4l136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z"/>*/}
                            {/*                </svg>*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a href="#" className="mx-4 hover:underline md:mx-0">*/}
                            {/*                INSTAGRAM*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a href="#" className="mx-4 hover:underline md:mx-0">*/}
                            {/*                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512 " fill="#bd93f9">*/}
                            {/*                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/>*/}
                            {/*                </svg>*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a href="#" className="ml-4 hover:underline md:ml-0">*/}
                            {/*                INSTAGRAM*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a href="#" className="ml-4 hover:underline md:ml-0">*/}
                            {/*                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512 " fill="#bd93f9">*/}
                            {/*                    <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/>                                            </svg>*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a href="#" className="ml-4 hover:underline md:ml-0">*/}
                            {/*                INSTAGRAM*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a href="#" className="ml-4 hover:underline md:ml-0">*/}
                            {/*                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512 " fill="#bd93f9">*/}
                            {/*                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>                                            </svg>*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a href="#" className="ml-4 hover:underline md:ml-0">*/}
                            {/*                INSTAGRAM*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                            <div className="sm:flex sm:items-center md:pt-0 pt-[2.5vh] sm:justify-between">
                                <a href="/" className="flex text-center justify-center items-center mb-4 sm:mb-0">
                                    {/*<img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />*/}
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
                            <span className="block text-xs text-dracxt font-extralight mt-3 sm:text-center text-center pb-[1vh] md:pb-0">Made with <span className='text-pracula'><a href="https://draculatheme.com/" target="_blank" rel="noreferrer" className="hover:animate-pulse">💜</a> </span><span>by </span><a href="https://www.linkedin.com/in/pujan-modha/" target='_blank' rel="noreferrer" className="hover:underline text-pracula">Pujan Modha</a><span> and </span><a href="https://www.linkedin.com/in/arunabha-mukhopadhyay" target='_blank' rel="noreferrer" className="hover:underline text-pracula">Arunabha M.</a></span>
                        </div>
                    </footer>
                </div>
            </>
        );
    }
}

Footer.propTypes = {};

export default Footer;