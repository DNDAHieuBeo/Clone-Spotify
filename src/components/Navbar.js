import React from "react";
import {FaSpotify} from 'react-icons/fa'

export default function Navbar() {
    return(
        <div className="h-24 bg-slate-900 text-white text-center leading-[6rem] text-3xl">
            <FaSpotify className="inline mr-4"/>
            Spotify
        </div>
    )
}