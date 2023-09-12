// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import axios

// function TimeTableFetch() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Using axios to fetch data from the Django API
//     axios.get("https://api.nanocodes.com.ng/timetable/")
//       .then(response => {
//         setData(response.data); // Set the fetched data in state
//       })
//       .catch(error => {
//         console.error('API fetch error:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Django API Data</h2>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// export default TimeTableFetch;

