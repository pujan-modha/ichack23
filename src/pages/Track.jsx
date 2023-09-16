import Navbar from "../components/Navbar";
import TracksCard from "../components/TrackCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

function Track() {
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
        <div className='bg-dracula font-mono text-dracxt sticky top-0'>
            <Navbar />
        </div>
        <div className='bg-dracula font-mono text-dracxt'>
            <div className='mx-[10vw]' data-aos="fade-up">
                <div className='justify-center pb-[3%]' >
                    <h1 className='text-6xl text-center text-pracula font-bold'>TRACKS</h1>
                </div>
                <TracksCard />
                <Footer/>
            </div>
        </div>
    </>
  )
}

export default Track
