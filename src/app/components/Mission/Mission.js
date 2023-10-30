import React from 'react'
import '/src/app/components/Header/Header.css'
import Image from 'next/image'
import header from '/src/app/assets/quest-header.png'
import logo from '/src/app/assets/Logo.jpg'
// import { React, useState } from 'react'

console.log(logo);
export default function Mission() {

    // const [toggleState, setToggleState] = useState(1);

    // const toggleTab = (index) => {
    //     setToggleState(index);
    // };

    return (

        <div className='quest'>

            {/* <img src={header}></img> */}
            <Image
                src={logo}
                alt='User Avatar' />
        </div >
    )
}
