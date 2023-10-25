import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AddEqModal from './AddEqModal';
import ApprovalsModal from './ApprovalsModal';
import RepairModal from './RepairModal';



export const TableTitleAndAddButton = () => {
    const [openAddEqpmntModal, setOpenAddEqpmntModal] = useState(false);
    return(
        <>  
            {/* Title and add new EM section */}
                <div className="bg-blue-600">
                    <div className="float-left inline-flex flex-row">
                        <h3 className="text-xl font-bold">Equipment maintenance registration</h3>
                        <p className="text-base text-center text-blue-500 font-bold ml-3 pl-5 pr-5 pt-0.5 bg-blue-50 rounded-3xl"></p>
                    </div>
                    <div className="float-right mb-5">
                        <button className="mr-10 float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> setOpenAddEqpmntModal(true)}>
                            <FontAwesomeIcon className="pr-3 " icon= {faPlusCircle}/> Add new EM
                        </button>
                        {openAddEqpmntModal && <AddEqModal setOpenAddEqpmntModal = {setOpenAddEqpmntModal}/>}
                    </div>
                </div>
        </>
        )
    }

export const TableTitleAndApproveRejectButtons = () => {
    const [openApprovalsModal, setOpenApprovalsModal] = useState(false);
    return(
        <>  
            {/* Title and add new EM section */}
                <div className="bg-blue-600">
                    <div className="float-left inline-flex flex-row">
                        <h3 className="text-xl font-bold">Equipment maintenance approvals</h3>
                        <p className="text-base text-center text-blue-500 font-bold ml-3 pl-5 pr-5 pt-0.5 bg-blue-50 rounded-3xl">{}290 in total</p>
                    </div>
                    <div className="float-right mb-5">
                        <button className="mr-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=> setOpenApprovalsModal(true)}>
                            <FontAwesomeIcon  className="pr-3" icon= {faBars}/> Admit / Reject 
                        </button>
                        {openApprovalsModal && <ApprovalsModal setOpenApprovalsModal = {setOpenApprovalsModal}/>}
                    </div>
                </div>

        </>
        )
    }


export const TableTitleAndAdmitRejectButtons = () => {
    const [openRepairModal, setOpenRepairModal] = useState(false);
    return(
        <>  
            {/* Title and add new EM section */}
                <div className="bg-blue-600">
                    <div className="float-left inline-flex flex-row">
                        <h3 className="text-xl font-bold">Equipment maintenance shop</h3>
                        <p className="text-base text-center text-blue-500 font-bold ml-3 pl-5 pr-5 pt-0.5 bg-blue-50 rounded-3xl">{}290 in total</p>
                    </div>
                    <div className="float-right mb-5">
                        <button className="mr-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=> setOpenRepairModal(true)}>
                            <FontAwesomeIcon  className="pr-3" icon= {faBars}/> Reject / Approve 
                        </button>
                        {openRepairModal && <RepairModal setOpenRepairModal = {setOpenRepairModal}/>}
                    </div>
                </div>

        </>
        )
    }