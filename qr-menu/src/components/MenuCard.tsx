import React from 'react'
import { FaRegPlusSquare } from 'react-icons/fa';
import { FaRegMinusSquare } from 'react-icons/fa';
type Props = {
    name: string;
    dsc: string;
    img: any;
    price: number;
}
const MenuCard = ({
                      name,
                      dsc,
                      img,
                      price
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
                        <p className="ml-4">${price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 font-serif  text-ellipsis  overflow-hidden ">{dsc}</p>
                </div>
                <div className="flex flex-1 items-center justify-between text-sm text-component-header">
                    <div className="flex  items-center justify-between ">
                    <button  className='icon_btn'  > <FaRegMinusSquare fontSize={18}/></button>
                        <div>
                            <span className="text-lg px-0.5" >{5}</span>

                        </div>
                    <button className='icon_btn' ><FaRegPlusSquare fontSize={18}/></button>
                    </div>
                    <div className="flex ">
                        <button
                            className=' bg-component-header border-2 border-solid border-gray-700 rounded-lg  hover:mt-0.5  text-white cursor-pointer inline-block font-semibold text-base leading-9 px-2 text-center select-none'>
                            Masaya Ekle
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MenuCard