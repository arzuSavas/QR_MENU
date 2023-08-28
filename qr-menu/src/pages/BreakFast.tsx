"use client";
import React, {useEffect, useState} from 'react'
import MenuCard from "@/components/MenuCard";
import {IMenuCard} from "@/types/menu_card";

const BreakFast = () => {
    const [data, setData] = useState<IMenuCard[]>()
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
                        name={breakfast.name}
                        dsc="2 Adet Seçeceğiniz Sandviç + Patates Kızartması (Orta) + 1 L. İçecek "
                        img={breakfast.img}
                        price={breakfast.price}
                    />


                ))}

            </div>
        </div>
    )
}

export default BreakFast