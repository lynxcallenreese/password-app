import React, { useState } from 'react';
import './PasswordGenerator.css'; // assuming you have a separate CSS file

const PasswordGenerator = () => {
    const generatePassword = () => {
        const length = 10; // You can adjust the length of the password
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    };

    const [password, setPassword] = useState(generatePassword());

    const handleGeneratePassword = () => {
        setPassword(generatePassword());
    };

    return (
        <div className='password-container'>
            <div className='password'>
                <p>Password: {password}</p>
                <button className='generate' onClick={handleGeneratePassword}>Generate New Password</button>
            </div>
        </div>
    );
};
export default PasswordGenerator;
