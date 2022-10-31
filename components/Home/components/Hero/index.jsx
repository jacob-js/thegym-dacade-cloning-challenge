import React from 'react'

function Hero() {
  return (
    <div class="content bg-white px-5.7 lg:px-0 font-primary relative lg:pt-32 pt-12 h-150 lg:h-125 w-full hero">
      <div class="hero__gradient_bg absolute lg:-top-127.5 -top-130 opacity-40 left-0 lg:-left-48 h-full w-2/4 z-50"></div>
      <div class="hero__gradient_bg absolute lg:-top-127.5 -top-130 opacity-40 right-0 lg:right-0 h-full w-2/5 z-50"></div>
      <div class=" text-center lg:w-227.5 mx-auto">
        <h1 class="lg:text-7xl lg:w-full w-50 mx-auto font-medium text-4xl text-color">Get <span class="hero__gradient__text">NEAR</span> Certified!</h1>
        <p class=" pt-5 pb-24 lg:text-5.5 text-lg hero-paragraph-color leading-7 text-gray-600">We, in NEAR Balkans, know how important it is to have regional and local support. Now you can become NEAR certified in a regional language of preference and connect with our team to support your further growth within the NEAR ecosystem.</p>
        <div class="mx-auto text-center "><a href="#learning"><i class="bi bi-arrow-down-circle text-7 opacity-30"></i></a></div>
      </div>
    </div>
  )
}

export default Hero