import Image from 'next/image'
import Burger from "@/pages/Burger";
import Header from "@/components/Header";
import Navigate from "@/components/Navigate";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col">
          <Header/>
          <Navigate/>
          <Burger />
      </main>
  );
}
