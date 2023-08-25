"use client";

import React, {useEffect, useState} from 'react'
const Header = () => {
    return (
        <div >
            <div className="bg-amber-900 bg-header-image min-h-screen bg-center bg-cover bg-repeat bg-fixed font-['fantasy'] font-medium text-2xl">
                <div className='justify-between py-6 px-5'>
                    <ul className='flex justify-between items-center '>
                        <li> <a href="#" className='text-header-color'><h2>Logo</h2></a></li>
                        <div className='flex text-header-color '>
                            <li className='px-2.5'> <a href="#" className=''><h4>Menü</h4></a> </li>
                            <li className='px-2.5'>  <a href="#" className=''><h4>İletişim</h4></a></li>
                        </div>
                    </ul>
                </div>
                <h1 className='text-center mt-60 text-header-color'>Hoş Geldiniz</h1>
            </div>
            </div>
    )
}

export default Header