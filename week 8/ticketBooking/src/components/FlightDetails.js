import React from "react";

function FlightDetails() {
  return (
    <div>
      <h2>Flight Details</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Fare</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Chennai</td>
            <td>Delhi</td>
            <td>₹5000</td>
          </tr>

          <tr>
            <td>AI202</td>
            <td>Bangalore</td>
            <td>Mumbai</td>
            <td>₹4500</td>
          </tr>

          <tr>
            <td>AI303</td>
            <td>Hyderabad</td>
            <td>Kolkata</td>
            <td>₹6000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FlightDetails;