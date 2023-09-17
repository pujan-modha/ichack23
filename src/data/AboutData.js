import react from 'react';
const placeHolder = require("../assets/IEEEREMOVEBG.png");
const indiacouncillogo = require("../assets/ieeecouncilremovedbg.png");
const mujlogo = require("../assets/MUJLOGO1.png");
const sblogo = require("../assets/IEEESBLOGO1.png");

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
        aboutAbout: "IEEE India Council is the umbrella organization which coordinates IEEE activities in India.\n" +
            "\n" +
            "IEEE India Council strives to aid in the advancement of technology in India, and provides a recognised platform for the tech enthusiasts to grow together in this complex field of science.\n",
        aboutUrl: "https://ieeeindiacouncil.org/"
    },
    {
        aboutName: "IEEE",
        aboutImage: placeHolder,
        aboutAbout: "IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.\n" +
            "\n" +
            "IEEE and its members inspire a global community to innovate for a better tomorrow through its more than 400,000 members in over 160 countries, and its highly cited publications, conferences, technology standards, and professional and educational activities.\n",
        aboutUrl: "https://ieee.org/"
    },
    {
        aboutName: "Manipal University Jaipur",
        aboutImage: mujlogo,
        aboutAbout: "Manipal University Jaipur was launched in 2011 on an invitation from the Government of Rajasthan, as a self-financed State University.\n" +
            "\n" +
            "MUJ has redefined academic excellence in the region, with the Manipal way of learning. One that inspires students of all disciplines to learn and innovate through hands-on practical experience.\n",
        aboutUrl: "https://jaipur.manipal.edu/"
    },
    {
        aboutName: "IEEE SB MUJ",
        aboutImage: sblogo,
        aboutAbout: "IEEE Student Branch, Manipal University Jaipur is a dedicated group of students who strive to build and support a platform for like-minded tech enthusiasts to network and collaborate.\n" +
            "\n" +
            "In our pursuit for quality and practical knowledge, we are guided by a group of dedicated faculty members who are relentless in their efforts to hone our potential and mold us into the best engineers we could possibly become.\n",
        aboutUrl: "https://ieeemuj.com/"
    },
];

export {AboutData};