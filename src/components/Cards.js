import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faRoad } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-regular-svg-icons'

export const AboutTRCECard = () => {
  return (
    <>
    <div className='w-[720px] h-[345px] rounded-xl m-10 p-10 overflow-hidden bg-[#E0EAFF]'>
      <h1 className='w-full mb-16 font-black text-4xl'>TRCE</h1> 
      <div className='float-left inline-flex flex-row self-center justify-center center'>
        <p className='text-xl mr-16 max-w-sm'>
          Lorem ipsum dolor sit amet consectetur. Pulvinar suspendisse pulvinar eu purus in semper. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. 
        </p>
          <FontAwesomeIcon className="w-28 text-blue-500 h-auto pr-3" icon= {faRoad}/>
      </div>
    </div>
    
    </>
  )
}


export const AboutERPCard = () => {
  return (
    <>
    <div className='w-[720px] h-[345px] rounded-xl border-[#E0EAFF] border-4 m-10 p-10 overflow-hidden '>
      <h1 className='w-full mb-16 font-black text-4xl'>ERP</h1> 
      <div className='float-left inline-flex flex-row self-center justify-center center'>
        <p className='text-xl mr-16 max-w-sm'>
          Lorem ipsum dolor sit amet consectetur. Pulvinar suspendisse pulvinar eu purus in semper. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. 
        </p>
        <FontAwesomeIcon className="w-28 text-orange-500 h-auto pr-3" icon={faChartBar} />
      </div>
    </div>
    
    </>
  )
}

export const TotalRegisteredCard = () => {
  return (
    <>
    <div className='w-[1000px] h-auto rounded-xl bg-[#D3E2EB] m-10 p-8 overflow-hidden '>
      <h1 className='w-full mb-4 font-black text-xl'>Total Registered Equipment</h1> 
      <div className='float-left inline-flex flex-row self-center justify-center center'>
        <p className='text-4xl font-extrabold mr-16 max-w-sm'>
          1,298 
        </p>
      </div>
    </div>
    </>
  )
}


export const TotalDone = () => {
  return (
    <>
    <div className='w-[440px] h-auto rounded-xl bg-[#ECFDF3] m-10 p-8 overflow-hidden '>
      <h1 className='w-full mb-4 font-black text-xl'>Done</h1> 
      <div className='float-left inline-flex flex-row self-center justify-center center'>
        <p className='text-4xl font-extrabold mr-16 max-w-sm'>
          298 
        </p>
      </div>
    </div>
    </>
  )
}

export const InRepair = () => {
  return (
    <>
    <div className='w-[460px] h-auto rounded-xl bg-[#FDF6EC] mx-10 p-8 overflow-hidden '>
      <h1 className='w-full mb-4 font-black text-xl'>In Repair</h1> 
      <div className='float-left inline-flex flex-row self-center justify-center center'>
        <p className='text-4xl font-extrabold mr-16 max-w-sm'>
          298 
        </p>
      </div>
    </div>
    </>
  )
}


export const Rejected = () => {
  return (
    <>
    <div className='w-[460px] h-auto rounded-xl bg-[#FDECEC] mx-10 p-8 overflow-hidden '>
      <h1 className='w-full mb-4 font-black text-xl'>Rejected</h1> 
      <div className='float-left inline-flex flex-row self-center justify-center center'>
        <p className='text-4xl font-extrabold mr-16 max-w-sm'>
          298 
        </p>
      </div>
    </div>
    </>
  )
}

export const InQueue = () => {
  return (
    <>
    <div className='w-[440px] h-auto rounded-xl bg-[#D1EAFF] mx-10 p-8 overflow-hidden '>
      <h1 className='w-full mb-4 font-black text-xl'>In Queue</h1> 
      <div className='float-left inline-flex flex-row self-center justify-center center'>
        <p className='text-4xl font-extrabold mr-16 max-w-sm'>
          298 
        </p>
      </div>
    </div>
    </>
  )
}
