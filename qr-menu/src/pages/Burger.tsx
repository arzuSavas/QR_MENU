"use client";

import React, {useEffect, useState} from 'react'

const Burger = () => {
    const [items, setItems] = useState()

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/breakfast`)
            .then(results => results.json())
            .then(results => {

                setItems(results)
                console.log(items)
            })

    }, []);
    return (
        <div>Burger</div>
    )
}

export default Burger