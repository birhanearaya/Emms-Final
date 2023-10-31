import React,{useState} from 'react';
import axios from 'axios';
import { useTable, usePagination } from 'react-table';
import { EqColumns } from './Columns';
import { EditEqModal } from './EditEqModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const role = localStorage.getItem('role'); 

export const EqTable = () => {

  const [data, setData] = React.useState([]);
  const [openEditEqpmntModal, setOpenEditEqpmntModal] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);
  let [documentCount, setDocumentCount] = useState(null);



  React.useEffect(() => {
    async function fetchData() {
      const tk_value = localStorage.getItem('token');
      const role = localStorage.getItem('role'); 

      const response = await axios({
        method: 'GET',
        url: `http://localhost:5002/api/equipmentMaintenanceForm/${role}`,
        headers: {
          authorization: 'Bearer ' + tk_value,
        },
      });

      const responseCount = await axios({
        method: 'GET',
        url: `http://localhost:5002/api/equipmentMaintenanceForm/count`,
        headers: {
          authorization: 'Bearer ' + tk_value,
        },
      });
      setDocumentCount(responseCount.data.result);
      
      setData(response.data.doc);
    }
    fetchData();
  }, []);

  const columns = React.useMemo(() => EqColumns, []);


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    prepareRow,
  } = useTable({ data, columns }, usePagination);

  const rowIndex = state.pageIndex * state.pageSize;
  


  const { pageIndex } = state;

  const getCellBackgroundColor = (cellData) => {
    if (cellData === 'Queue') {
      return 'bg-orange-200 text-center';
    } else if (cellData === 'Repair') {
      return 'bg-purple-200 text-center ';
    }else if (cellData === 'Done') {
      return 'bg-green-200 text-center ';
    }
     else {
      return '';
    }
  };

  
  const handleConfirmForInspector = async (selectedRowId) => {
    try {     
      const tk_value = localStorage.getItem('token');
    const role = localStorage.getItem('role');  
      const response = await axios({
        method: 'PATCH',
        url: `http://localhost:5002/api/equipmentMaintenanceForm/${role}/${selectedRowId}`,
        headers: {
        authorization: 'Bearer ' + tk_value,
        },
    });
      console.log(response.data); // Handle the response from the server
      // if successful -> 
      window.location.pathname = "/Registration"

    } catch (error) {
      console.log(error.response.data.error.statusCode, error.response.data.message);

    }
  };
  const handleConfirmForMechanic = async (selectedRowId) => {
    try {     
      const tk_value = localStorage.getItem('token');
    const role = localStorage.getItem('role');  
      const response = await axios({
        method: 'PATCH',
        url: `http://localhost:5002/api/equipmentMaintenanceForm/${role}/${selectedRowId}`,
        headers: {
        authorization: 'Bearer ' + tk_value,
        },
    });
      console.log(response.data); // Handle the response from the server
      // if successful -> 
      window.location.pathname = "/Registration"

    } catch (error) {
      console.log(error.response.data.error.statusCode, error.response.data.message);
      
    }
  };

  const handleDelete = async (selectedRowId) => {
    try {     
      const tk_value = localStorage.getItem('token');
    const role = localStorage.getItem('role');  
      const response = await axios({
        method: 'DELETE',
        url: `http://localhost:5002/api/equipmentMaintenanceForm/${role}/${selectedRowId}`,
        headers: {
        authorization: 'Bearer ' + tk_value,
        },
    });
      console.log(response.data); // Handle the response from the server
      // if successful -> 
      window.location.pathname = "/Registration"

    } catch (error) {
      console.log(error.response.data.error.statusCode, error.response.data.message);
      
      // handleError()
      // setErrorMessage(error.response.data.message)
    }
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
};
// const charLimit = (remarkString) =>{
    

// };
  return (
    <>
      <div className="rounded-lg pr-10 pl-10 bg-white mt-10 p-3 text-gray-800 h-screen w-full">
        {/* Title and add new EM section */}
        {/* Table */}
        <div className="h-auto  w-full lg:w-3/3 md:w-2/3 sm:w-1/">
          <table className='w-full h-full' {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr className="border-b border-b-gray-300" {...headerGroup.getHeaderGroupProps()}>
                  <th>#</th>
                  {headerGroup.headers.map((column) => (
                    <th className="verflow-hidden m-3 px-3 py-5 text-base font-bold text-left" {...column.getHeaderProps()}>{column.render("Header")}
                    </th>
                  ))}
                  <th className='text-left'>Actions</th>
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {page.map((row, index) => {
                prepareRow(row);
                const rowRoleNumber = rowIndex + index + 1;
                return (
                  <tr className="border-b border-gray-200" {...row.getRowProps()}>
                    <td className="overflow-hidden p-3">{rowRoleNumber}</td>
                    {row.cells.map((cell) => (
                      <td
                        className={`overflow-hidden m-3 px-6 py-3   ${getCellBackgroundColor(cell.value)}`}
                        {...cell.getCellProps()}
                      >
                        {cell.column.id === 'createdAt' ? formatDate(cell.value) : cell.render("Cell")}
                        {/* {cell.column.id === 'remark' ? charLimit(cell.value) : cell.render("Cell")} */}

                        {/* {cell.render("Cell")} */}
                      </td>
                    ))}
                    <div className='mt-5'>
                      {role !== "mechanic"&&(
                          <button>
                              <FontAwesomeIcon
                              className="self-center justify-center bg-yellow-600 p-2 rounded-md mt-2 hover:bg-yellow-700 text-white"
                              onClick={() => {
                                setSelectedRowId(row.original.id);
                                setOpenEditEqpmntModal(true);
                              }}
                              icon={faPencil}
                              />
                              {openEditEqpmntModal && (
                              <EditEqModal
                              setOpenEditEqpmntModal={setOpenEditEqpmntModal}
                              selectedRowId={selectedRowId}
                              />
                            )}
                        </button>
                      )}
                      {role === "eqAdmin"&&(
                        <button  onClick={()=>handleDelete(row.original.id)} >
                          <FontAwesomeIcon className="mx-3 self-center justify-center bg-red-400 p-2 rounded-md mt-2 hover:bg-red-800 text-white" icon={faTrash} /></button>
                      )}
                      {row.original.status === "Queue" && role === "inspector"&&(
                        <button onClick={() =>handleConfirmForInspector(row.original.id)}>
                            <FontAwesomeIcon className="mx-3 self-center justify-center bg-green-600 p-2 rounded-md mt-2 hover:bg-green-900 text-white" icon={faCheck} />
                            </button>
                      )}

                      { role === "mechanic" &&(
                        <button onClick={() =>handleConfirmForMechanic(row.original.id)}>
                            <FontAwesomeIcon className="m-3 self-center justify-center bg-green-600 p-2 rounded-md mt-2 hover:bg-green-900 text-white" icon={faCheck} />
                            </button>
                      )}

                    </div>
                  </tr>
                );
              })}
            </tbody>
          </table>
        {documentCount === 0 &&(
          <p className="text-gray-600 text-center text-5xl font-bold py-4 mt-16">No Records Found</p>
        )}
        </div>
        <div className="mt-5">
          <div className="float-left">
            <span>Showing {' '}</span>
            <strong>{pageIndex + 1}{' '}</strong>0f{' '}<strong>{pageOptions.length}{' '}</strong>pages
          </div>
          <div className="float-right">
            <button className="mr-5 outline outline-offset-2 outline-gray-300 text-gray-600 font-bold px-4 rounded-md" onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
            <button className="outline outline-offset-2 outline-gray-300 text-gray-600 font-bold px-4 rounded-md disabled:text-gray-50" onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

