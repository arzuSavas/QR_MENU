"use client";
import React, {useContext, useEffect, useState} from 'react'
import MenuCard from "@/components/MenuCard";
import {IMenuCard} from "@/types/menu_card";
import {Context, contextType} from "@/context/ContextProvider";

const BreakFast = () => {
    const {orderCard, setOrderCard} = useContext<contextType>(Context);

    const [data, setData] = useState<IMenuCard[]>([])

    const addOrderCard = (event: React.MouseEvent<HTMLButtonElement>, value: IMenuCard) => {
        if (orderCard.some((item) => item.name === value.name)) {
            const updatedCart = orderCard.map((item) =>
                item.name === value.name ? {...item, quantity: item.quantity + value.quantity} : item
            );
            setOrderCard(updatedCart);
        } else {
            setOrderCard([...orderCard, {...value}]);
        }
    }

    const handleIncrementAmount = (event: React.MouseEvent<HTMLButtonElement>, value: string) => {
        if (data.some((item) => item.name === value)) {
            const updateCart = data.map((item) =>
                item.name === value ? {...item, quantity: item.quantity + 1} : item
            );
            setData(updateCart)
            console.log(updateCart.map((item) => item.quantity))
        }

    }
    const handleDecrementAmount = (event: React.MouseEvent<HTMLButtonElement>, value: string) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.name === value && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item
            )
        );

    }

    useEffect(() => {
        fetch(`http://localhost:3003/breakfast`)
            .then(results => results.json())
            .then(results => {
                setData(results);
                console.log(results)
            })

    }, []);
    return (
        <div className=" grid mt-20">
            <h1 className="text-component-header font-bold font-fantasy  text-3xl mx-0 my-5">Kahvaltı</h1>
            <div className="my-6  grid sm:grid-cols-2 gap-8 ">
                {data?.map((breakfast: any, index: any) => (
                    <MenuCard
                        key={index}
                        data={breakfast}
                        quantity={breakfast.quantity}
                        name={breakfast.name}
                        dsc="2 Adet Seçeceğiniz Sandviç + Patates Kızartması (Orta) + 1 L. İçecek "
                        img={breakfast.img}
                        price={breakfast.price}
                        handleIncrementAmount={handleIncrementAmount}
                        handleDecrementAmount={handleDecrementAmount}
                        onAddOrderCard={addOrderCard}
                    />


                ))}

            </div>
        </div>
    )
}

export default BreakFast