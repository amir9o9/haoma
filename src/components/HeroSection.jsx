function HeroSection() {
  return (
    <section id="hero" 
      className='relative min-h-screen flex flex-col justify-center bg-linear-to-b from-[#1F7D53] via-[#0bdf95] to-transparent'>
        <div className="container flex flex-row justify-between items-center">
            
            {/* left side */}
            <div className='w-[50%]'>
              <img src="/public/pictures/minimal logo for Hao.png"/>
            </div>

            {/* right side */}
            <div className='w-[50%] text-left text-white font-extrabold '>

                    <h2 className="cursor typewriter-animation w-full text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl tracking-tight">
                      Hamoa is not a School
                    </h2>
                    
                    <h2 className="cursor typewriter-animation-2 w-full text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl tracking-tight text-[#11422c]"> 
                      <br/>Its a Home.
                    </h2>
            </div>

        </div>
    </section>
  )
}
export default HeroSection