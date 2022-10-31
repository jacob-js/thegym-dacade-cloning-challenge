import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className="lg:w-71% px-5.7 py-24 font-primary text-lg mx-auto text-color">
        <h6 class="text-center">
            Visit <span class="font-bold cursor-pointer"><a href="https://nearbalkans.org/" target="__blank">nearbalkans.org</a></span> and make sure to follow us on our social and community channels!
        </h6>
        <div className="lg:flex items-center pt-10 w-full lg:w-135 lg:mx-auto">
            <Link href="/" className='hidden lg:block'>
                <img src="/app/near-logo.png" alt="" className='w-30' />
            </Link>
            <div class="border-gray-200 border-solid h-9.5 border-r-2 mx-15 hidden lg:block"></div>
            <div className="flex-1 flex items-center justify-between">
                <i class="fa-brands fa-twitter text-2xl"></i>
                <i class="fa-brands fa-discord text-2xl"></i>
                <i class="fa-brands fa-telegram text-2xl"></i>
                <i class="fa-brands fa-facebook text-2xl"></i>
                <i class="fa-brands fa-linkedin text-2xl"></i>
                <i class="fa-brands fa-instagram text-2xl"></i>
                <i class="fa-brands fa-medium text-2xl"></i>
            </div>
        </div>
        <div class="lg:flex justify-center gap-10 pt-10">
            <div>
                <Link href="/" class="text-lg cursor-pointer text-center ">
                    <p>NEAR Balkans 2022</p>
                </Link>
            </div>
            <div>
                <a href="mailto: info@nearbalkans.org" class="text-lg cursor-pointer text-center ">
                    <p>info@nearbalkans.org</p>
                </a>
            </div>
            <div>
                <a href="https://dacade.org/privacy-policy/" class="text-lg cursor-pointer text-center ">
                    <p>Privacy Policy</p>
                </a>
            </div>
            <div>
                <a href="https://dacade.org/privacy-policy/" class="text-lg cursor-pointer text-center ">
                    <p>Cookie Policy</p>
                </a>
            </div>
            <div>
                <a class="text-lg cursor-pointer text-center ">
                    <p>Terms &amp; Conditions</p>
                </a>
            </div>
        </div>
        <h6 class="pt-8.5 text-center">
            NEAR Balkans Hub: Bosnia &amp; Herzegovina, Bulgaria, Croatia, Montenegro, North Macedonia, Serbia, and Slovenia
        </h6>
    </div>
  )
}

export default Footer