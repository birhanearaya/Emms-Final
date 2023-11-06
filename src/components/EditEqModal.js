import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'

const role = localStorage.getItem('role');

export const EditEqModal = ({setOpenEditEqpmntModal, selectedRowId}) => {
        let [ operatorName, setOperatorName] = useState('');
        let [ operatorType, setOperatorType] = useState('');
        let [ plateNumber, setPlateNumber] = useState('');
        let [ remark, setRemark] = useState('');
        let [ activityRemark, setActivityRemark] = useState('');
        let [ exitDate, setExitDate] = useState('');

React.useEffect(() => {
    
    async function fetchData() {
    const tk_value = localStorage.getItem('token');
    const role = localStorage.getItem('role'); 
    const response = await axios({
        method: 'GET',
        url: `http://localhost:5002/api/equipmentMaintenanceForm/${role}/${selectedRowId}`,
        headers: {
        authorization: 'Bearer ' + tk_value,
        },
    });
        const { operatorName, operatorType, plateNumber, remark } = response.data.doc;
        setOperatorName(operatorName);
        setOperatorType(operatorType);
        setPlateNumber(plateNumber);
        setRemark(remark);
    }
    fetchData();



    async function fetchWOFData() {
    const tk_value = localStorage.getItem('token');
    const role = localStorage.getItem('role'); 
    const WOFResponse = await axios({
        method: 'GET',
        url: `http://localhost:5002/api/equipmentMaintenanceForm/${role}/${selectedRowId}`,
        headers: {
        authorization: 'Bearer ' + tk_value,
        },
    });
        const { operatorName, operatorType, plateNumber, remark } = WOFResponse.data.doc;
        setOperatorName(operatorName);
        setOperatorType(operatorType);
        setPlateNumber(plateNumber);
        setRemark(remark);
    }
    fetchWOFData();
},[selectedRowId]);

const handleUpdate = async (e) =>{
            e.preventDefault()
            try {
            const tk_value = localStorage.getItem('token'); 
            const response = await axios({
                method: 'PATCH',
                url: `http://localhost:5002/api/equipmentMaintenanceForm/detailEditByeqAdminD/${selectedRowId}`,
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

const handleConfirmForMechanic = async (e) => {
    e.preventDefault()
    try {     
    const tk_value = localStorage.getItem('token');
    // const dateToString = JSON.stringify(exitDate);
    const dateToString = exitDate.toString();
    await axios({
        method: 'PATCH',
        url: `http://localhost:5002/api/equipmentMaintenanceForm/mechanic/createWof/${selectedRowId}`,
        headers: {
        authorization: 'Bearer ' + tk_value,
        },data: {
            remark: remark,
            activityDescription: activityRemark,
            exitDate: dateToString
        },
    });
    //   console.log(response.data); // Handle the response from the server
      // if successful -> 
    window.location.pathname = "/Approvals"

    } catch (error) {
    console.log(error.response.data.error.statusCode, error.response.data.message);
    }
}

        return (
            // Overlay
            <div className='w-[90vw] h-[100vh] fixed left-[280px] top-0 flex justify-center items-center bg-black bg-opacity-20'>
                {/* Modal background */}
                <div className='w-3/5 py-6 px-5  border-b rounded-2xl bg-white shadow-lg'>
                    {/* Model content container */}
                    <div className='w-full h-full rounded-xl'>
                        {/* Modal Header */}
                        <div className='m5 w-full h-10 border-b'>
                            <h1 className='float-left text-xl font-extrabold'>Update equipment</h1>
                            <button className='float-right' onClick={()=>setOpenEditEqpmntModal(false)}><FontAwesomeIcon className=' text-red-500 w-7 h-7' icon={faXmarkCircle}/></button>
                        </div>
                        <div className='w-full m5'>
                            {/* Form */}
                            <form className='p-5'>
                                <div className='w-full flex flex-wrap'>
                                    {role === "eqAdmin" &&(
                                        <>
                                            <div className='text-left w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                                            <label className='my-3 text-lg text-gray-600'>Operator name</label>
                                            <input required className='w-full border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800' value={operatorName} onChange={(e) => setOperatorName(e.target.value)} type='text' placeholder='Operator name'></input>
                                            </div>
                
                                            <div className='text-left w-full md:w-1/3 px-3'>
                                                <label className='my-3 text-lg text-gray-600'>Operator type</label>
                                                <select required value={operatorType} onChange={(e) => setOperatorType(e.target.value)} className='w-full h-12 flex border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800'>Operator type<FontAwesomeIcon className='pl-44 justify-center items-center pt-1' icon={faChevronDown}/>
                                                    <option value="" disabled> Operator Type</option>
                                                    <option value="Internal">Internal</option>
                                                    <option value="External">External</option>
                                                </select>
                                            </div>
                
                                            <div className='text-left w-full md:w-1/3 px-3'>
                                                <label className='my-3 text-lg text-gray-600'>Plate Number</label>
                                                <input required className='w-full border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800' value={plateNumber} onChange={(e) => setPlateNumber(e.target.value)} type='text' placeholder='Equipment name'></input>
                                            </div>
                                        </>
                                    )}

                                    <div className='text-left w-full md:w-1/1 px-3'>
                                        <label className='my-3 text-lg text-gray-600'>Remark</label>
                                        <textarea required maxlength="250" className='w-full border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800' value={remark} onChange={(e) => setRemark(e.target.value)} type='text' placeholder='Write a description, memo or a remark...'></textarea>
                                    </div>
                                    {role === "mechanic"&&(
                                        <>
                                            <div className='text-left w-full md:w-1/1 px-3'>
                                                <label className='my-3 text-lg text-gray-600'>Activity Remark</label>
                                                <textarea required maxlength="250" className='w-full border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800' value={activityRemark} onChange={(e) => setActivityRemark(e.target.value)} type='text' placeholder='Write the activities you have made...'></textarea>
                                            </div>
                                            <input required className='w-full border rounded-md border-gray-400 py-4 px-3 my-3 mx-3 text-lg text-gray-800' value={exitDate}  onChange={(e) => setExitDate(e.target.value)}  type="date"></input>
                                            <div className='w-full md:w-1/1 px-3'>
                                                <button  onClick={handleConfirmForMechanic} className='w-full rounded-md bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-5 my-3' type='button' >Update</button>
                                            </div>
                                        </>
                                    )}

                                    {role === "eqAdmin" &&(
                                        <div className='w-full md:w-1/1 px-3'>
                                            <button  onClick={handleUpdate} className='w-full rounded-md bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-5 my-3' >Update</button>
                                        </div>
                                    )}
                                    {role === "inspector" &&(
                                        <div className='w-full md:w-1/1 px-3'>
                                            <button  onClick={handleUpdate} className='w-full rounded-md bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-5 my-3' >Update</button>
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }