import '../index.css'
import {AboutERPCard, AboutTRCECard, TotalRegisteredCard, TotalDone, InRepair, Rejected, InQueue} from "../components/Cards"
export const General = () => {
  return (
    <>
    <div className="PageContainer">
      <div className='flex-row inline-flex'>
            <AboutTRCECard/>
            <AboutERPCard/>
        </div>
        <div className="flex-row inline-flex">
            <TotalRegisteredCard/>
            <TotalDone/>
        </div>
        <div className="flex-row inline-flex">
            <InRepair/>
            <Rejected/>
            <InQueue/>
        </div>
    </div>
    
  </>
  );
};
