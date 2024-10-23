import React, { useState } from "react";
import "./css/Login.css"

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if(!response.ok) {
                throw new Error("Login failed");
            }
            
            const data = await response.json();
            console.log("Token:", data.token);
        } catch (error) {
            console.error("Error:", error);
        
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>CamDN Login</h1>
            <div className='login-container'>
                {/* Input for username */}
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                {/* Input for password */}
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;