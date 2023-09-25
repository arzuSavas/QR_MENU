"use client"


import React from "react";
import {FaRegMinusSquare, FaRegPlusSquare} from "react-icons/fa";

type Props = {

    onOpenModal: VoidFunction;
    onCloseModal: VoidFunction;
}
const OrderList = ({
                       onOpenModal,
                       onCloseModal
                   }: Props) => {
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
                                    </div>


                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex  sm:px-6 justify-between items-center">
                                    <h3 className=" font-black text-component-header font-sans text-xl"
                                        id="modal-title">toplam tutatr: </h3>
                                    <div className="max-[640px]:mt-3 items-center">
                                        <button type="button"
                                                className="inline-flex w-full justify-center rounded-md bg-orange-700 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:mr-3 sm:w-auto "
                                        >onayla
                                        </button>
                                        <button type="button"
                                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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