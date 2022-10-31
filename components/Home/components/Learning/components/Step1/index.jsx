import React from 'react'

function Step1() {
  return (
    <div className="lg:mt-45.5 mt-16 gap-y-4 px-5.5 lg:px-0 lg:max-w-235 mx-auto flex lg:flex-row flex-col-reverse lg:justify-between items-center"><div class=" font-primary text-center lg:text-left learning-step"><h1 className="text-color font-medium text-2xl text-center lg:text-left lg:text-4xl leading-11 -tracking-wide">Open NEAR wallet</h1>
    <p className="text-gray-500 font-normal text-base lg:text-lg lg:leading-6 pt-1.5"><span className="hidden lg:block">Opening a NEAR wallet is the first step and<br/> essential part of joining the NEAR community<br/> as well as starting this course.</span><span className="block lg:hidden">Opening a NEAR wallet is the first step and an essential part of joining the NEAR community as well as starting this course.</span></p>
    <a className="cursor-pointer" href="https://wallet.near.org/"><button type="button" className="font-normal text-gray-800 text-base mt-8  border-gray-800 border px-6  focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent border-solid border rounded-full px-5 py-3 rounded-4xl inline-block">Create wallet</button></a></div>
    <div className="relative">
        <div className="learning-step__gradient h-120 w-full max-w-120 absolute -top-2/3 z-0 left-1/5 hidden lg:block"></div>
        <div className="lg:w-74 lg:h-74 w-45 h-45 relative z-20">
            <img className='block max-w-full' alt="" aria-hidden="true" src="https://dacade-nearbalkans.netlify.app/_ipx/w_640,q_75/%2F_next%2Fstatic%2Fmedia%2Fnear.3a79378e.png?url=%2F_next%2Fstatic%2Fmedia%2Fnear.3a79378e.png&w=640&q=75" />
        </div>  
    </div></div>
  )
}

export default Step1