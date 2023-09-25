import Image from 'next/image'
import Burger from "@/pages/Burger";
import Header from "@/components/Header";
import Navigate from "@/components/Navigate";
import BreakFast from "@/pages/BreakFast";

export default function Home() {
    return (

        <main className="flex min-h-screen flex-col bg-app-bg2  ">
            <Header/>
            <Navigate/>
            <div className="mx-auto w-full  md:max-w-xl lg:max-w-7xl">
                <BreakFast/>
                <Burger/>
            </div>

        </main>
    );
}
