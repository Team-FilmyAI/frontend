import { Routes, Route } from "react-router-dom";
import React, { useState } from "react"; 
import HeroPage from "../pages/HeroPage/HeroPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import ViewOpportunities from "../pages/ViewOpportunities/ViewOpportunities";
import Button from "../components/Buttons/Button";
import TextInput from "../components/TextInput/TextInput"; 
import PasswordInput from "../components/PasswordInput/PasswordInput"; 
import SelectInput from "../components/SelectInput/SelectInput"; 
import { User, Mail, Lock, UserRound } from 'lucide-react';

export default function AppRoutes() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleFocus = (field: string) => () => {
    
  };

  return (
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Forgot" element={<ForgotPassword />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/SearchBar" element={<SearchBar />} />
      <Route path="/ViewOpportunities" element={<ViewOpportunities />} />
      <Route path="/Button" element={<Button label="" variant="primary" onClick={() => console.log("")} />} />
      <Route
        path="/TextInputs"
        element={
          <div
            style={{
              backgroundColor: '#000',
              color: '#fff',
              padding: '2rem',
              minHeight: '100vh',
              fontFamily: 'Garet, sans-serif',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
              <div style={{ minWidth: '300px' }}>
                <TextInput
                  label="First Name"
                  placeholder="First Name"
                  icon={<User size={18} />}
                  value={form.firstName}
                  onChange={handleChange('firstName')}
                  onFocus={handleFocus('firstName')}
                />
                <TextInput
                  label="Email address"
                  placeholder="Email address"
                  icon={<Mail size={18} />}
                  value={form.email}
                  onChange={handleChange('email')}
                  onFocus={handleFocus('email')}
                />
                <PasswordInput
                  label="Password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange('password')}
                  onFocus={handleFocus('password')}
                />
                <PasswordInput
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  onFocus={handleFocus('confirmPassword')}
                />
              </div>

              <div style={{ minWidth: '300px' }}>
                <TextInput
                  label="Last Name"
                  placeholder="Last Name"
                  icon={<User size={18} />}
                  value={form.lastName}
                  onChange={handleChange('lastName')}
                  onFocus={handleFocus('lastName')}
                />
                <SelectInput
                  label="Role"
                  icon={<UserRound size={18} />}
                  value={form.role}
                  onChange={handleChange('role')}
                  onFocus={handleFocus('role')}
                  options={['Actress', 'Actor', 'Director']}
                />
              </div>
            </div>
          </div>
        }
      />
    </Routes>
  );
}
