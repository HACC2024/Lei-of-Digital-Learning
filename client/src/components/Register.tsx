import React, { useState } from 'react';
import { registerUser } from '../apiClient';
import './css/Register.css';

const Register: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await registerUser(name, email, password);
      setSuccessMessage(response.message);
      setName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error("Registration failed", err);
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
    <form onSubmit={handleRegister}>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default Register;
