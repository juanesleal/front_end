import React from 'react'
import '/src/app/components/Header/Header.css'
import Image from 'next/image'
import questheader from '/src/app/assets/quest-header.png'
import logo from '/src/app/assets/Logo.jpg'
// import { React, useState } from 'react'

console.log(logo);
export default function QuestHeader() {

    // const [toggleState, setToggleState] = useState(1);

    // const toggleTab = (index) => {
    //     setToggleState(index);
    // };

    return (

        <div>

            {/* <img src={header}></img> */}
            <Image
                src={questheader}
                alt='User Avatar' />
        </div >
    )
}