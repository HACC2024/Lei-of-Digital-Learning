import React, { useState } from "react";
import "./css/Login.css"

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // const [error, setError] = useState<string | null>(null);
  
    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      alert("Coming Soon!");
    };

     return (
        <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {/* {error && <p>{error}</p>} */}
        </form>
       </div>
     );
};

export default Login;