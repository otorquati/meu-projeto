import React from 'react';
import Evento from './components/aula09/Evento';
import Form from './components/aula09/Form';

import styles from './App.module.css';


function App() {
  return ( 
    <>
    <div className={styles.AppContainer}>
      <h1 className={styles.AppContent}>Testando CSS</h1>
      <Form />
    </div>
    </>
   );
}
 
export default App;