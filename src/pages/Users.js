import '../index.css'
import { UsersTable } from '../components/UsersTable'; 
export const Users = () => {
  return (
    <>
      <div className="PageContainer">
        <h1 className='float-left text-xl font-extrabold'>Users</h1>
        <UsersTable/>  
      </div>
    </>
  );
};
