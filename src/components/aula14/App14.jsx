import styles from './App.module.css';
import { useState } from 'react';

import SeuNome from './components/aula14/SeuNome';
import Saudacao from './components/aula14/Saudacao';

function App() {
  const [nome, setNome] =useState()
  return ( 
    <div className={styles.AppContainer}>
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome}/>
    </div>
   );
}
 
export default App;