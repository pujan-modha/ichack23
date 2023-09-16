import react from 'react';
const placeHolder = require("../assets/IEEEREMOVEBG.png");
const indiacouncillogo = require("../assets/ieeecouncilremovedbg.png");
const mujlogo = require("../assets/MUJLOGO1.png");
const sblogo = require("../assets/IEEESBLOGO1.png");
const ichack = require("../assets/ichackduotone.png");

const AboutData = [
    // {
    //     sponsorId: "1",
    //     sponsorName: "IC HACK’23",
    //     sponsorImage: ichack,
    //     sponsorAbout: "IEEE India Council Hack’23 is the student-run Hackathon, with its prime motive to provide a recognised platform to every tech enthusiast. Our 48-hour event will assist the participants in creating a coding solution to the problem statement, which is given on-spot to the participants. It aims to be an all-inclusive event that allows participants to express their creativity and eliminate the social obstacles surrounding programming. They need to show their managerial skills, teamwork, and the witty tactics they will implement to solve the problem. The Hackathon will offer a competitive environment focused on increasing diversity in the field of computer science. We want to inspire students from around India and beyond to enter the field of computer science, where their basic ideas may become the industry-level solution in future. We are trying to imbibe industry exposure to the participants, which will help them in the long run also want to spread the idea that programming is a useful skill that anyone can enjoy.",
    // },
    {
        aboutName: "IEEE India Council",
        aboutImage: indiacouncillogo,
        aboutAbout: "IEEE India Council is the umbrella organization that coordinates IEEE activities in India. India Council comes under IEEE Region 10, i.e., Asia Pacific region of IEEE, and has over 50,000 members spread across 1000 student branches. IEEE India Council was established on 20th May 1976 and is one of the five councils in Asia Pacific.",
        aboutUrl: "https://ieeeindiacouncil.org/"
    },
    {
        aboutName: "IEEE",
        aboutImage: placeHolder,
        aboutAbout: "IEEE (Institute of Electrical and Electronics Engineers) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE aims to recognize the contributions of technical communities and technical professionals in improving global conditions. IEEE and its members inspire a global community through highly cited publications, conferences, technology standards, and professional and educational activities.",
        aboutUrl: "https://ieee.org/"
    },
    {
        aboutName: "Manipal University Jaipur",
        aboutImage: mujlogo,
        aboutAbout: "Manipal University Jaipur (MUJ) was launched in 2011 on an invitation from the Government of Rajasthan, as a self-financed State University. MUJ has redefined academic excellence in the region, with the Manipal way of learning; one that inspires students of all disciplines to learn and innovate through hands on practical experience.",
        aboutUrl: "https://jaipur.manipal.edu/"
    },
    {
        aboutName: "IEEE SB MUJ",
        aboutImage: sblogo,
        aboutAbout: "IEEE Student Branch, Manipal University Jaipur, strives to create and spread awareness of the various technologies that surround us, promote research among students, and recognize technological excellence. We have grown into a multi-faceted chapter, embodying IEEE Computer Society MUJ, IEEE Antennas and Propagation Society MUJ, IEEE Microwave Theory and Techniques Society MUJ and IEEE Women in Engineering Affinity Group MUJ. We share a common goal of empowering young engineers to enhance their skills and set up milestones. IEEE is the trusted “voice” for engineering, computing, and technology information around the globe.",
        aboutUrl: "https://ieeemuj.com/"
    },
];

export {AboutData};