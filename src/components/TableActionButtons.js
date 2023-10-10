import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AddEqModal from './AddEqModal';
import ActionModal from './ActionModal';



export const TableTitleAndAddButton = () => {
    const [openEqpmntModal, setOpenEqpmntModal] = useState(false);
    return(
        <>  
            {/* Title and add new EM section */}
                <div className="bg-blue-600">
                    <div className="float-left inline-flex flex-row">
                        <h3 className="text-xl font-bold">Equipment maintenance registration</h3>
                        <p className="text-base text-center text-blue-500 font-bold ml-3 pl-5 pr-5 pt-0.5 bg-blue-50 rounded-3xl"></p>
                    </div>
                    <div className="float-right mb-5">
                        <button className="mr-10 float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> setOpenEqpmntModal(true)}>
                            <FontAwesomeIcon className="pr-3 " icon= {faPlusCircle}/> Add new EM
                        </button>
                        {openEqpmntModal && <AddEqModal setOpenEqpmntModal = {setOpenEqpmntModal}/>}
                    </div>
                </div>
        </>
        )
    }
export const TableTitleAndApproveRejectButtons = () => {
    const [openActionModal, setOpenActionModal] = useState(false);
    return(
        <>  
            {/* Title and add new EM section */}
                <div className="bg-blue-600">
                    <div className="float-left inline-flex flex-row">
                        <h3 className="text-xl font-bold">Equipment maintenance registration</h3>
                        <p className="text-base text-center text-blue-500 font-bold ml-3 pl-5 pr-5 pt-0.5 bg-blue-50 rounded-3xl">{}290 in total</p>
                    </div>
                    <div className="float-right mb-5">
                        <button className="mr-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=> setOpenActionModal(true)}>
                            <FontAwesomeIcon  className="pr-3" icon= {faBars}/> Reject / Approve 
                        </button>
                        {openActionModal && <ActionModal setOpenActionModal = {setOpenActionModal}/>}
                    </div>
                </div>

        </>
        )
    }
