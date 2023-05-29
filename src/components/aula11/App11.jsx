import React from 'react';
//import Evento from './components/aula10/Evento';

import styles from './App.module.css';
import Evento from './components/aula11/Evento'

function App() {
  return ( 
    <>
    <div className={styles.AppContainer}>
      <h1 className={styles.AppContent}>Testando CSS</h1>
      <Evento />
    </div>
    </>
   );
}
 
export default App;