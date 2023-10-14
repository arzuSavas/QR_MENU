"use client"


import React, {useContext} from "react";
import {FaRegMinusSquare, FaRegPlusSquare} from "react-icons/fa";
import {Context, contextType} from "@/context/ContextProvider";
import {IMenuCard} from "@/types/menu_card";


const OrderList = () => {
    const {orderCard, setOrderCard, setOpenOrderModal} = useContext<contextType>(Context);
    const handleCloseOrderModal = () => {
        setOpenOrderModal(false);
    };
    const removeOrderCard = (event: React.MouseEvent<HTMLButtonElement>, value: IMenuCard) => {
        const updatedOrderCard = orderCard.filter((item) => item.name != value.name)
        setOrderCard(updatedOrderCard);
    }
    const handleIncrementAmount = (event: React.MouseEvent<HTMLButtonElement>, value: string) => {
        const updatedOrderCard = orderCard.map((item) => item.name === value ? {
            ...item,
            quantity: item.quantity + 1
        } : item)
        setOrderCard(updatedOrderCard);
    }
    const handleDecrementAmount = (event: React.MouseEvent<HTMLButtonElement>, value: string) => {
        const updatedOrderCard = orderCard.map((item) => item.name === value && item.quantity > 1 ? {
            ...item,
            quantity: item.quantity - 1
        } : item)
        setOrderCard(updatedOrderCard);
    }

    return (
        <div>
            <div>
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">

                        <div
                            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div
                                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="  ">

                                        <div className="text-center items-center  ">
                                            <h3 className=" font-black text-component-header font-sans text-2xl"
                                                id="modal-title">Siparişinizi Onaylayın</h3>
                                        </div>
                                        <div className="mt-5">
                                            {orderCard.map((order) =>
                                                <div className="flex  shadow-menu-cart bg-white my-2 ">
                                                    <div className=" w-20  overflow-hidden   ">
                                                        <img src={order.img}
                                                             className="h-full w-full object-cover object-center"/>
                                                    </div>

                                                    <div className="ml-4 flex flex-1 flex-col py-3 pr-1.5">
                                                        <div className=" ">
                                                            <div
                                                                className="flex justify-between text-base font-medium text-component-header font-sans">
                                                                <h3>
                                                                    <a href="#">{order.name}</a>
                                                                </h3>
                                                                <p className="ml-4">${order.quantity * order.price}</p>
                                                            </div>
                                                            <p className="mt-1 text-sm text-gray-500 font-serif  text-ellipsis  overflow-hidden ">{order.dsc}</p>
                                                        </div>
                                                        <div
                                                            className="flex flex-1 items-center justify-between text-sm text-component-header">
                                                            <div className="flex  items-center justify-between ">
                                                                <button className='icon_btn'
                                                                        onClick={(e) => handleDecrementAmount(e, order.name)}

                                                                ><FaRegMinusSquare
                                                                    fontSize={18}/></button>
                                                                <div>
                                                                    <span
                                                                        className="text-lg px-0.5">{order.quantity}</span>

                                                                </div>
                                                                <button className='icon_btn'
                                                                        onClick={(e) => handleIncrementAmount(e, order.name)}
                                                                ><FaRegPlusSquare
                                                                    fontSize={18}/></button>
                                                            </div>
                                                            <div className="flex ">
                                                                <button
                                                                    className=' bg-component-header border-2 border-solid border-gray-700 rounded-lg  hover:mt-0.5  text-white cursor-pointer inline-block font-semibold text-base leading-9 px-2 text-center select-none'
                                                                    onClick={(e) => removeOrderCard(e, order)}
                                                                >
                                                                    sil
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>)}
                                        </div>
                                    </div>


                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex  sm:px-6 justify-between items-center">
                                    <h3 className=" font-black text-component-header font-sans text-xl"
                                        id="modal-title">toplam tutatr: </h3>
                                    <div className="max-[640px]:mt-3 items-center">
                                        <button type="button"
                                                className="inline-flex w-full justify-center rounded-md bg-orange-700 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:mr-3 sm:w-auto "
                                                onClick={handleCloseOrderModal}
                                        >onayla
                                        </button>
                                        <button type="button"
                                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                onClick={handleCloseOrderModal}

                                        >iptal
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default OrderList