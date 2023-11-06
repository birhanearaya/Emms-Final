import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faRoad } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'


export const AboutTRCECard = () => {

   


   
   
  

  return (
    <>
    <div className='w-[720px] h-[345px] rounded-xl m-10 p-10 overflow-hidden bg-[#E0EAFF]'>
      <h1 className='w-full mb-16 font-black text-4xl'>TRCE</h1> 
      <div className='float-left inline-flex flex-row self-center justify-center center'>
        <p className='text-xl mr-16 max-w-sm'>

Welcome to TRCE, With years of experience, our dedicated team of skilled technicians is committed to providing top-notch automotive solutions to keep your vehicle running smoothly. 
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
          An Enterprise Resource Planning (ERP) system is a powerful software solution designed to streamline and integrate various business processes within an organization.
        </p>
        <FontAwesomeIcon className="w-28 text-orange-500 h-auto pr-3" icon={faChartBar} />
      </div>
    </div>
    
    </>
  )
}

export const TotalRegisteredCard = () => {
  const [emfCount, setEmfCOunt] = React.useState([]);

  React.useEffect( () => {
    
    async function fetchData() {
    const tk_value = localStorage.getItem('token'); 

      const response = await axios({
        method: 'GET',
        url: `http://localhost:5002/api/equipmentMaintenanceForm/count`,
        headers: {
          authorization: 'Bearer ' + tk_value,
        },
      })
      setEmfCOunt(response.data.result);
      // TotalData = response.data.results
  }
  fetchData();

      

  }, [])
  return (
    
    <>
    <div className='w-[1000px] h-auto rounded-xl bg-[#D3E2EB] m-10 p-8 overflow-hidden '>
      <h1 className='w-full mb-4 font-black text-xl'>Total Registered Equipment</h1> 
      <div className='float-left inline-flex flex-row self-center justify-center center'>
        <p className='text-4xl font-extrabold mr-16 max-w-sm'>
          {emfCount} 
        </p>
      </div>
    </div>
    </>
  )
}


export const TotalDone = () => {

  
   const [emfDoneCount, setEmfDoneCOunt] = React.useState([]);

  React.useEffect( () => {
    
    async function fetchData() {
    const tk_value = localStorage.getItem('token'); 

      const response = await axios({
        method: 'GET',
        url: `http://localhost:5002/api/equipmentMaintenanceForm/countDone`,
        headers: {
          authorization: 'Bearer ' + tk_value,
        },
      })
      setEmfDoneCOunt(response.data.result);
      // TotalData = response.data.results
  }
  fetchData();

      

  }, [])



  return (
    <>
    <div className='w-[440px] h-auto rounded-xl bg-[#ECFDF3] m-10 p-8 overflow-hidden '>
      <h1 className='w-full mb-4 font-black text-xl'>Done</h1> 
      <div className='float-left inline-flex flex-row self-center justify-center center'>
        <p className='text-4xl font-extrabold mr-16 max-w-sm'>
          {emfDoneCount} 
        </p>
      </div>
    </div>
    </>
  )
}

export const InRepair = () => {
  const [emfRepairCount, setEmfRepairCOunt] = React.useState([]);

  React.useEffect( () => {
    
    async function fetchData() {
    const tk_value = localStorage.getItem('token'); 

      const response = await axios({
        method: 'GET',
        url: `http://localhost:5002/api/equipmentMaintenanceForm/countRepair`,
        headers: {
          authorization: 'Bearer ' + tk_value,
        },
      })
      setEmfRepairCOunt(response.data.result);
      // TotalData = response.data.results
  }
  fetchData();

      

  }, [])
  return (
    <>
    <div className='w-[460px] h-auto rounded-xl bg-[#FDF6EC] mx-10 p-8 overflow-hidden '>
      <h1 className='w-full mb-4 font-black text-xl'>In Repair</h1> 
      <div className='float-left inline-flex flex-row self-center justify-center center'>
        <p className='text-4xl font-extrabold mr-16 max-w-sm'>
          {emfRepairCount} 
        </p>
      </div>
    </div>
    </>
  )
}

export const InQueue = () => {

  const [emfQueueCount, setEmfQueueCount] = React.useState([]);

  React.useEffect( () => {
    
    async function fetchData() {
    const tk_value = localStorage.getItem('token'); 

      const response = await axios({
        method: 'GET',
        url: `http://localhost:5002/api/equipmentMaintenanceForm/countQueue`,
        headers: {
          authorization: 'Bearer ' + tk_value,
        },
      })
      setEmfQueueCount(response.data.result);
      // TotalData = response.data.results
  }
  fetchData();

      

  }, [])




  return (
    <>
    <div className='w-[980px] h-auto rounded-xl bg-[#D1EAFF] mx-10 p-8 overflow-hidden '>
      <h1 className='w-full mb-4 font-black text-xl'>In Queue</h1> 
      <div className='float-left inline-flex flex-row self-center justify-center center'>
        <p className='text-4xl font-extrabold mr-16 max-w-sm'>
          {emfQueueCount} 
        </p>
      </div>
    </div>
    </>
  )
}
