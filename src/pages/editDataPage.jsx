import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditDataPage = () => {
  const { id } = useParams();  
  const [formData, setFormData] = useState({
    productID: '',
    productName: '',
    amount: '',
    customerName: '',
    status: '',
    transactionDate: '',
    createBy: '',
    createOn: ''
  });
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      setError('Invalid ID');  // Handle invalid ID case
      setLoading(false);
      return;
    }
  
    // Fetch the existing data using the ID from the URL
    fetch(`http://localhost:5000/api/editData/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          setFormData({
            productID: data.productID || '',
            productName: data.productName || '',
            amount: data.amount || '',
            customerName: data.customerName || '',
            status: data.status || '',
            transactionDate: data.transactionDate ? data.transactionDate.slice(0, 16) : '', 
            createBy: data.createBy || '',
            createOn: data.createOn ? data.createOn.slice(0, 16) : '' 
          });
          setLoading(false);
        } else {
          setError('Data not found');  // Error if data is not found
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the updated data to the API
    fetch(`http://localhost:5000/api/editData/${id}`, {  
      method: 'PUT',  
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          alert('Data updated successfully');
          navigate('/');  
        } else {
          alert('Failed to update data');
        }
      })
      .catch(error => console.error('Error updating data:', error));
  };

  // While loading, display loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there's an error, display the error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-5">
      <h1>Update Data Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productID" className="form-label">Product ID</label>
          <input
            type="text"
            className="form-control"
            id="productID"
            name="productID"
            value={formData.productID}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="customerName" className="form-label">Customer Name</label>
          <input
            type="text"
            className="form-control"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            className="form-control"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="">Select Status</option>
            <option value="0">Success</option>
            <option value="1">Fail</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="transactionDate" className="form-label">Transaction Date</label>
          <input
            type="datetime-local"
            className="form-control"
            id="transactionDate"
            name="transactionDate"
            value={formData.transactionDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="createBy" className="form-label">Created By</label>
          <input
            type="text"
            className="form-control"
            id="createBy"
            name="createBy"
            value={formData.createBy}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="createOn" className="form-label">Created On</label>
          <input
            type="datetime-local"
            className="form-control"
            id="createOn"
            name="createOn"
            value={formData.createOn}
            onChange={handleChange}
            required
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Update Data</button>
          <button type="button" className="btn btn-danger ms-2" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditDataPage;
