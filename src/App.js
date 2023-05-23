//import logo from './logo.svg';
import HelloWorld from './components/HelloWorld';
import './App.css';

function App() {
  const name = "Osvaldo";
  const newName = name.toUpperCase();
  const url = 'https://via.placeholder.com/150'
  function sum( a, b) {
    return a+b
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá {newName}</h1>
        <h2>Alterando o JSX</h2>
        <p>Soma: {sum(2,3)}</p>
        <img src={url} alt="Minha Imagen" />
        <HelloWorld />
      </header>
    </div>
  );
}

export default App;
