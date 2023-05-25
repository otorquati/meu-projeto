import React from 'react';
import SayMyName from './components/aula05/SayMyName';
import Pessoa from './components/aula05/Pessoa';
import Frases from './components/Frases'

import styles from './App.module.css';


function App(props) {
  const nome = 'Maria';
  return ( 
    <>
    <div className={styles.AppContainer}>
      <h1 className={styles.AppContent}>Testando CSS</h1>
      <Frases />
      <Frases />
      <SayMyName nome="Osvaldo" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome="Rodrigo" 
        idade="28" 
        foto="https://via.placeholder.com/150" 
        profissao="Programador" 
        />
    </div>
    </>
   );
}
 
export default App;