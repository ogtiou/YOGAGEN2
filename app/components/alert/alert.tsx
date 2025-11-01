'use client'
import { X } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";

export default function Alert() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return(
    <div className="overflow-hidden">
        <div className="fixed bottom-0 left-0 w-full flex mb-8 items-center justify-center z-20 pointer-events-none">
            <div className="bg-[#fcf6ec] gap-6 py-2 px-2 mx-1 lg:px-6 rounded-2xl backdrop-blur-lg flex items-center justify-between">
              <div className="flex flex-col items-start">
                <p className="font-black text-sm md:text-base select-none pl-1">
                  Studio sulkeutuu 31.12.2025
                </p>
                <p className="pl-1 hidden lg:block">
                  Muistathan käyttää kaikki 
                  hankkimasi kortit määräaikaan mennessä, sillä niitä ei tulla korvaamaan
                </p>
              </div>
                <div className="flex items-center justify-center gap-2 text-warm pointer-events-auto">
                  <Link onClick={() => setIsVisible(false)} href={'/luelisaa'} className="px-5 py-2 bg-black rounded-xl font-bold button1 hover3">
                      {/* lue lisää */}
                    <div className="flex items-center justify-center font-bold text-warm">
                      <p className="relative uppercase text-nowrap text-center">Lue lisää</p>
                      {/* <p className="absolute opacity-0 text-warm blur-lg hover3-go2">
                          <CalendarClock size={'20px'}/>
                      </p> */}
                    </div>
                  </Link>
                  {/* <a href="/" className="px-5 py-2 bg-black rounded-xl font-bold">Varaa</a> */}
                  <p onClick={() => setIsVisible(false)} className="p-2 cursor-pointer bg-black rounded-xl button1">
                    <X/>
                  </p>
                </div>
            </div>
        </div>
    </div>
  )
}
