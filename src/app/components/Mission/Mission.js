import React from 'react'
import '/src/app/components/Header/Header.css'
import Image from 'next/image'
import top from '/src/app/assets/top.png'
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
            <div className='top'>
                <Image
                    src={top}
                    alt='User Avatar' />

            </div>
            {/* <img src={header}></img> */}

        </div >
    )
}
