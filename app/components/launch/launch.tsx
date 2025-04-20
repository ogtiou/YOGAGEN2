"use client"
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);


export default function Launch() {

    const overlay = useRef(null)
    const text = useRef(null)

    useGSAP(() => {

        gsap.set(text.current, {
          filter: "blur(16px)",
          opacity: 0,
          y: "55px",
          scale: 0.95
        })
    
        const tl = gsap.timeline({
          defaults: {
            duration: 1.5,
            ease: 'power4.inOut'
          },
          delay: 0.1,
          onStart: () => {
            document.documentElement.style.overflow = 'hidden';
          },
          onComplete: () => {
            document.documentElement.style.overflow = '';
          }
        }) 
    
        tl.to(text.current, {
          filter: "blur(0px)",
          opacity: 1,
          y: "0px",
          scale: 1,
          ease: 'back.inOut',
          duration: 1.75
        }).to(text.current, {
          opacity: 0,
          scale: 0.8,
        }, "-=0.1").to(overlay.current, {
          opacity: 0,
          userSelect: 'none',
          pointerEvents: 'none',
          duration: 1,
          ease: 'power3.inOut'
        }, "-=0.2")
      }, [text, overlay])

  return(
    <div className="overflow-hidden">
        <div className="w-full h-dvh fixed bg-warm flex items-center justify-center z-[200]" ref={overlay}>
            <div className="font-gunsan text-[6rem] md:text-[7.5rem] lg:text-[9rem] xl:text-[12rem] 3xl:text-[25rem] flex items-center justify-center flex-col
            leading-[60%] text-shallow pointer-events-none select-none blur-lg opacity-0" ref={text}>
            <p className="translate-x-[-6.5%]">yogas7</p>
            <p className="translate-x-[6.5%]">studio</p>
          </div>
        </div>
    </div>
  )
}
