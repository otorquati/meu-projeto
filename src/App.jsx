import styles from './App.module.css';
import Condicional from './components/aula12/Condicional';

function App() {
  return ( 
    <div className={styles.AppContainer}>
      <h1>Renderização Condicional</h1>
      <Condicional />
    </div>
   );
}
 
export default App;