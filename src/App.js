import { BrowserRouter } from 'react-router-dom';

import { useState } from 'react';
import { userContext } from './context/userContext';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';

import './App.css';

function App() {

  const [user, setUser] = useState(''); // Estado

  //Login
  const login = (name) => {
    setUser(name);
  }

  //Logout 
  const logout = () => {
    setUser('');
  }

  const data = {
    user,
    login,
    logout
  }

  return (
    <div>
      <BrowserRouter>
      <userContext.Provider value={data}>
          <Header />
          <Main />
        </userContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
