import React, { useState } from 'react';
import TextInput from '../components/TextInput/TextInput';
import PasswordInput from '../components/TextInput/PasswordInput';
import SelectInput from '../components/TextInput/SelectInput';
import { User, Mail, Lock, UserRound } from 'lucide-react';

const TextInputGroup: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleFocus = (field: string) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [field]: e.target.value });
  };

  return (
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
        {/* Left Column */}
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

        {/* Right Column */}
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
  );
};

export default TextInputGroup;
