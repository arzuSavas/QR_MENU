import React, {createContext, useState} from "react";
import App from "next/app";
import Navigate from "@/components/Navigate";

export type contextType = {
    openOrderModal: boolean;
    setOpenOrderModal: (value: boolean) => void;
}
export const Context = createContext<contextType>({
    openOrderModal: false,
    setOpenOrderModal: () => {
    },
});

const ContextProvider = (props: { children: React.ReactNode }) => {
    const [openOrderModal, setOpenOrderModal] = useState(false);


    return (
        <Context.Provider value={{openOrderModal, setOpenOrderModal}}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider