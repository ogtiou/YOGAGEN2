'use client'
import React from "react";

export default function Footer2() {

    const currentYear = new Date().getFullYear()

  return(
    <div className="overflow-hidden">
        <div className="absolute w-full flex bottom-0 left-0 justify-center h-[10rem]">
          <div className="absolute w-[95%] h-0.5 bg-black"></div>
          <div className="w-full flex items-center justify-center font-bold text-xs uppercase">
            <div className="absolute left-0 flex items-start flex-col mb-8 sm:mb-0 pl-5 lg:pl-12">
              <p>Särkiniementie 5</p>
              <p>Sisäänkäynti 5A rappu B, 5krs</p>
            </div>
            <div className="absolute bottom-0 mb-7 lg:mb-0 lg:relative lg:bottom-auto">&copy; {currentYear}, &copy; YOGAS7, &reg; ALL RIGHTS RESERVED</div>
            <div className="absolute right-0 flex items-end flex-col mb-8 sm:mb-0 pr-5 lg:pr-12 gap-0.5">
              <a href={'https://www.instagram.com/yogas7.fi/?igsh=NmpjY2psY3JhcWlw'} target="_blank" className="hover2 flex items-center justify-center cursor-pointer pt-[1rem]">
                <div className="overflow-hidden flex items-center justify-center">
                  <div className="hover2-go relative leading-tight">
                    <p className="absolute translate-y-[100%]">INSTAGRAM</p>
                    <p className="relative">INSTAGRAM</p>
                  </div>
                </div>
              </a>
              <a href={'https://www.facebook.com/people/YOGA-S7/61564305294721/?mibextid=LQQJ4d&rdid=4sybVItLIhP557VH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FCjcB12YwpKuSpZua%2F%3Fmibextid%3DLQQJ4d'} 
              className="hover2 flex items-center justify-center cursor-pointer pb-[1rem]" target="_blank">
                <div className="overflow-hidden flex items-center justify-center">
                  <div className="hover2-go relative leading-tight">
                    <p className="absolute translate-y-[100%]">FACEBOOK</p>
                    <p className="relative">FACEBOOK</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}
