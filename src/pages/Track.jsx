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
    <div className='bg-dracula text-dracxt'>
        <Navbar />
        <div className='px-[1%]' data-aos="fade-up">
            <div className='justify-center pb-[3%]' >
                <h1 className='text-6xl text-center  font-[#5A6473] font-bold'>TRACKS</h1>
            </div>
            <TracksCard />
        </div>
        <Footer/>
    </div>
  )
}

export default Track
