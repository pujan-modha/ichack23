import globalBG from "../assets/hero-bg.png";
import Countdown from "../components/Countdown";
import CustomButton from "../components/CustomButton";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";

const Home = () => {
    return(
        <>
            <div className='font-mono text-dracxt bg-dracula'>
            <div style={{backgroundImage: `url(${globalBG})`}} className='h-screen'>
                <div>
                    <Navbar/>
                </div>
                <div className='mx-[10vw]'>
                    <div className='align-middle justify-center items-center'>
                        <Hero/>
                    </div>
                </div>
            </div>
                <div className='mx-[10vw] mt-[10vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    )
}

export default Home;