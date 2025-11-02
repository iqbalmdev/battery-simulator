Build a small browser-based simulation that generates and visualizes live battery data for a single site.

You will not receive any starter files — start from scratch using your preferred setup (Vite, Create React App, or simple HTML/JS).
🧩 Requirements
1️⃣ Simulation Logic
Create a live data generator that runs in the browser using setInterval() (every 2 seconds).
It should produce random telemetry values for:
Voltage: 220–250 V
Current: 10–30 A
Battery %: 30–100 %
Maintain only the last 10 readings for each metric (rolling window).
For each new data point, calculate status:
🔴 Critical → Voltage < 220 or Battery < 40
🟡 Warning → Voltage < 230 or Battery < 50
🟢 Normal → otherwise


  id: '',
    name: '',
    capacity: 0,
    chargeLevel: 0,
    status: '',
    voltage: 0,
    current:0,
    BatteryHealth: "0%",
    createdAt:''
2️⃣ UI Requirements
Create a clean, responsive UI with:
A header showing “Gridian — Simulation Test”
Three metric cards showing:
The latest value of Voltage, Current, and Battery
A small colored dot for system status (red/yellow/green)
A simple line chart (Voltage vs. time) that updates as data changes.
Use any JS charting library (Chart.js / Recharts / ApexCharts / plain Canvas).
 

 components

 Table inlcues with header 

 hooks 

 hooks will trigger for every 2 sec 
 batteries 
 setBatteries 
 

 git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/iqbalmdev/battery-simulator.git
git push -u origin main