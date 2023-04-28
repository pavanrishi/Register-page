import React, { useState } from 'react';
import './Register.css'; // import CSS file

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Username: ${username}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}, Terms Agreed: ${termsAgreed}`);
  };

  return (
    <div className="register-container">
      <div className="register-form-container">
        <div className="welcome-container">
  <h1 className="welcome-title">Get started, Sign up to get started finding your partner!</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="register-form-row">
            <div className="register-form-col">
              <div className="form-group">
                <label className="form-label">
                  First Name:
                  <input className="form-control" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">
                  Last Name:
                  <input className="form-control" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">
                  Username:
                  <input className="form-control" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">
                  Email:
                  <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">
                  Password:
                  <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">
                  Confirm Password:
                  <input className="form-control" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </label>
              </div>
            </div>
            <div className="register-form-col">
              <div className="form-group terms-checkbox">
                <input type="checkbox" id="terms" checked={termsAgreed} onChange={(e) => setTermsAgreed(e.target.checked)} required />
                <label htmlFor="terms">I agree to the <a href="#">terms of use</a> and <a href="#">privacy policy</a>.</label>
              </div>
            </div>
          </div>
          <button className="register-button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
