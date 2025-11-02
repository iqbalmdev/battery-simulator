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
    batteryHealth: 0,
    createdAt:''
}

const statuses = [{name:"critical",value:"🔴 Critical "},{name:"warning",value:"🟡 Warning"},
{name:"nomal",value:"🟢 Normal"}

]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  

  export const useFetchBatteries = () => {
    const [battery, setBatteries] = useState([]);
  
    const fetchBatteries = () => {
      setBatteries((prev) => {
        let updated = [...prev];
  
        if (updated.length >= 10) {
           updated.pop();

        }
        updated.push({
          id: new Date().getTime().toString(),
          name: `Battery ${generateRandomString(5)}`,
          capacity: Math.floor(Math.random() * 100) + 50,
          chargeLevel: Math.floor(Math.random() * 100),
          voltage: getRandomInt(220, 250),
          current: getRandomInt(10, 30),
          createdAt: new Date().toISOString(),
          batteryHealth: getRandomInt(30, 100),
        });
  
        return updated;
      });
    };
  
    return { battery, fetchBatteries };
  };
  
  