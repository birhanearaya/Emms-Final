import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
function AddEqModal({setOpenAddEqpmntModal}) {
        const [ opName, setOpName] = useState('');
        const [ oPType, setOpType] = useState('');
        const [ equipment, setEquipmet] = useState('');
        const [ equipmentID, setEquipmentID] = useState('');
        const [ remark, setRemark] = useState('');

        const handleSubmit = (e) =>{
            e.preventDefault()
            const registration ={opName,oPType,equipment,equipmentID,remark}
            console.log(registration); //This is where the write to DB will go
        }

        return (
            // Overlay
            <div className='w-[1650px] h-screen fixed left-[280px] top-0 flex justify-center items-center bg-black bg-opacity-50'>
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
                            <form onSubmit={handleSubmit} className='p-5'>
        
                                <div className='w-full flex flex-wrap'>
                                    <div className='w-full md:w-2/3 px-3 mb-6 md:mb-0'>
                                        <label className='my-3 text-lg text-gray-600'>Operator name</label>
                                        <input required className='w-full border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800' value={opName} onChange={(e) => setOpName(e.target.value)} type='text' placeholder='Operator name'></input>
                                    </div>
        
                                    <div className='w-full md:w-1/3 px-3'>
                                        <label className='my-3 text-lg text-gray-600'>Operator type</label>
                                        <select required value={oPType} onChange={(e) => setOpType(e.target.value)} className='w-full flex border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800'>Operator type<FontAwesomeIcon className='pl-44 justify-center items-center pt-1' icon={faChevronDown}/>
                                            <option value="">Operator Type</option>
                                            <option value="Internal">Internal</option>
                                            <option value="External">External</option>
                                        </select>
                                    </div>
        
                                    <div className='w-full md:w-1/2 px-3'>
                                        <label className='my-3 text-lg text-gray-600'>Equipment</label>
                                        <input required className='w-full border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800' value={equipment} onChange={(e) => setEquipmet(e.target.value)} type='text' placeholder='Equipment name'></input>
                                    </div>
        
                                    <div className='w-full md:w-1/2 px-3'>
                                        <label className='my-3 text-lg text-gray-600'>Equipment ID</label>
                                        <input required className='w-full border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800' value={equipmentID} onChange={(e) => setEquipmentID(e.target.value)} type='text' placeholder='Equipment ID'></input>
                                    </div>
        
                                    <div className='w-full md:w-1/1 px-3'>
                                        <label className='my-3 text-lg text-gray-600'>Remark</label>
                                        <textarea maxlength="250" className='w-full border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800' value={remark} onChange={(e) => setRemark(e.target.value)} type='text' placeholder='Write a description, memo or a remark...'></textarea>
                                    </div>
        
                                    <div className='w-full md:w-1/1 px-3'>
                                        <button className='w-full rounded-md bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-5 my-3' type='text' placeholder='E'>Add</button>
                                    </div>
                                    <p>{opName}</p> <p>{oPType}</p> <p>{equipment}</p> <p>{equipmentID}</p> <p>{remark}</p>
        
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          )
    }

export default AddEqModal