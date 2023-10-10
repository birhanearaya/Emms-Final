import '../index.css'
import { Table } from '../components/Table'
import { TableTitleAndAddButton } from "../components/TableActionButtons";

export const Registration = () => {
  return (
    <>
      <div className='PageContainer'>
        <TableTitleAndAddButton/>
        <Table/>  
      </div>
    </>

  )
}