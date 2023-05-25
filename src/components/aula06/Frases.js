import React from 'react';
import styles from './Frases.module.css';

function Frases() {
  return ( 
    <div className={styles.frasesContainer}>
      <p className={styles.fraseContent}>Este é um componente com uma frase</p>
    </div>
   );
}
 
export default Frases;