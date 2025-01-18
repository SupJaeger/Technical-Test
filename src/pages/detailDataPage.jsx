import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DetailPage = () => {
  const { year, month } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/viewData?year=${year}&month=${month}`)
      .then(response => response.json())
      .then(data => {
        // Filter data to match year and month from transactionDate
        const filteredData = data.filter(item => {
          const transactionDate = new Date(item.transactionDate);
          return transactionDate.getFullYear() === parseInt(year) && (transactionDate.getMonth() + 1) === parseInt(month);
        });
        
        // Update each item’s status to "Success" or "Fail"
        const updatedData = filteredData.map(item => ({
          ...item,
          status: item.status === 0 ? "Success" : "Fail",  // Change status value
        }));
        
        setData(updatedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setData([]);
      });
  }, [year, month]);

  if (data === null) {
    return <div>Loading...</div>;
  }

  if (data.length === 0) {
    return <div>No data available for {year}-{month}</div>;
  }

  const columns = Object.keys(data[0] || {});

  const formatDate = (dateString, locale = 'en-US') => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Intl.DateTimeFormat(locale, options).format(new Date(dateString));
  };

  const handleEditClick = (item) => {
    navigate(`/edit-data/${item.id}`); 
  };  

  return (
    <div className="container mt-5">
      <h2>Detail Data for {year}-{month}</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} scope="col">{col}</th>
            ))}
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col}>
                  {col === 'transactionDate' || col === 'createOn' 
                    ? formatDate(item[col]) 
                    : col === 'status' 
                    ? item[col] 
                    : item[col]
                  }
                </td>
              ))}
              <td>
                <button className="btn btn-primary" onClick={() => handleEditClick(item)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-secondary mt-3" onClick={() => navigate('/')}>
        Back
      </button>
    </div>
  );
};

export default DetailPage;
