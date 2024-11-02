import React, { useState } from 'react';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Sign Up:', { email, password });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <div className="auth-container">
      <h2>Login / Sign Up</h2>
      <div className="sign-up">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="login">
        <form onSubmit={handleLogin}>
          <h3>Login</h3>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
