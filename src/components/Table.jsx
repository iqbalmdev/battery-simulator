import React from 'react';

// Default export: BatteryTable component in a single file (JSX + CSS)
// Usage: <BatteryTable data={myArray} />
// If no `data` prop is provided, the component uses sample data below.

export default function BatteryTable({ data }) {
  const rows = data && data.length ? data :   [];

  const setStatus = (battery) => {
    if (battery.voltage < 220 || battery.batteryHealth < 40) {
      return "🔴 Critical";
    } else if (battery.voltage < 230 || battery.batteryHealth < 50) {
      return "🟡 Warning";
    } else {
      return "🟢 Normal";
    }
  }
  // 213 42 20 
   
  return (
    <div className="battery-table-container">
      <h2 className="bt-title">Battery Status</h2>

      <div className="bt-table-wrap">
        <table className="bt-table" role="table" aria-label="Battery status table">
          <thead>
            <tr>

              <th scope="col">Sn.no</th>
              <th scope="col">Battery Name</th>
              <th scope="col">Voltage (V)</th>
              <th scope="col">Charge (%)</th>
              <th scope="col">Current (A)</th>
              <th scope="col">Status </th>
              <th scope="col">Reports at </th>
            </tr>
          </thead>
          <tbody>
            {rows.sort((a,b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((r, i) => (
              <tr key={i}>
                <td className="bt-name">{i+ 1}</td>
                <td className="bt-name">{r.name}</td>
                <td className="bt-voltage">{(r.voltage)}</td>
                <td className="bt-voltage">{(r.batteryHealth)}%</td>
                <td className="bt-voltage">{(r.current)}</td>
                <td className="bt-voltage">{setStatus(r)}</td>
                <td className="bt-voltage">{new Date(r.createdAt).toLocaleString()}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

