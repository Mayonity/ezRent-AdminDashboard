import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './pages/form';
import Password from './pages/password';
import Dashboard from './pages/Dashboard';
import './index.css';
import './React.css';
import Users from './pages/Users';
import Categories from './pages/Categories';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Chats from './pages/Chats'
import Info from './pages/Info';
import AddProduct from './pages/addProduct.tsx';
import Reports from './pages/Reports';
import Transaction from './pages/Transaction';
import Loader from './Loader';
import Faq from './pages/Faq';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import { Provider } from 'react-redux';
import { store } from './redux/store.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResetPassword from "./pages/ResetPassword"
import Otp from "./pages/Otp"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/Loader" element={<Loader />} />

          <Route path="/" element={<Form />} />
          <Route path="/password" element={<Password />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/otpVerification" element={<Otp />} />

          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Info" element={<Info />} />

          <Route path="/Categories" element={<Categories />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Chats" element={<Chats />} />

          <Route path="/Reports" element={<Reports />} />
          <Route path="/Transaction" element={<Transaction />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
