import React from 'react';
import { UserProvider } from './UserContext';
import NavBar from './components/NavBar/NavBar';
import './App.css';


function App() {
  return (
    <div>
      <UserProvider>
        <NavBar />
      </UserProvider>
    </div>
  );
}

export default App;
