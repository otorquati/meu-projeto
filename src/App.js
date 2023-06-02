import styles from './App.module.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './components/aula15/pages/Home';
import Empresa from './components/aula15/pages/Empresa';
import Contato from './components/aula15/pages/Contato';

function App() {
  return ( 
    <div className={styles.appContainer}>
      <Router>
        <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/empresa" element={<Empresa/>}/>
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
      </Router>
    </div>
   );
}
export default App;