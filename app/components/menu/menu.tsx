import React from "react";
import { motion } from "motion/react";
import { menu } from "@/app/anim";
import { items } from "@/app/anim";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu({ setIsActive }: {setIsActive: (isActive: boolean) => void}) {

  // const pathname = usePathname()
  const pathname = usePathname() ?? '';

  return(
    <div className="overflow-hidden">
      <motion.div variants={menu} initial="closed" animate="open" exit='closed' className="w-full h-dvh fixed top-0 left-0 bg-warm z-30 flex
      items-center justify-center lg:hidden text-shallow backdrop-blur-lg">
        <motion.div variants={items} initial="closed" animate="open" exit='closed' className="flex flex-col items-center justify-center text-4xl gap-4">
          <Link onClick={() => setIsActive(false)} href={'/'} className="hover1 flex items-center justify-center cursor-pointer">
            <div className={`${pathname === '/' ? 'left-dot' : ''} overflow-hidden flex items-center justify-center relative px-5`}>
              <div className="hover1-go relative leading-tight">
                <p className="font-bold absolute translate-y-[90%]">ETUSIVU</p>
                <p className="font-bold relative">ETUSIVU</p>
              </div>
            </div>
          </Link>
          <Link onClick={() => setIsActive(false)} target="_blank" href={'https://www.varaaheti.fi/yogas7/fi/yoga_s7_oy/classes'} className="hover1 flex items-center justify-center cursor-pointer">
            <div className="overflow-hidden flex items-center justify-center">
              <div className="hover1-go relative leading-tight">
                <p className="font-bold absolute translate-y-[90%]">VARAA</p>
                <p className="font-bold relative">VARAA</p>
              </div>
            </div>
          </Link>
          <Link onClick={() => setIsActive(false)} href={'https://3dmagazine.aflip.in/e585a148c9.html'} target="_blank" className="hover1 flex items-center justify-center cursor-pointer">
            <div className="overflow-hidden flex items-center justify-center">
              <div className="hover1-go relative leading-tight">
                <p className="font-bold absolute translate-y-[91%]">OHJAAJA</p>
                <p className="font-bold relative">OHJAAJA</p>
              </div>
            </div>
          </Link>
          <Link onClick={() => setIsActive(false)} href={'/contact'} className="hover1 flex items-center justify-center cursor-pointer">
            <div className={`${pathname.startsWith('/contact') ? 'left-dot' : ''} overflow-hidden flex items-center justify-center relative px-5`}>
              <div className="hover1-go relative leading-tight">
                <p className="font-bold absolute translate-y-[94%]">YHTEYSTIEDOT</p>
                <p className="font-bold relative">YHTEYSTIEDOT</p>
              </div>
            </div>
          </Link>
          <Link onClick={() => setIsActive(false)} href={'/yrityksille'} className="hover1 flex items-center justify-center cursor-pointer">
            <div className={`${pathname.startsWith('/yrityksille') ? 'left-dot' : ''} overflow-hidden flex items-center justify-center relative px-5`}>
              <div className="hover1-go relative leading-tight">
                <p className="font-bold absolute translate-y-[90%]">YRITYKSILLE</p>
                <p className="font-bold relative">YRITYKSILLE</p>
              </div>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
