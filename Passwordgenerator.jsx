import React, { useState } from 'react';
 
const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
 
  const generatePassword = (length = 12) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }
    setPassword(newPassword);
  };
 
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Your Generated Password</h1>
      <div style={{ fontSize: '1.5rem', marginBottom: '20px', wordWrap: 'break-word' }}>
        {password || 'Click the button to generate a password'}
      </div>
      <button onClick={() => generatePassword()} style={{ padding: '10px 20px', fontSize: '1rem' }}>
        Generate Password
      </button>
    </div>
  );
};
 
export default PasswordGenerator;