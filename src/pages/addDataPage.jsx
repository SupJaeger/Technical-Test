import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddDataPage = () => {
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
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/addData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          alert('Data added successfully');
          navigate('/');
        } else {
          alert('Failed to add data');
        }
      })
      .catch(error => console.error('Error adding data:', error));
  };

  return (
    <div className="container mt-5">
      <h1>Add Data Page</h1>
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
          <button type="submit" className="btn btn-primary">Add Data</button>
          <button type="button" className="btn btn-danger ms-2" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddDataPage;