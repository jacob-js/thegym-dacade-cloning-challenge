import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className="bg-white fixed top-0 z-[99] w-full">
      <div className="flex items-center my-[25px] lg:my-0 content">
        <div className="text-color flex items-center h-full">
          <Link href="/" className="text-color">
            <div className="flex items-center">
              <span><Image src="/app/logo.svg" alt="logo" width={39} height={39}  /></span>
              <span class="ml-2 hidden md:block text-zinc-700 font-bold text-lg">Dacade</span>
            </div>
          </Link>
          <div class="border-gray-200 h-[39px] border-solid border-r-2 lg:mx-[11px] mx-1.5"></div>
          <Link href="/">
            <Image width={120} height={39} src="/app/near-logo.png" className='hidden lg:block' alt='' />
            <Image width={29} height={29} src="/app/near-logo.svg" className='lg:hidden' alt='' />
          </Link>
        </div>
        <div className="flex text-black font-normal lg:text-lg text-base items-center ml-auto font-primary"><button type="button" className="hidden lg:block bg-transparent border-none text-color  focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent rounded-full px-5 py-3 rounded-4xl">Start The Course</button><a href="https://wallet.near.org/"><button type="button" className="ml-12 bg-zinc-700 text-white  focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent border-solid border rounded-full px-5 py-3 rounded-4xl inline-block">Create wallet</button></a></div>
      </div>
    </nav>
  )
}

export default Navbar