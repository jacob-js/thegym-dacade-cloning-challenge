import React from 'react'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'

function Learning() {
  return (
    <div>
      <div className="content">
        <div class="grid mt-16 justify-items-center text-center text-color text-dark-100 font-medium text-[32px] lg:text-5xl leading-7 lg:leading-[60px] tracking-[-0.02em]">Making your NEAR <br/>learning easy.</div>
        <Step1 />
        <Step2 />
        <Step3 />
      </div>
      <div class="w-full bg-white course overflow-hidden mt-42">
        <div class="lg:px-37 flex lg:flex-row flex-col-reverse justify-between items-center">
          <div class="relative text-center lg:text-left">
            <h1 class="text-color font-medium text-2xl lg:text-4xl leading-11 tracking-tight">
              NEAR Development 101
            </h1>
            <button type="button" class="font-normal relative z-10 text-color text-base mt-4  focus:outline-none cursor-pointer leading-4 w-fit border-solid border rounded-full px-5 py-3 rounded-4xl inline-block">
              Start The Course
            </button>
            <div class="course__gradient-bg w-266.75 h-60 top-5% -left-15% absolute hidden lg:block"></div>
          </div>
          <div class="lg:w-100 lg:h-100 w-45 h-45">
            <img src="https://dacade-nearbalkans.netlify.app/_ipx/w_1920,q_75/%2F_next%2Fstatic%2Fmedia%2FnearGrey.ff4971b0.png?url=%2F_next%2Fstatic%2Fmedia%2FnearGrey.ff4971b0.png&w=1920&q=75" alt=""  className='max-w-full max-h-full' />
            <div class="course__gradient-bg w-fit max-w-[1135px] h-[159px] absolute z-0 top-80% left-1/5 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learning