import React from 'react';
import SayMyName from '../aula05/SayMyName';
import Pessoa from '../aula05/Pessoa';
import List from './List';

import styles from './App.module.css';


function App(props) {
  const nome = 'Maria';
  return ( 
    <>
    <div className={styles.AppContainer}>
      <h1 className={styles.AppContent}>Testando CSS</h1>
      <SayMyName nome="Osvaldo" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome="Rodrigo" 
        idade="28" 
        foto="https://via.placeholder.com/150" 
        profissao="Programador" 
        />
      <List />
    </div>
    </>
   );
}
 
export default App;