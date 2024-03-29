import React, {useState} from 'react'
import {FaRegPlusSquare} from 'react-icons/fa';
import {FaRegMinusSquare} from 'react-icons/fa';
import {IMenuCard} from "@/types/menu_card";

type Props = {
    data: IMenuCard;
    name: string;
    dsc: string;
    img: any;
    price: number;
    quantity: number;
    handleIncrementAmount: (event: React.MouseEvent<HTMLButtonElement>, value: string) => void;
    handleDecrementAmount: (event: React.MouseEvent<HTMLButtonElement>, value: string) => void;
    onAddOrderCard: (event: React.MouseEvent<HTMLButtonElement>, value: IMenuCard) => void;
}


const MenuCard = ({
                      data,
                      name,
                      dsc,
                      img,
                      price,
                      quantity,
                      handleIncrementAmount,
                      handleDecrementAmount,
                      onAddOrderCard
                  }: Props) => {


    return (
        <div className="flex  shadow-menu-cart bg-white  ">
            <div className=" w-32  overflow-hidden   ">
                <img src={img}
                     className="h-full w-full object-cover object-center"/>
            </div>

            <div className="ml-4 flex flex-1 flex-col py-3 pr-1.5">
                <div className=" ">
                    <div className="flex justify-between text-base font-medium text-component-header font-sans">
                        <h3>
                            <a href="#">{name}</a>
                        </h3>
                        <p className="ml-4">${quantity * price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 font-serif  text-ellipsis  overflow-hidden ">{dsc}</p>
                </div>
                <div className="flex flex-1 items-center justify-between text-sm text-component-header">
                    <div className="flex  items-center justify-between ">
                        <button className='icon_btn' onClick={(e) => handleDecrementAmount(e, name)}><FaRegMinusSquare
                            fontSize={18}/></button>
                        <div>
                            <span className="text-lg px-0.5">{quantity}</span>

                        </div>
                        <button className='icon_btn' onClick={(e) => handleIncrementAmount(e, name)}><FaRegPlusSquare
                            fontSize={18}/></button>
                    </div>
                    <div className="flex ">
                        <button
                            className=' bg-component-header border-2 border-solid border-gray-700 rounded-lg  hover:mt-0.5  text-white cursor-pointer inline-block font-semibold text-base leading-9 px-2 text-center select-none'
                            onClick={(e) => onAddOrderCard(e, data)}

                        >
                            Masaya Ekle
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MenuCard