import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import DetailPage from './pages/detailDataPage';
import AddDataPage from './pages/addDataPage';
import EditDataPage from './pages/editDataPage';

const Main = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/details/:year/:month" element={<DetailPage />} />
      <Route path="/add-data" element={<AddDataPage />} />
      <Route path="/edit-data/:id" element={<EditDataPage />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);