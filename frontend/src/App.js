// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from './components/button';

function App() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch reports from the backend
    axios
      .get('http://localhost:5000/api/reports')
      .then((response) => {
        setReports(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the reports!', error);
      });
  }, []);

  const handleClick = () => {
    console.log('Button clicked!');
};
 
 
  return (
    <div>
      <h1>Reports</h1>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            <h2>{report.title}</h2>
            <p>{report.content}</p>
          </li>
        ))}
      </ul>
      <Button text="Click Me" onClick={handleClick} />
    </div>
  );
}

export default App;
