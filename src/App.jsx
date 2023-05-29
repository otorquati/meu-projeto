import styles from './App.module.css';
import OutraLista from './components/aula13/OutraLista';

function App() {

  const meusItens = ['React', 'Vue', 'Angular']
  return ( 
    <div className={styles.AppContainer}>
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    </div>
   );
}
 
export default App;