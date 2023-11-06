import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
function AddEqModal({setOpenAddEqpmntModal}) {
        let [ operatorName, setoperatorName] = useState('');
        let [ operatorType, setoperatorType] = useState('');
        let [ plateNumber, setplateNumber] = useState('');
        let [ remark, setRemark] = useState('')

        const handleSubmit = async (e) =>{
            e.preventDefault()
            try {
            const tk_value = localStorage.getItem('token'); 
            const role = localStorage.getItem('role'); 
            const response = await axios({
                method: 'POST',
                url: `http://localhost:5002/api/equipmentMaintenanceForm/${role}`,
                data: {
                operatorName: operatorName,
                operatorType: operatorType,
                plateNumber: plateNumber,
                remark: remark
            },
                headers: {
                authorization: 'Bearer ' + tk_value,
            },
        })
if(response.data.status === 'success'){
        window.location.pathname = "/Registration"

    }
    } catch (error) {
    console.log(error.response.data.error.statusCode, error.response.data.message); 
      // Handle any errors that occur during the request
    }
        }
        return (
            // Overlay
            <div className='w-[90vw] h-screen fixed left-[280px] top-0 flex justify-center items-center bg-black bg-opacity-50'>
                {/* Modal background */}
                <div className='w-3/5 py-6 px-5  border-b rounded-2xl bg-white shadow-lg'>
                    {/* Model content container */}
                    <div className='w-full h-full rounded-xl'>
                        {/* Modal Header */}
                        <div className='m5 w-full h-10 border-b'>
                            <h1 className='float-left text-xl font-extrabold'>Add new equipment</h1>
                            <button className='float-right' onClick={()=> setOpenAddEqpmntModal(false)}><FontAwesomeIcon className=' text-red-500 w-7 h-7' icon={faXmarkCircle}/></button>
                        </div>
                        
                        <div className='w-full m5'>
                            {/* Form */}
                            <form className='p-5'>
        
                                <div className='w-full flex flex-wrap'>
                                    <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                                        <label className='my-3 text-lg text-gray-600'>Operator name</label>
                                        <input required className='w-full border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800' value={operatorName} onChange={(e) => setoperatorName(e.target.value)} type='text' placeholder='Operator name'></input>
                                    </div>
        
                                    <div className='w-full md:w-1/3 px-3'>
                                        <label className='my-3 text-lg text-gray-600'>Operator type</label>
                                        <select required value={operatorType} onChange={(e) => setoperatorType(e.target.value)} className='w-full h-12 flex border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800'>Operator type<FontAwesomeIcon className='pl-44 justify-center items-center pt-1' icon={faChevronDown}/>
                                            <option value="" disabled> Operator Type</option>
                                            <option value="Internal">Internal</option>
                                            <option value="External">External</option>
                                        </select>
                                    </div>
        
                                    <div className='w-full md:w-1/3 px-3'>
                                        <label className='my-3 text-lg text-gray-600'>Plate Number</label>
                                        <input required className='w-full border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800' value={plateNumber} onChange={(e) => setplateNumber(e.target.value)} type='text' placeholder='Equipment name'></input>
                                    </div>

                                    <div className='w-full md:w-1/1 px-3'>
                                        <label className='my-3 text-lg text-gray-600'>Remark</label>
                                        <textarea maxlength="250" remark setRemark className='w-full border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800' value={remark} onChange={(e) => setRemark(e.target.value)} type='text' placeholder='Write a description, memo or a remark...'></textarea>
                                    </div>
        
                                    <div className='w-full md:w-1/1 px-3'>
                                        <button className='w-full rounded-md bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-5 my-3' type='submit' onClick = {handleSubmit} >Add</button>
                                    </div>
        
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
export default AddEqModal