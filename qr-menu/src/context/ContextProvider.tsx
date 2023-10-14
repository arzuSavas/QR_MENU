import React, {createContext, useState} from "react";
import App from "next/app";
import Navigate from "@/components/Navigate";
import {IMenuCard} from "@/types/menu_card";

export type contextType = {
    openOrderModal: boolean;
    setOpenOrderModal: (value: boolean) => void;
    orderCard: IMenuCard[];
    setOrderCard: (value: IMenuCard[]) => void;
    count: number;
    setCount: (value: number) => void;
}
export const Context = createContext<contextType>({
    openOrderModal: false,
    setOpenOrderModal: () => {
    },
    orderCard: [],
    setOrderCard: () => {
    },
    count: 1,
    setCount: () => {
    },
});

const ContextProvider = (props: { children: React.ReactNode }) => {
    const [openOrderModal, setOpenOrderModal] = useState(false);
    const [orderCard, setOrderCard] = useState<IMenuCard[]>([])
    const [count, setCount] = useState<number>(0)


    return (
        <Context.Provider value={{openOrderModal, setOpenOrderModal, orderCard, setOrderCard, count, setCount}}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider