import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BatteryTable from './components/Table.jsx'
import { useFetchBatteries } from './hooks/usefecthBatteries.js'
function App() {
  const [count, setCount] = useState(0)

  const {battery,fetchBatteries} = useFetchBatteries();

  useEffect(()=>{
    let interval ;
    if(battery.length===10){
      clearInterval(interval);
      return;
    }else{
      interval = setInterval(() => {
      fetchBatteries();
    }, 2000);
    }
  
  },[battery]) 
  console.log("battery data in app.jsx",battery); 
  return (
    <div className='app'>
      
      <h1>Batteru Details</h1>

      <BatteryTable data={battery} />
     
    </div>
  )
}

export default App
