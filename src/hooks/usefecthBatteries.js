import { useState } from "react"

const batterySchema = {
    id: '',
    name: '',
    capacity: 0,
    chargeLevel: 0,
    status: '',
    voltage: 0,
    current:0,
    BatteryHealth: "0%",
    createdAt:''
}

const statuses = [{name:"critical",value:"🔴 Critical "},{name:"warning",value:"🟡 Warning"},
{name:"nomal",value:"🟢 Normal"}

]
export const useFetchBatteries = () => {
   
    const [battery,setBatteries] = useState([]);

    const fetchBatteries = ()=>{
        setBatteries((prev)=>{
            if(prev.length>=10){
                return prev;
            }
            return [...prev, {
                id:new Date().getTime().toString(),
                name: `Battery ${prev.length + 1}`,
                capacity: Math.floor(Math.random() * 100) + 50,
                chargeLevel: Math.floor(Math.random() * 100),
               
                voltage:  100+ parseFloat((Math.random() * 12).toFixed(2)),
                current:parseFloat((Math.random() * 10).toFixed(2)),
                BatteryHealth: Math.floor(Math.random() * 100),
                createdAt: new Date().toISOString(),
                batteruyHealth: Math.floor(Math.random() * 100),
            }]
        })
    }

    return {battery, fetchBatteries}
}