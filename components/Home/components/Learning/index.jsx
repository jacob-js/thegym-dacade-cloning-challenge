import React from 'react'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'

function Learning() {
  return (
    <div>
      <div id="learning" class="grid mt-16 justify-items-center text-center text-color text-dark-100 font-medium text-[32px] lg:text-5xl leading-7 lg:leading-[60px] tracking-[-0.02em]">Making your NEAR <br/>learning easy.</div>
      <Step1 />
      <Step2 />
      <Step3 />
    </div>
  )
}

export default Learning