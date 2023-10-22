import '../index.css'
import { Table } from '../components/Table'; 
import {TableTitleAndAdmitRejectButtons} from '../components/TableActionButtons'
export const Repair = () => {
  return (
    <>
      <div className="PageContainer">
        <TableTitleAndAdmitRejectButtons/>
        <Table/>  
      </div>
    </>
  );
};
