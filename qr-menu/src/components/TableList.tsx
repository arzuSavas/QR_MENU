"use client";

import React, {useEffect, useState} from 'react'
import {ITableList} from "@/types/table_list";

type Props = {
    onOpenModal: VoidFunction;
    onCloseModal: VoidFunction;
};
const TableList = ({onOpenModal, onCloseModal}: Props) => {
    const [data, setData] = useState<ITableList[]>([])
    const [selectedTable, setSelectedTable] = useState<string>("")

    useEffect(() => {
        const updateData = JSON.parse(localStorage.getItem("tableData") || "null");
        if (updateData){
            setData(updateData)
        }else{
            fetch(`http://localhost:3003/tableInfo`)
                .then(results => results.json())
                .then(results => {
                    setData(results);
                })
        }
    }, [selectedTable]);


    const handleSelectedTable = (event: React.MouseEvent<HTMLButtonElement>,value:string) => {
        setSelectedTable(selectedTable)
        setData((prevData) =>
            prevData.map((item) =>
                ( item.tableNo === value ? {...item, selected:true}:item)
            )
        );
        setTimeout(() => {
            onCloseModal();  // Modal'ı kapat
        }, 100);
    }
    useEffect(() => {
        if (selectedTable.length > 0) {
            localStorage.setItem("tableData", JSON.stringify(data));
        }
    }, [data]);

    return (
        <div>
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">

                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="  ">

                                    <div className="text-center items-center  ">
                                        <h3 className=" font-black text-component-header font-sans text-2xl"
                                            id="modal-title">Masa Numaranızı Seçiniz</h3>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 md:grid-cols-7 gap-4 mt-4 justify-items-center">
                                    {data.map((item)=>item.selected ?
                                        <div  className=" bg-component-header border-2 border-solid border-table-button rounded-lg text-white cursor-pointer inline-block font-semibold text-base leading-9 px-2 text-center select-none"
                                        >
                                            {item.tableNo}
                                        </div> :
                                        <button  className=" navigate_btn bg-btn-color border-b-4 border-r-4 border-l-2 border-t-2 border-solid border-table-button rounded-lg hover:bg-component-header hover:opacity-50 hover:text-white active:bg-component-header active:opacity-50 active:text-white cursor-pointer inline-block font-semibold text-base leading-9 px-2 text-center select-none"
                                                 onClick={()=>setSelectedTable(item.tableNo)}

                                        >
                                            {item.tableNo}
                                        </button>

                                    )}
                                </div>

                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex  sm:px-6 justify-between items-center">
                                <h3 className=" font-black text-component-header font-sans text-xl"
                                    id="modal-title">Seçilen Masa: {selectedTable}</h3>
                                <div className="max-[640px]:mt-3 items-center">
                                    <button type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-orange-700 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:mr-3 sm:w-auto "
                                            onClick={(e) => handleSelectedTable(e,selectedTable)}
                                    >onayla
                                    </button>
                                    <button type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={onCloseModal}
                                    >iptal
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default TableList