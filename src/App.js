import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
