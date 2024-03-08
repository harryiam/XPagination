import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pagination = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <div>Error: {error}</div>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            {/* Add other table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              {/* Add other table data as needed */}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button>Previous</button>
        <button>Next</button>
        {/* Add pagination functionality */}
      </div>
    </div>
  );
};

export default Pagination;
