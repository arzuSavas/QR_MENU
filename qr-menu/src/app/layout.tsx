"use client"
import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import ContextProvider from "@/context/ContextProvider";


const inter = Inter({subsets: ['latin']})


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <ContextProvider>
            {children}
        </ContextProvider>
        </body>
        </html>
    )
}
