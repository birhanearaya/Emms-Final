import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import AddEqModal from './AddEqModal';

const role = localStorage.getItem('role');

export const TableTitleAndAddButton = () => {
    const [openAddEqpmntModal, setOpenAddEqpmntModal] = useState(false);
    return(
        <>  
            {/* Title and add new EM section */}
                <div className="bg-blue-600">
                    <div className="float-left inline-flex flex-row">
                        <h3 className="text-xl font-bold">Equipment maintenance registration</h3>
                    </div>
                    
                    { role === "eqAdmin" &&(
                    <div className="float-right mb-5">
                        <button className="float-left bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> setOpenAddEqpmntModal(true)}>
                        <FontAwesomeIcon className="pr-3 " icon= {faPlusCircle}/> Add new EM
                        </button>
                        <button className="mr-10 float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> setOpenAddEqpmntModal(true)}>
                            <FontAwesomeIcon className="pr-3 " icon= {faPlusCircle}/> Add new EM
                        </button>
                        {openAddEqpmntModal && <AddEqModal setOpenAddEqpmntModal = {setOpenAddEqpmntModal}/>}
                    </div>

                    )}
                </div>
        </>
        )
    }