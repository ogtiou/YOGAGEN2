'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png"
import { usePathname } from "next/navigation";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Menu from "../menu/menu";

export default function Header() {

  const pathname = usePathname()
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    const html = document.documentElement;
  
    if (isActive) {
      html.classList.add('overflow-hidden');
    } else {
      html.classList.remove('overflow-hidden');
    }
  
    return () => {
      html.classList.remove('overflow-hidden');
    };
  }, [isActive]);

  return(
    <div className="overflow-hidden">
      <Link onClick={()=> setIsActive(false)} href={'/'}>
        <Image src={logo} alt="logo" className="fixed z-50 top-0 left-0 w-[5rem] ml-3 lg:ml-8 mt-3 select-none"/>
      </Link>
      <div className={`w-auto fixed top-0 right-0 flex items-center mix-blend-difference text-white my-4 z-50 select-none`}>
        {/* <Link href={'/'} className="font-bold">CONTACT</Link> */}
        <div className="lg:flex items-center hidden">
          <Link href={'/'} className="hover1 flex items-center justify-center px-2.5 py-6 cursor-pointer">
            <div className={`${pathname === '/' ? 'dot' : ''} overflow-hidden flex items-center justify-center`}>
              <div className="hover1-go relative leading-tight">
                <p className="font-bold absolute translate-y-[90%]">ETUSIVU</p>
                <p className="font-bold relative">ETUSIVU</p>
              </div>
            </div>
          </Link>
          <div className="w-0.5 h-5 bg-warm"></div>
          <Link target="_blank" href={'https://www.varaaheti.fi/yogas7/fi/yoga_s7_oy/classes'} className="hover1 flex items-center justify-center px-2 py-6 cursor-pointer">
            <div className="overflow-hidden flex items-center justify-center">
              <div className="hover1-go relative leading-tight">
                <p className="font-bold absolute translate-y-[90%]">VARAA</p>
                <p className="font-bold relative">VARAA</p>
              </div>
            </div>
          </Link>
          <div className="w-0.5 h-5 bg-warm"></div>
          <Link href={'https://3dmagazine.aflip.in/e585a148c9.html'} target="_blank" className="hover1 flex items-center justify-center px-2 py-6 cursor-pointer">
            <div className="overflow-hidden flex items-center justify-center">
              <div className="hover1-go relative leading-tight">
                <p className="font-bold absolute translate-y-[91%]">OHJAAJA</p>
                <p className="font-bold relative">OHJAAJA</p>
              </div>
            </div>
          </Link>
          <div className="w-0.5 h-5 bg-warm"></div>
          <Link href={'contact'} className="hover1 flex items-center justify-center px-2 py-6 cursor-pointer">
            <div className={`${pathname === '/contact' ? 'dot' : ''} overflow-hidden flex items-center justify-center`}>
              <div className="hover1-go relative leading-tight">
                <p className="font-bold absolute translate-y-[94%]">YHTEYSTIEDOT</p>
                <p className="font-bold relative">YHTEYSTIEDOT</p>
              </div>
            </div>
          </Link>
          <div className="w-0.5 h-5 bg-warm"></div>
          <Link href={'yrityksille'} className="hover1 flex items-center justify-center pl-2 pr-8 py-6 cursor-pointer">
            <div className={`${pathname === '/yrityksille' ? 'dot' : ''} overflow-hidden flex items-center justify-center`}>
              <div className="hover1-go relative leading-tight">
                <p className="font-bold absolute translate-y-[90%]">YRITYKSILLE</p>
                <p className="font-bold relative">YRITYKSILLE</p>
              </div>
            </div>
          </Link>
        </div>
        {/* menu button */}
        <div onClick={() => setIsActive(prev => !prev)} className="flex items-center justify-center pl-2 pr-3 py-6 cursor-pointer select-none lg:hidden">
          <div className={`overflow-hidden flex items-center justify-center`}>
            <div className={`flex items-center justify-center px-2 relative leading-tight transition-all duration-500 ease1
              ${isActive ? '-translate-y-[90%]' : 'translate-y-0'}`}>
              <p className="font-bold absolute translate-y-[90%]">CLOSE</p>
              <p className="font-bold relative">MENU</p>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isActive && <Menu setIsActive={setIsActive}/>}
      </AnimatePresence>
    </div>
  )
}
