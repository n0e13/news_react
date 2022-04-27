import { BrowserRouter } from 'react-router-dom';

import { useState } from 'react';
import { userContext } from './context/userContext';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';

import './App.css';

function App() {

  const [user, setUser] = useState(''); // Estado
  const [avatar, setAvatar] = useState(''); // Estado

  //Login
  const login = (name, avatar) => {
    setUser(name);
    setAvatar(avatar);
  }

  //Logout 
  const logout = () => {
    setUser('');
    setAvatar('');
  }

  const data = {
    user,
    avatar,
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
