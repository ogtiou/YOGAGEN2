import Footer2 from "../components/footer/footer2";


export default function Contact() {

  return(
    <div className="overflow-hidden">
      <div className="w-full h-screen bg-warm flex items-center justify-center flex-col relative">
        {/* <Image src={img} alt="img" className="absolute"/> */}
        <div className="flex absolute mb-[10vh] sm:mb-[5%] gap-8 items-center flex-col text-[#000000d7] uppercase font-sans font-black lg:font-bold 
        lg:gap-6 text-2xl lg:text-3xl xl:text-5xl 3xl:text-6xl">
          <p className="text-4xl xl:text-7xl 3xl:text-8xl leading-none text-center">ota yhteyttä:</p>
          <div className="flex flex-col items-center gap-2 lg:gap-0">
            <a href={'tel:+358505224550'} className="hover2 flex items-center justify-center cursor-pointer">
              <div className="overflow-hidden flex items-center justify-center">
                <div className="hover2-go relative leading-tight">
                  <p className="absolute translate-y-[100%]">P. +358 50 522 4550</p>
                  <p className="relative">P. +358 50 522 4550</p>
                </div>
              </div>
            </a>
            <a href={'mailto:rajusanna@gmail.com'} className="hover2 flex items-center justify-center cursor-pointer">
              <div className="overflow-hidden flex items-center justify-center">
                <div className="hover2-go relative leading-tight">
                  <p className="absolute translate-y-[100%]">rajusanna7@gmail.com</p>
                  <p className="relative">rajusanna7@gmail.com</p>
                </div>
              </div>
            </a>
            <a href={'https://www.facebook.com/people/YOGA-S7/61564305294721/?mibextid=LQQJ4d&rdid=4sybVItLIhP557VH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FCjcB12YwpKuSpZua%2F%3Fmibextid%3DLQQJ4d'} 
            target="blank" className="hover2 flex items-center justify-center cursor-pointer"> 
              <div className="overflow-hidden flex items-center justify-center">
                <div className="hover2-go relative leading-tight">
                  <p className="absolute translate-y-[100%]">FACEBOOK: @YOGAS7</p>
                  <p className="relative">FACEBOOK: @YOGAS7</p>
                </div>
              </div>
            </a>
            <a target="blank" href={'https://www.instagram.com/yogas7.fi/?igsh=NmpjY2psY3JhcWlw'} className="hover2 flex items-center justify-center cursor-pointer">
              <div className="overflow-hidden flex items-center justify-center">
                <div className="hover2-go relative leading-tight">
                  <p className="absolute translate-y-[100%]">INSTAGRAM: @YOGAS7</p>
                  <p className="relative">INSTAGRAM: @YOGAS7</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <Footer2/>
      </div>
    </div>
  )
}
