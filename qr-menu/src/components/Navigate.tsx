"use client";
import React, {useContext, useState} from 'react';
import {GiHamburgerMenu, GiRoundTable} from 'react-icons/gi';
import {MdRestaurantMenu} from 'react-icons/md';
import TableList from "@/components/TableList";
import OrderList from "@/components/OrderList";
import contextProvider, {Context, contextType} from "@/context/ContextProvider";

const Navigate = () => {
    const {openOrderModal, setOpenOrderModal,orderCard} = useContext<contextType>(Context);

    const [toggleMenu, setToggleMenu] = useState(false);
    const [openTableModal, setOpenTableModal] = useState(false);
    //const [openOrderModal,setOpenOrderModal]=useState(false);

    const handleOpenTableModal = () => {
        setOpenTableModal(true);
    };

    const handleCloseTableModal = () => {
        setOpenTableModal(false);
    };
    const handleOpenOrderModal = () => {
        setOpenOrderModal(true)
        console.log(openOrderModal)
    };

    const handleCloseOrderModal = () => {
        setOpenOrderModal(false);
    };
    return (
        <div className=''>
            <div
                className=' sticky top-0 bg-nav-color max-[1024px]:flex max-[1024px]:flex-row-reverse max-[1024px]:items-center max-[1024px]:justify-between '>
                <ul className='flex items-center justify-between '>
                    <div className='flex m-2.5 max-[1024px]:hidden '>
                        <li className="m-2.5"><a className="text-navigate-color font-semibold" href="#">Kahvaltı</a>
                        </li>
                        <li className="m-2.5"><a className="text-navigate-color font-semibold" href="#">Burgers</a></li>
                        <li className="m-2.5"><a className="text-navigate-color font-semibold" href="#">Pizzalar</a>
                        </li>
                        <li className="m-2.5"><a className="text-navigate-color font-semibold" href="#">İçecekler</a>
                        </li>
                        <li className="m-2.5"><a className="text-navigate-color font-semibold" href="#">Tatlılar</a>
                        </li>
                        <li className="m-2.5"><a className="text-navigate-color font-semibold" href="#">Dondurmalar</a>
                        </li>
                    </div>
                    <div className='flex m-2.5 max-[1024px]:hidden relative'>
                        <li className="m-2.5 ">
                            <button
                                className='navigate_btn bg-btn-color border-2 border-solid border-table-button rounded-lg shadow-btn hover:shadow-btn-hover hover:mt-0.5 active:shadow-btn-active translate-x-px translate-y-px text-gray-700 cursor-pointer inline-block font-semibold text-base leading-9 px-2 text-center select-none'
                                onClick={handleOpenTableModal}
                            >
                                Masa Seç
                            </button>
                        </li>
                        <li className="m-2.5">
                            <button
                                className='navigate_btn bg-btn-color border-2 border-solid border-table-button rounded-lg shadow-btn hover:shadow-btn-hover hover:mt-0.5 active:shadow-btn-active translate-x-px translate-y-px text-gray-700 cursor-pointer inline-block font-semibold text-base leading-9 px-2 text-center select-none'
                                onClick={handleOpenOrderModal}

                            >
                                Masayı Görüntüle
                            </button>

                        </li>
                        {orderCard.length>0 &&
                        <li>
                            <span
                                className=" absolute top-0 right-0 px-2 bg-component-header text-white rounded-full text-sm">
                                {orderCard.length}
                            </span>
                        </li>
                        }
                    </div>

                </ul>

            </div>
            <div className='small_menu  sm:block lg:hidden sticky top-0 bg-nav-color '>
                <div className='small_menu_list flex items-center justify-between  '>
                    {!toggleMenu && (
                        <div><GiHamburgerMenu color='#fff' style={{marginLeft: 7}} fontSize={27}
                                              onClick={() => setToggleMenu(true)}/></div>
                    )}

                    {toggleMenu && (
                        <div>
                            <MdRestaurantMenu color='#fff' style={{marginLeft: 7}} fontSize={27}
                                              onClick={() => setToggleMenu(false)}/>

                        </div>
                    )}
                    <div className='flex m-2.5 list-none relative'>
                        <li className="m-2.5 ">
                            <button
                                className='  navigate_btn bg-btn-color border-2 border-solid border-table-button rounded-lg shadow-btn hover:shadow-btn-hover hover:mt-0.5 active:shadow-btn-active translate-x-px translate-y-px text-gray-700 cursor-pointer inline-block font-semibold text-base leading-9 px-2 text-center select-none'
                                onClick={handleOpenTableModal}
                            >
                                Masa Seç
                            </button>
                        </li>
                        <li className="m-2.5">
                            <button
                                className='navigate_btn bg-btn-color border-2 border-solid border-table-button rounded-lg shadow-btn hover:shadow-btn-hover hover:mt-0.5 active:shadow-btn-active translate-x-px translate-y-px text-gray-700 cursor-pointer inline-block font-semibold text-base leading-9 px-2 text-center select-none'
                                onClick={handleOpenOrderModal}
                            >
                                Masayı Görüntüle
                            </button>
                        </li>
                        {orderCard.length>0 &&
                            <li>
                            <span
                                className=" absolute top-0 right-0 px-2 bg-component-header text-white rounded-full text-sm">
                                {orderCard.length}
                            </span>
                            </li>
                        }
                    </div>

                </div>
                {toggleMenu && (
                    <div className='sticky top-0 bg-nav-color'>
                        <ul className='mobil_navigate_list py-0 pl-2 pr-4'>
                            <div className='mobil_navigate_items'>
                                <li className="py-2.5 px-0"><a className='text-navigate-color font-semibold'
                                                               href="#">Kahvaltı</a></li>
                                <li className="py-2.5 px-0"><a className='text-navigate-color font-semibold'
                                                               href="#">Burgers</a></li>
                                <li className="py-2.5 px-0"><a className='text-navigate-color font-semibold'
                                                               href="#">Pizzalar</a></li>
                                <li className="py-2.5 px-0"><a className='text-navigate-color font-semibold'
                                                               href="#">İçecekler</a></li>
                                <li className="py-2.5 px-0"><a className='text-navigate-color font-semibold'
                                                               href="#">Tatlılar</a></li>
                                <li className="py-2.5 px-0"><a className='text-navigate-color font-semibold'
                                                               href="#">Dondurmalar</a></li>
                            </div>
                        </ul>
                    </div>
                )}
            </div>

            {openTableModal &&
                <TableList
                    onOpenModal={handleOpenTableModal}
                    onCloseModal={handleCloseTableModal}
                />
            }
            {openOrderModal &&
                <OrderList
                    onOpenModal={handleOpenOrderModal}
                    onCloseModal={handleCloseOrderModal}
                />
            }
        </div>


    )
}

export default Navigate