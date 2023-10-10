import React 
from "react";
import { useTable, usePagination} from "react-table";
import eqpmnt_reg from ".././././emdb.json";
import { MyColumns } from "./MyColumns";



export const Table = () => {
  // const [column, setColumn] = useState();
  // const [record, setRecord] = useState();

  // useEffect(()=>{
  //   fetch('http://localhost:8000/eqpmnt_reg')
  //   .then(res => res.json())
  //   .then(data=>{
  //     setColumn(React.useMemo(() => eqpmnt_reg,[]));
  //     setRecord(data.eqpmnt_reg)
  //   })
  // },[]);

    const data = React.useMemo(() => eqpmnt_reg /*this is where the API goes*/, []);
    const columns =  React.useMemo(() => MyColumns,[]/*Column titles*/);


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
      prepareRow } = useTable({data,columns},usePagination)

    const {pageIndex} = state

  return (
    <>
      <div className="rounded-lg pr-10 pl-10 bg-white p-3 text-gray-800 h-screen w-full">
        {/* Title and add new EM section */}
  {/* Table */}
        <div className="h-[820px] w-[1500px]">
          <table className='pt-10 border-t w-full'{...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr className="border-b border-b-gray-300" {...headerGroup.getHeaderGroupProps()}>
                  
                  {headerGroup.headers.map((column) => (
                    <th className="verflow-hidden m-3 p-3 text-base font-bold tracking-wide text-left"{...column.getHeaderProps()}>{column.render("Header")}
                    </th>))}
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr className="border-b border-gray-200" {...row.getRowProps()}>
                    <input className="" type="checkbox"></input>
                    {row.cells.map((cell) => (
                      <td className="h-5 bo overflow-hidden p-3 text-left" {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-5">
              <div className="float-left">
                <span>Showing {' '}</span>
                <strong>{pageIndex + 1}{' '}</strong>0f{' '}<strong>{pageOptions.length}{' '}</strong>pages
                  </div>  
                  <div className="float-right">
                    <button className="outline outline-offset-2 outline-gray-300 text-gray-600 font-bold px-4 rounded-md disabled:text-gray-50" onClick={()=>nextPage()} disabled = {!canNextPage}>Next</button>
                    <button className="ml-5 outline outline-offset-2 outline-gray-300 text-gray-600 font-bold px-4 rounded-md" onClick={()=>previousPage()} disabled = {!canPreviousPage}>Previous</button>
                  </div>            
            </div>
      </div>
    </>
  );
};
