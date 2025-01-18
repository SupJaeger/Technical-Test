import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('useEffect called');
    fetch('http://localhost:5000/api/groupData')
      .then(response => {
        console.log('Response received:', response);
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleButtonClick = (item) => {
    if (item.year && item.month) {
      navigate(`/details/${item.year}/${item.month}`);
    } else {
      console.error('Year or month is undefined:', item);
    }
  };

  const handleNavigate = () => {
    navigate('/add-data');
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Data from API</h1>
      {data ? (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Month</th>
                <th scope="col">Check Detail</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                item.year && item.month ? (
                  <tr key={index}>
                    <td>{item.year}</td>
                    <td>{item.month}</td>
                    <td>
                      <button
                        id={`${item.year}-${item.month}`}
                        className="btn btn-primary"
                        onClick={() => handleButtonClick(item)}
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ) : null
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-start mt-3">
            <button className="btn btn-success" onClick={handleNavigate}>
              Add new data
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;