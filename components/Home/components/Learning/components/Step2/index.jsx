import React from 'react'

function Step2() {
  return (
    <div className="lg:mt-52 lg:px-0 lg:max-w-235 mx-auto mt-16 px-5.5 flex gap-x-44.75 lg:flex-row flex-col gap-y-4 items-center">
        <div className="z-50">
            <div className=" z-10 relative lg:w-74 lg:h-74 w-45 h-45">
                <img src="/img/target.svg" alt="" />
                <div className="target-logo top-38% right-70% absolute h-120 w-120 z-0 hidden lg:block"></div>
            </div>
        </div>
        <div className="text-center lg:text-left">
            <h1 className="text-color font-medium text-2xl lg:text-4xl leading-11 tracking-tight relative">Complete the course
                <div className="absolute top-0 -mt-38% -left-24% hidden lg:block">
                    <img src="/icon/arrow-step2.svg" alt="" />
                </div>
            </h1>
            <p className="text-gray-500 text-lg leading-6 mt-6">In three simple modules, learn:</p>
            <div className="">
                <div className="flex gap-x-3 gap-y-2.5 lg:items-end items-center lg:flex-row flex-col mt-6">
                    <div className="lg:h-8 lg:w-8 h-4.5 w-4.5">
                        <img src="https://dacade-nearbalkans.netlify.app/_ipx/w_256,q_75/%2F_next%2Fstatic%2Fmedia%2Fessential.daf4f0ca.png?url=%2F_next%2Fstatic%2Fmedia%2Fessential.daf4f0ca.png&w=256&q=75" alt="" />
                    </div>
                    <p className="text-gray-500 font-normal text-base lg:text-lg lg:leading-6 ">
                        Essential NEAR concepts
                    </p>
                </div>
                <div className="flex gap-x-3 gap-y-2.5 lg:items-end items-center lg:flex-row flex-col mt-[26px]">
                    <div className="lg:h-8 lg:w-8 h-4.5 w-4.5">
                        <img src="https://dacade-nearbalkans.netlify.app/_ipx/w_32,q_75/%2F_next%2Fstatic%2Fmedia%2Fcontract.ba589e37.png?url=%2F_next%2Fstatic%2Fmedia%2Fcontract.ba589e37.png&w=32&q=75" alt="" />
                    </div>
                    <p className="text-gray-500 font-normal text-base lg:text-lg lg:leading-6 ">
                        How to write smart contracts on NEAR
                    </p>
                </div>
                <div className="flex gap-x-3 gap-y-2.5 lg:items-end items-center lg:flex-row flex-col mt-[26px]">
                    <div className="lg:h-8 lg:w-8 h-4.5 w-4.5">
                        <img src="https://dacade-nearbalkans.netlify.app/_ipx/w_32,q_75/%2F_next%2Fstatic%2Fmedia%2Fcode.172d3d64.png?url=%2F_next%2Fstatic%2Fmedia%2Fcode.172d3d64.png&w=32&q=75" alt="" />
                    </div>
                    <p className="text-gray-500 font-normal text-base lg:text-lg lg:leading-6 ">
                        How to build dapps on the NEAR blockchain
                    </p>
                </div>
            </div>
        </div></div>
  )
}

export default Step2