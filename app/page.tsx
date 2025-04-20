import Image from "next/image";
import img1 from "@/public/images/CarolinaFoto (2 of 2) 2-2.webp"
import studio1 from "@/public/images/IMG_8541 2-2.webp"
import studio2 from "@/public/images/img3.webp"
import studio3 from "@/public/images/IMG_9275.webp"
import Link from "next/link";
import Footer from "./components/footer/footer";
import { CalendarClock } from "lucide-react";
import Launch from "./components/launch/launch";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Launch/>
      {/* page 1 */}
      <div className="w-full h-screen flex items-center justify-center overflow-hidden bg-warm relative">
        {/* <video playsInline autoPlay muted loop className="absolute w-full h-full object-cover bg-[#252c20]">
          <source src="videos/yogavid.webm" type="video/webm"/>
          <source src="videos/yogavid.mp4" type="video/mp4"/>
        </video> */}
        <div className="absolute w-full h-full flex items-center justify-center overflow-hidden">
          <Image src={img1} alt="img" unoptimized className="w-full h-full object-cover scale-110"/>
        </div>
        <div className="absolute w-full h-full bg-[#80808017]"></div>
        <div className="relative flex items-center justify-center flex-col gap-3">
          <div className="font-gunsan text-[6rem] md:text-[7.5rem] lg:text-[9rem] xl:text-[12rem] 3xl:text-[25rem] flex items-center justify-center flex-col
        leading-[60%] text-warm pointer-events-none select-none">
            <p className="translate-x-[-6.5%]">yogas7</p>
            <p className="translate-x-[6.5%]">studio</p>
          </div>
          <div className="flex items-center justify-center gap-1 md:gap-2 font-black text-warm pointer-events-none select-none text-[0.7rem] xl:text-base">
            <p className="font-sans uppercase text-center">JOOGA</p>
            <div className="w-0.5 h-5 bg-warm"></div>
            <p className="font-sans uppercase text-center">PILATES</p>
            <div className="w-0.5 h-5 bg-warm"></div>
            <p className="font-sans uppercase text-center">LFC-LIFECOACHING</p>
            <div className="w-0.5 h-5 bg-warm"></div>
            <p className="font-sans uppercase text-center">ÄÄNIMALJAHOITO</p>
          </div>
          <Link href={'https://www.varaaheti.fi/yogas7/fi/yoga_s7_oy/classes'} target="_blank" 
          className="relative font-sans translate-y-12 text-[1rem] leading-normal uppercase font-bold 
          text-center bg-warm text-[#000000d0] overflow-hidden rounded-full px-6 py-3 button1 hover3
          hover:bg-green">
            <div className="flex items-center justify-center font-bold text text-shallow rounded-xl select-none">
              <p className="relative hover3-go w-[8rem]">varaa tunti</p>
              <p className="absolute opacity-0 text-warm blur-lg hover3-go2">
                  <CalendarClock size={'24px'}/>
              </p>
            </div>
          </Link>
        </div>
        {/* <div className="absolute top-0 mt-12">
          <Image src={logo2} alt="logo" unoptimized className="w-[6rem]"/>
        </div> */}
      </div>
      {/* page 2 */}
      <div className="w-full h-auto xl:h-screen bg-warm flex items-center justify-start flex-col overflow-hidden 
      gap-8 my-8 xl:my-0 xl:gap-16">
        <div className="w-auto flex flex-col items-center justify-center gap-8 mt-0 xl:mt-16">
          <p className="relative text-[#000000d7] font-sans font-semibold text-xl lg:text-2xl 3xl:text-3xl text-center uppercase">studiolla on kaikki tarvittavat välineet</p>
        </div>
        <div className="flex h-auto items-center flex-col lg:flex-row gap-8 mx-2">
          <Image src={studio2} alt="img" className="rounded-xl xl:rounded-none w-[30rem] lg:w-[18rem] xl:w-[22rem] 2xl:w-[30rem] 3xl:w-[45rem]"/>
          <Image src={studio1} alt="img" className="rounded-xl xl:rounded-none w-[30rem] lg:w-[18rem] xl:w-[22rem] 2xl:w-[30rem] 3xl:w-[45rem]"/>
          <Image src={studio3} alt="img" className="rounded-xl xl:rounded-none w-[30rem] lg:w-[18rem] xl:w-[22rem] 2xl:w-[30rem] 3xl:w-[45rem]"/>
        </div>
      </div>
      <Footer/>
      {/* page 3 */}
      {/* <div className="w-full h-screen bg-warm flex flex-col gap-6 overflow-hidden"></div> */}
    </div>
  );
}
