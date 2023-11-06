import React, { useState } from 'react';
import axios from 'axios';
import { useTable, usePagination } from 'react-table';
import { UsersColumn } from './Columns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { EditUserModal } from './EditUserModal';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const UsersTable = () => {
  const [data, setData] = React.useState([]);
  const [openEditUserModal,setOpenEditUserModal]=useState(false)
  const [selectedRowId,setSelectedRowId]=useState()
  const [searchString, setSearchString] = useState("");


  React.useEffect(() => {
    async function fetchData() {
      const tk_value = localStorage.getItem('token');

      const response = await axios({
        method: 'GET',
        url: `http://localhost:5002/api/users/`,
        headers: {
          authorization: 'Bearer ' + tk_value,
        },
      });

      setData(response.data.doc);
    }
    fetchData();
  }, []);

  const columns = React.useMemo(() => UsersColumn, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    // pageOptions,
    state,
    prepareRow,
  } = useTable({ data, columns }, usePagination);

  const rowIndex = state.pageIndex * state.pageSize;



  const getCellBackgroundColor = (cellData) => {
    if (cellData === 'eqAdmin') {
      return 'bg-blue-200 text-center';
    } else if (cellData === 'inspector') {
      return 'bg-purple-200 text-center ';
    }else if (cellData === 'mechanic') {
      return 'bg-green-200 text-center ';
    }
     else {
      return '';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
};

const handleDelete = async (selectedRowId) => {
    try {     
      const tk_value = localStorage.getItem('token');
      await axios({
        method: 'DELETE',
        url: `http://localhost:5002/api/users/${selectedRowId}`,
        headers: {
        authorization: 'Bearer ' + tk_value,
        },
    });
      // console.log(response.data); // Handle the response from the server
      // if successful -> 
      window.location.pathname = "/Users"

    } catch (error) {
      console.log(error.response.data.error.statusCode, error.response.data.message);
      
      // handleError()
      // setErrorMessage(error.response.data.message)
    }
  };

  const handleSearch=(searchString)=>{
  async function fetchData() {
  const tk_value = localStorage.getItem('token');

      const response = await axios({
        method: 'GET',
        url: `http://localhost:5002/api/users/search?q=${searchString}`,
        headers: {
          authorization: 'Bearer ' + tk_value,
        },
      });
      
      setData(response.data.doc);
    }
  fetchData();
  // console.log(data)
  // console.log(searchString)
}
  return (    
      <>

            {/* Search */}
        <div className="">
            <div>
              <div className=' w-full flex flex-row'>
                <input className='focus:border-[#3199F3] border-4 border-gray-300 mt-10 p-4 mr-5 mb-3 w-2/5 rounded-xl text-gray-700 text-xl pl-10' placeholder="Search" type="text" value={searchString} onChange={(e) => setSearchString(e.target.value)}></input>
                <button className='hover:bg-[#3199F3] hover:text-white text-[#3199F3] border-2 border-[#3199F3]  mr-96 mt-10 mb-3 p-4 w-1/5 rounded-xl text-xl' type="button" onClick={()=>handleSearch(searchString)}>
                  <FontAwesomeIcon className="pr-3 " icon= {faSearch}/>Search
                </button>

                  <button className='hover:bg-[#006BC7] bg-[#3199F3] mt-10 mb-3 py-4 w-1/5 rounded-xl text-white text-xl' onClick={() => {
                    window.location.pathname = "/Signup"
                    }}>
                    <FontAwesomeIcon className="pr-3 " icon= {faPlusCircle}/> Add User
                  </button>
              </div>
            </div>
        </div>

    <div className="rounded-lg pr-10 pl-10 bg-white mt-10 p-3 text-gray-800 h-screen w-[80vw]">
      <div className="h-auto">
        <div className="max-h-[75vh] overflow-auto">
          <table className='pt-10 border-t w-full' {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr className="border-b border-b-gray-300" {...headerGroup.getHeaderGroupProps()}>
                  <th>#</th>
                  {headerGroup.headers.map((column) => (
                    <th className="verflow-hidden m-3 p-3 text-base font-bold text-left" {...column.getHeaderProps()}>{column.render("Header")}
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
                        className={`overflow-hidden p-3 ${getCellBackgroundColor(cell.value)}`}
                        {...cell.getCellProps()}
                      >
                        {cell.column.id === 'createdAt' ? formatDate(cell.value) : cell.render("Cell")}
                        {/* {cell.render("Cell")} */}
                      </td>
                    ))}
                    <div className='flex-row justify-center center'>

                      <button><FontAwesomeIcon className="self-center justify-center bg-yellow-600 p-2 rounded-md mt-2 hover:bg-yellow-700 text-white" 
                      onClick={() => {
                                setSelectedRowId(row.original.id);
                                setOpenEditUserModal(true);
                              }}
                      icon={faPencil} />
                        {openEditUserModal && (
                              <EditUserModal
                              setOpenEditUserModalFromTable={setOpenEditUserModal}
                              selectedRowId = {selectedRowId}
                              />
                            )}
                      </button>
                      <button>
                        <FontAwesomeIcon className="mx-3 self-center justify-center bg-red-400 p-2 rounded-md mt-2 hover:bg-red-800 text-white" 
                        onClick={() => { handleDelete(row.original.id)
                              }}
                        icon={faTrash} />
                        </button>
                    </div>
                  </tr>
                );
              })}
            </tbody>
          </table>     
        </div>
      </div>
      <div className="float-right mt-10">
                <button className="mr-5 outline outline-offset-2 outline-gray-300 text-gray-600 font-bold px-4 rounded-md" onClick={() => previousPage()} disabled={!canPreviousPage}>
                  Previous
                </button>
                <button className="outline outline-offset-2 outline-gray-300 text-gray-600 font-bold px-4 rounded-md disabled:text-gray-50" onClick={() => nextPage()} disabled={!canNextPage}>
                  Next
                </button>
              </div>
      </div>
    </>
  );
};