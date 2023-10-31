import '../index.css'
import { EqTable } from '../components/EqTable'
import { TableTitleAndAddButton } from "../components/TableActionButtons";

export const Registration = () => {
  return (
    <>
      <div className='PageContainer'>
        <TableTitleAndAddButton/>
        <EqTable/>  
      </div>
    </>

  )
}