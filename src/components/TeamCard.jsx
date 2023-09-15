import react, {useEffect, useState} from 'react';
import React from "react";
import {TeamData} from "../assets/TeamData";


const TeamCard = () => {

    return(
        <>
            {TeamData.map((teams, index) => (
                <div key={index}>
                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded-xl shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-80 md:h-80 xl:h-80"
                                src={teams.personImage}
                                alt={teams.personName}
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-gray-100">
                                    {teams.personName}
                                </p>
                                <p className="mb-4 text-xs text-gray-100">{teams.personPosition}</p>
                                <p className="mb-4 text-xs tracking-wide text-gray-400">
                                    {teams.personOrganization}
                                </p>
                                <div className="flex items-center justify-center space-x-3">
                                    <a
                                        href={teams.personLinkedIn}
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 448 512" fill="#ffffff"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default TeamCard;