import '../index.css'
import { Table } from '../components/Table'
import { TableTitleAndApproveRejectButtons } from '../components/TableActionButtons';
export const Approvals = () => {
  return <>
  <div className="PageContainer">
    <TableTitleAndApproveRejectButtons/>
    <Table/>  
  </div>
</>
};
