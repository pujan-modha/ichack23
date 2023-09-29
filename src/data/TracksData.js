import CV from "../assets/tracks/cv.png";
import HC from "../assets/tracks/hc.png";
import TP from "../assets/tracks/tp.png";
import OI from "../assets/tracks/oi.png";
import CVDOC from "../assets/tracks/cv.pdf";
import HCDOC from "../assets/tracks/hc.pdf";
import TPDOC from "../assets/tracks/tp.pdf";
import OIDOC from "../assets/tracks/oi.pdf";

const TracksData = [
    {
        tracksImage: CV,
        trackID: "CV",
        trackDocument: CVDOC,
        tracksName: "COMPUTER VISION",
        tracksAbout: "The WHO warns that road traffic accidents, a global health concern, cause millions of annual deaths due to driver fatigue, including drowsiness and unease, impairing quick decision-making. Recent computer vision tech advancements can help by monitoring driver behavior in real-time for signs of drowsiness, potentially preventing accidents. The challenge: create a strong Computer Vision algorithm to detect driver unease via in-car cameras."
    },
    {
        tracksImage: HC,
        trackID: "HC",
        trackDocument: HCDOC,
        tracksName: "ADVANCEMENT IN HEALTHCARE",
        tracksAbout: "In the evolving landscape of healthcare, one crucial area ripe for innovation is the integration of patient data and the creation of a Unified Patient Treatment Platform (UPTP). The goal of this hackathon is to inspire participants to design a UPTP that seamlessly integrates with existing patient management software used in healthcare facilities. This platform will empower patients with access to their complete healthcare history and assist healthcare providers in delivering more efficient and informed care.",
    },
    {
        tracksImage: TP,
        trackID: "TP",
        trackDocument: TPDOC,
        tracksName: "INNOVATION IN TRANSPORTATION",
        tracksAbout: "Transportation is an essential aspect of modern life, facilitating the movement of people and goods. However, it faces various challenges, including accidents that cause harm and inefficiencies that lead to wasted time, resources, and environmental consequences. This hackathon encourages participants to develop creative solutions to improve safety and efficiency in transportation.",
    },
    {
        tracksImage: OI,
        trackID: "OI",
        trackDocument: OIDOC,
        tracksName: "OPEN INNOVATION - CLIMATE CHANGE",
        tracksAbout: "Climate change poses one of the most pressing challenges to humanity, impacting ecosystems, economies, and livelihoods worldwide. Addressing climate change requires collaborative and innovative solutions that encompass a wide range of disciplines, technologies, and perspectives.",
    },
];

export default TracksData;