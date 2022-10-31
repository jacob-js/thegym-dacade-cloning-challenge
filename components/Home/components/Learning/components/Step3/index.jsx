import React from 'react'

function Step3() {
  return (
    <div className="grid px-5 justify-items-center mt-16 lg:mt-45.5">
        <div className="text-center mx-auto">
            <h1 className="text-color text-center font-medium text-2xl lg:text-4xl leading-11 tracking-tight relative">
                Claim NEAR certificate
                <div className="hidden lg:block absolute top-0 -mt-38% left-40%">
                    <img src="/icon/arrow-step3.svg" alt="" />
                </div>
            </h1>
            <p className="text-gray-500 font-normal text-lg leading-6 text-center"><span className="hidden lg:block"> Upon course completion, receive the NEAR dev 101<br/> certificate as an NFT on your NEAR wallet.</span><span className="block lg:hidden">Upon course completion, receive the NEAR dev 101 certificate as an NFT on your NEAR wallet.</span></p>
        </div>
        <div className="lg:w-161 h-46.5 lg:h-90.5 mt-8 lg:mt-20">
            <img src="https://dacade-nearbalkans.netlify.app/_ipx/w_3840,q_75/%2F_next%2Fstatic%2Fmedia%2Fcertificate.b19083db.png?url=%2F_next%2Fstatic%2Fmedia%2Fcertificate.b19083db.png&w=3840&q=75" alt="" />
        </div>
    </div>
  )
}

export default Step3