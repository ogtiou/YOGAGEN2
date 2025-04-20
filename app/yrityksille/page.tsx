import React from "react";
import Footer from "../components/footer/footer";
import Link from "next/link";
import { Mail, MoveRight } from "lucide-react";

export default function Yrityksille() {
  return(
    <div className="overflow-hidden">
        {/* <div className="bg-warm w-full h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-10 w-[35rem] 3xl:w-[45rem]">
                <div className="w-[35rem] 3xl:w-[45rem]">
                    <p className="font-bold text-sm lg:text-lg 3xl:text-2xl uppercase text-center">Economy paketti 2h max 10 hlö 375€ + alv 14%</p>
                    <div className="flex flex-col font-bold uppercase text-xs lg:text-sm 3xl:text-base ml-[6.5rem] lg:ml-18 3xl:ml-[8rem]">
                        <p>- Yin- jooga 60min</p>
                        <p>- Ryhmävalmennus valitsemasta aiheesta 30min</p>
                        <p>- Purku, tee/pientä naposteltevaa 30min</p>
                    </div>
                </div>
                <div className="w-[35rem] 3xl:w-[45rem]">
                    <p className="font-bold text-sm lg:text-lg 3xl:text-2xl uppercase text-center">Business paketti 2h max 10 hlö 457€ + alv 14%</p>
                    <div className="flex flex-col font-bold uppercase text-xs lg:text-sm 3xl:text-base ml-[6.5rem] lg:ml-18 3xl:ml-[8rem]">
                        <p>- Pilatesharjoitus 30min</p>
                        <p>- Ryhmävalmennus valitsemasta aiheesta 30min</p>
                        <p>- Loppurentoutus 30min</p>
                        <p>- Purku, tee/pientä naposteltavaa 30min</p>
                    </div>
                </div>
                <div className="w-[35rem] 3xl:w-[45rem]">
                    <p className="font-bold text-sm lg:text-lg 3xl:text-2xl uppercase text-center">First-class paketti 2,5h max 10 hlö 487€ + alv 14%</p>
                    <div className="flex flex-col font-bold uppercase text-xs lg:text-sm 3xl:text-base ml-[6.5rem] lg:ml-18 3xl:ml-[8rem]">
                        <p>- Äänimaljarentoutus 60min</p>
                        <p>- Ryhmävalmennus valitsemasta aiheesta 30min</p>
                        <p>- Unelmakartan teko, tee/pientä naposteltavaa 60min</p>
                    </div>
                </div>
                <p className="text-center font-bold text-sm 3xl:text-base">Tulkaa työporukalla voimaan hyvin ja lataamaan akkuja. Visiot kirkastuvat, kun aivot
                    saavat levätä ja palautua rauhallisessa ympäristössä poissa työpaikan hälinästä. Tulkaa
                    juuri sellaisina kuin olette!
                </p>
                <p className="text-center font-bold text-sm 3xl:text-base">Fasten your seatbelt- tuolijooga
                    soveltuu toimistotyöntekijöille, kotona työpöydän ääressä ahertaville. 15min sovittuna
                    aikana kaikille halukkaille matalan kynnyksen tuolijoogaa etänä kotona tai työpaikalla.
                    Lyhyt ylävartalon liikuttelu laittaa veren liikkeelle ja tuo ryhtiä loppupäivään. Suosittu
                    ajankohta lounasaikaan. Sovi oma virkistys aikasi ja mahdollista tehokkuutta
                    työntekijöittesi päivään.
                </p>
                <Link href={'contact'} className="font-sans translate-y-3 text-[1rem] leading-normal uppercase font-bold 
                text-center bg-black text-warm rounded-full px-6 py-3 button1">
                    ota yhteyttä
                </Link>
            </div>
        </div> */}
        <div className="w-full h-auto 2xl:h-screen pb-12 pt-24 2xl:py-0 bg-warm flex relative flex-col justify-center items-center gap-8">
            <div className="flex flex-wrap items-center justify-center font-medium gap-6 mx-2">
                <Link href={'/contact'} className="relative flex items-center flex-col gap-2 w-[20rem] h-[24rem] p-6 border-2
                border-[#7e7e7e93] rounded-3xl overflow-hidden hover3 hover4 hover:border-[#000000b2]">
                    <div className="font-bold text-lg uppercase text-center">
                        <p>Economy paketti 2h max 10 hlö</p>
                    </div>
                    <p className="font-black px-3 py-1 text-sm bg-green text-white rounded-full">375€ + ALV 14%</p>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-start">
                            <div className="absolute bg-black w-2 h-2 mt-2"></div>
                            <p className="ml-4">Yin- jooga 60min</p>
                        </div>
                        <div className="flex items-start">
                            <div className="absolute bg-black w-2 h-2 mt-2"></div>
                            <p className="ml-4">Ryhmävalmennus valitsemasta aiheesta 30min</p>
                        </div>
                        <div className="flex items-start">
                            <div className="absolute bg-black w-2 h-2 mt-2"></div>
                            <p className="ml-4">Purku, tee/pientä naposteltevaa 30min</p>
                        </div>
                        <div className="flex items-center justify-center mt-13">
                            <div className="flex items-center justify-center px-18 py-2 font-black text bg-black text-warm rounded-xl">
                                <p className="relative translate-left w-[8rem]">OTA YHTEYTTÄ</p>
                                <p className="absolute right-[24%] opacity-0 blur-lg hover3-go2">
                                    <MoveRight size={'28px'}/>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={'/contact'} className="relative flex items-center flex-col gap-2 w-[20rem] h-[24rem] p-6 border-2
                border-[#7e7e7e93] rounded-3xl overflow-hidden hover3 hover4 hover:border-[#000000b2]">
                    <div className="font-bold text-lg uppercase text-center">
                        <p>Business paketti 2h max 10 hlö</p>
                    </div>
                    <p className="font-black px-3 py-1 text-sm bg-green text-white rounded-full">457€ + alv 14%</p>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-start">
                            <div className="absolute bg-black w-2 h-2 mt-2"></div>
                            <p className="ml-4">Pilatesharjoitus 30min</p>
                        </div>
                        <div className="flex items-start">
                            <div className="absolute bg-black w-2 h-2 mt-2"></div>
                            <p className="ml-4">Ryhmävalmennus valitsemasta aiheesta 30min</p>
                        </div>
                        <div className="flex items-start">
                            <div className="absolute bg-black w-2 h-2 mt-2"></div>
                            <p className="ml-4">Loppurentoutus 30min</p>
                        </div>
                        <div className="flex items-start mb-2">
                            <div className="absolute bg-black w-2 h-2 mt-2"></div>
                            <p className="ml-4">Purku, tee/pientä naposteltavaa 30min</p>
                        </div>
                        <div className="flex items-center justify-center mt-4">
                            <div className="flex items-center justify-center px-18 py-2 font-black text bg-black text-warm rounded-xl">
                                <p className="relative translate-left w-[8rem]">OTA YHTEYTTÄ</p>
                                <p className="absolute right-[24%] opacity-0 blur-lg hover3-go2">
                                    <MoveRight size={'28px'}/>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={'/contact'}className="relative flex items-center flex-col gap-2 w-[20rem] h-[24rem] p-6 border-2
                border-[#7e7e7e93] rounded-3xl overflow-hidden hover3 hover4 hover:border-[#000000b2]">
                    <div className="font-bold text-lg text-center uppercase">
                        <p>First-class paketti 2,5h max 10 hlö</p>
                    </div>
                    <p className="font-black px-3 py-1 text-sm bg-green text-white rounded-full">487€ + alv 14%</p>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-start">
                            <div className="absolute bg-black w-2 h-2 mt-2"></div>
                            <p className="ml-4">Äänimaljarentoutus 60min</p>
                        </div>
                        <div className="flex items-start">
                            <div className="absolute bg-black w-2 h-2 mt-2"></div>
                            <p className="ml-4">Ryhmävalmennus valitsemasta aiheesta 30min</p>
                        </div>
                        <div className="flex items-start mb-4">
                            <div className="absolute bg-black w-2 h-2 mt-2"></div>
                            <p className="ml-4">Unelmakartan teko, tee/pientä naposteltavaa 60min</p>
                        </div>
                        <div className="flex items-center justify-center mt-9">
                            <div className="flex items-center justify-center px-18 py-2 font-black text bg-black text-warm rounded-xl">
                                <p className="relative translate-left w-[8rem]">OTA YHTEYTTÄ</p>
                                <p className="absolute right-[24%] opacity-0 blur-lg hover3-go2">
                                    <MoveRight size={'28px'}/>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={'/contact'}className="relative flex items-center flex-col gap-2 w-[20rem] h-[24rem] p-6 border-2
                border-[#7e7e7e93] rounded-3xl overflow-hidden hover3 hover4 hover:border-[#000000b2]">
                    <div className="font-bold text-lg text-center uppercase">
                        <p>Fasten your seatbelt 15min</p>
                    </div>
                    <p className="font-black px-3 py-1 text-sm bg-green text-white rounded-full">KYSY HINTAA</p>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-start">
                            <div className="absolute bg-black w-2 h-2 mt-2"></div>
                            <p className="ml-4">Tuolijooga soveltuu toimistotyöntekijöille sekä 
                                kotona työpöydän ääressä ahertaville, esim. lounasaikaan.</p>
                        </div>
                        <div className="flex items-start">
                            <div className="absolute bg-black w-2 h-2 mt-2"></div>
                            <p className="ml-4">Lyhyt ylävartalon liikuttelu 
                                laittaa veren liikkeelle, tuo ryhtiä ja tehokuutta loppupäivään. 
                                </p>
                        </div>

                        <div className="flex items-center justify-center mt-2">
                            <div className="flex items-center justify-center px-18 py-2 font-black text bg-black text-warm rounded-xl">
                                <p className="relative translate-left w-[8rem]">OTA YHTEYTTÄ</p>
                                <p className="absolute right-[24%] opacity-0 blur-lg hover3-go2">
                                    <MoveRight size={'28px'}/>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="flex items-center flex-col">
                <div className="flex flex-col items-center w-[90%] xl:w-[30rem] gap-4">
                    <p className="text-center font-bold text-sm 3xl:text-base">Tulkaa työporukalla voimaan hyvin ja lataamaan akkuja. Visiot kirkastuvat, kun aivot
                        saavat levätä ja palautua rauhallisessa ympäristössä poissa työpaikan hälinästä.<br/> Tulkaa
                        juuri sellaisina kuin olette!
                    </p>
                </div>
                <Link href={'/contact'} className="font-sans text-[1rem] leading-normal uppercase font-bold 
                text-center bg-black text-warm rounded-2xl px-6 py-3 button1 mt-8 hover3">
                    {/* ota yhteyttä */}
                    <div className="flex items-center justify-center font-bold text text-warm">
                        <p className="relative hover3-go w-[8rem]">ota yhteyttä</p>
                        <p className="absolute opacity-0 text-warm blur-lg hover3-go2">
                            <Mail size={'24px'}/>
                        </p>
                    </div>
                </Link>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
