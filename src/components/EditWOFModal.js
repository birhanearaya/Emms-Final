import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'

const role = localStorage.getItem('role');

export const EditWOFModal = ({setOpenEditEqpmntModal, selectedRowId}) => {
        let [ remark, setRemark] = useState('');
        let [ activityRemark, setActivityRemark] = useState('');
        let [ exitDate, setExitDate] = useState('');

React.useEffect(() => {

    async function fetchWOFData() {
    const tk_value = localStorage.getItem('token');
    const WOFResponse = await axios({
        method: 'GET',
        url: `http://localhost:5002/api/workOrderFormat/${selectedRowId}`,
        headers: {
        authorization: 'Bearer ' + tk_value,
        },
    });
        const {remark, activityDescription, exitDate } = WOFResponse.data.doc;
        setRemark(remark);
        setActivityRemark(activityDescription);
        setExitDate(exitDate);
    }
    fetchWOFData();
},[selectedRowId]);

const handleConfirmForMechanic = async (e) => {
    e.preventDefault()
    try {     
    const tk_value = localStorage.getItem('token');
    const dateToString = exitDate.toString();
    await axios({
        method: 'PATCH',
        url: `http://localhost:5002/api/workOrderFormat/${selectedRowId}`,
        headers: {
        authorization: 'Bearer ' + tk_value,
        },data: {
            remark: remark,
            activityDescription: activityRemark,
            exitDate: dateToString
        },
    });
    // console.log(response.data); // Handle the response from the server
    window.location.pathname = "/WOF"

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
                            <h1 className='float-left text-xl font-extrabold'>EMF Approvals</h1>
                            <button className='float-right' onClick={()=>setOpenEditEqpmntModal(false)}><FontAwesomeIcon className=' text-red-500 w-7 h-7' icon={faXmarkCircle}/></button>
                        </div>
                        <div className='w-full m5'>
                            {/* Form */}
                            <form className='p-5'>
                                <div className='w-full flex flex-wrap'>
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
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }