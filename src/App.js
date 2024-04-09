// App.js

import React from 'react';
import './App.css'; // assuming you have a separate CSS file
import PasswordGenerator from './PasswordGenerator';

const App = () => {
    return (
        <div className="app-container">
            <h1 className="app-title">Password Generator</h1>
            <PasswordGenerator />
        </div>
    );
};

export default App;
