import Navbar from "../components/Navbar";
import TrackCard from "../components/TrackCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import React from "react";
import {Helmet} from "react-helmet";

function Tracks() {
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
  return (
    <>
        <Helmet>
            <meta charSet="utf-8"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

            <link rel="icon" href="%PUBLIC_URL%/favicon.svg"/>
            <meta
                name="description"
                content="IC HACK 2.0 by IEEE India Council and IEEE MUJ."
            />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png"/>
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>

            <title>IC HACK 2.0 | Tracks</title>
            <meta
                content="IEEE India Council Hack 2.0 is the student-run Hackathon, with its prime motive to provide a recognised platform to every tech enthusiast."
                name="description"/>
            <meta
                content="hackathon, jaipur, prize money, tech, IC, IEEE, Hack, Hackathon, India council, Grss, sps, team, R10,"
                name="keywords"/>

            <title>IC Hack 2.0 | Tracks</title>
            <meta name="title" content="IC Hack 2.0 | Tracks"/>
            <meta name="description"
                  content="IEEE India Council Hack 2.0 is the student-run Hackathon, with its prime motive to provide a recognised platform to every tech enthusiast."/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://ichack2023.ieeemuj.com/"/>
            <meta property="og:title" content="IC Hack 2.0 | Tracks"/>
            <meta property="og:description"
                  content="IEEE India Council Hack 2.0 is the student-run Hackathon, with its prime motive to provide a recognised platform to every tech enthusiast."/>
            <meta property="og:image" content="ic-logo-og.png"/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://ichack2023.ieeemuj.com/"/>
            <meta property="twitter:title" content="IC Hack 2.0 | Tracks"/>
            <meta property="twitter:description"
                  content="IEEE India Council Hack 2.0 is the student-run Hackathon, with its prime motive to provide a recognised platform to every tech enthusiast."/>
            <meta property="twitter:image" content="ic-logo-og.png"/>
        </Helmet>
        <div className='font-mono text-dracxt h-auto bg-dracula sticky top-0 z-20'>
            <div className='bg-pracula'>
                <Navbar />
            </div>
        </div>
        <div className='bg-dracula font-mono text-dracxt'>
            <div className='xl:mx-auto max-w-7xl lg:mx-[10vw] justify-items-center mx-[5vw]' data-aos="fade-up">
                <div className='justify-center'>
                    <h1 className='lg:text-6xl text-4xl text-center text-pracula font-semibold py-[2.5vh]'>TRACKS</h1>
                </div>
                <TrackCard />
                <Footer/>
            </div>
        </div>
    </>
  )
}

export default Tracks;
