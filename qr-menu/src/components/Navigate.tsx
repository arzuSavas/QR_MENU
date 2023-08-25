"use client";
import React, { useState } from 'react';
import {GiHamburgerMenu,GiRoundTable} from 'react-icons/gi';
import {MdRestaurantMenu} from 'react-icons/md';
const Navigate = () => {
    const [toggleMenu,SetToggleMenu]=useState(false);

    return (
        <div>
            <div className=' sticky top-0 bg-nav-color max-[1024px]:flex max-[1024px]:flex-row-reverse max-[1024px]:items-center max-[1024px]:justify-between '>
                <ul className='flex items-center justify-between '>
                    <div className='flex m-2.5 max-[1024px]:hidden '>
                        <li className="m-2.5"><a className="text-navigate-color font-semibold" href="#">Kahvaltı</a></li>
                        <li className="m-2.5"><a className="text-navigate-color font-semibold" href="#">Burgers</a></li>
                        <li className="m-2.5"><a className="text-navigate-color font-semibold" href="#">Pizzalar</a></li>
                        <li className="m-2.5"><a className="text-navigate-color font-semibold" href="#">İçecekler</a></li>
                        <li className="m-2.5"><a className="text-navigate-color font-semibold" href="#">Tatlılar</a></li>
                        <li className="m-2.5"> <a className="text-navigate-color font-semibold" href="#">Dondurmalar</a></li>
                    </div>
                    <div className='flex m-2.5 max-[1024px]:hidden'>
                        <li className="m-2.5 ">
                            <button  className='navigate_btn bg-btn-color border-2 border-solid border-gray-700 rounded-lg shadow-btn hover:shadow-btn-hover hover:mt-0.5 active:shadow-btn-active translate-x-px translate-y-px text-gray-700 cursor-pointer inline-block font-semibold text-base leading-9 px-2 text-center select-none'> Masa Ekle</button>
                        </li>
                        <li className="m-2.5">
                            <button  className='navigate_btn bg-btn-color border-2 border-solid border-gray-700 rounded-lg shadow-btn hover:shadow-btn-hover hover:mt-0.5 active:shadow-btn-active translate-x-px translate-y-px text-gray-700 cursor-pointer inline-block font-semibold text-base leading-9 px-2 text-center select-none'> Masayı Görüntüle</button>
                        </li>
                    </div>

                </ul>

            </div>
            <div className='small_menu  sm:block lg:hidden sticky top-0 bg-nav-color '>
                <div className='small_menu_list flex items-center justify-between  '>
                    {!toggleMenu  &&(
                        <div><GiHamburgerMenu color='#fff' style={{marginLeft:7}} fontSize={27} onClick={()=>SetToggleMenu(true)} /> </div>
                    )}

                    {toggleMenu &&(
                        <div>
                            <MdRestaurantMenu color='#fff' style={{marginLeft:7}} fontSize={27} onClick={()=>SetToggleMenu(false)}/>

                        </div>
                    )}
                    <div className='flex m-2.5 list-none'>
                        <li className="m-2.5 ">
                            <button  className='navigate_btn bg-btn-color border-2 border-solid border-gray-700 rounded-lg shadow-btn hover:shadow-btn-hover hover:mt-0.5 active:shadow-btn-active translate-x-px translate-y-px text-gray-700 cursor-pointer inline-block font-semibold text-base leading-9 px-2 text-center select-none'> Masa Ekle</button>
                        </li>
                        <li className="m-2.5">
                            <button  className='navigate_btn bg-btn-color border-2 border-solid border-gray-700 rounded-lg shadow-btn hover:shadow-btn-hover hover:mt-0.5 active:shadow-btn-active translate-x-px translate-y-px text-gray-700 cursor-pointer inline-block font-semibold text-base leading-9 px-2 text-center select-none'> Masayı Görüntüle</button>
                        </li>
                    </div>

                </div>
                {toggleMenu &&(
                    <div className='sticky top-0 bg-nav-color'>
                        <ul className='mobil_navigate_list py-0 pl-2 pr-4'>
                            <div className='mobil_navigate_items'>
                                <li className="py-2.5 px-0"><a className='text-navigate-color font-semibold'  href="#">Kahvaltı</a></li>
                                <li className="py-2.5 px-0"><a className='text-navigate-color font-semibold' href="#">Burgers</a></li>
                                <li className="py-2.5 px-0"><a className='text-navigate-color font-semibold' href="#">Pizzalar</a></li>
                                <li className="py-2.5 px-0"><a className='text-navigate-color font-semibold' href="#">İçecekler</a></li>
                                <li className="py-2.5 px-0"><a className='text-navigate-color font-semibold' href="#">Tatlılar</a></li>
                                <li className="py-2.5 px-0"> <a className='text-navigate-color font-semibold' href="#">Dondurmalar</a></li>
                            </div>
                        </ul>
                    </div>
                )}
            </div>
        </div>



    )
}

export default Navigate