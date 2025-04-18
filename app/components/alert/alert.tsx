'use client'
import { CalendarClock, X } from "lucide-react";
import React, { useState } from "react";

export default function Alert() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return(
    <div className="overflow-hidden">
        <div className="fixed bottom-0 left-0 w-full flex mb-8 items-center justify-center z-20">
            <div className="bg-[#fcf6ecd1] gap-6 py-2 px-2 mx-1 lg:px-6 rounded-2xl backdrop-blur-lg flex items-center justify-between">
                <p className="font-black text-sm md:text-base select-none pl-1">5x kortti 50€ ajalla 18-21.4 sis. pilates & jooga</p>
                <div className="flex items-center justify-center gap-2 text-warm">
                  <a href={'https://www.varaaheti.fi/yogas7/fi/prepaids'} target="_blank" className="px-5 py-2 bg-black rounded-xl font-bold button1 hover3">
                      {/* ota yhteyttä */}
                    <div className="flex items-center justify-center font-bold text-warm">
                      <p className="relative hover3-go uppercase">varaa</p>
                      <p className="absolute opacity-0 text-warm blur-lg hover3-go2">
                          <CalendarClock size={'20px'}/>
                      </p>
                    </div>
                  </a>
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
