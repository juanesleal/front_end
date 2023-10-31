import React from 'react'
import '/src/app/components/Header/Header.css'
import Image from 'next/image'
import questheader from '/src/app/assets/quest-header.png'
import logo from '/src/app/assets/Logo.jpg'
import '/src/app/components/Mission/QuestHeader.css'
// import { React, useState } from 'react'

console.log(logo);
export default function QuestHeader() {

    // const [toggleState, setToggleState] = useState(1);

    // const toggleTab = (index) => {
    //     setToggleState(index);
    // };

    return (

        <div className='headerImage'>

            {/* <img src={header}></img> */}
            <Image className='headerImage'
                src={questheader}
                alt='User Avatar' />
        </div >
    )
}