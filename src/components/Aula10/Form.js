import { useState } from 'react';
import styles from "../../App.module.css";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`);
  }  
  
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  
  return(
    <>
      <h1 className={styles.AppContent}>Meu Cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div className={styles.AppContent}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" placeholder="Digite seu nome: " value={name} onChange={ (e)=> setName(e.target.value)}/>
        </div>
        <div className={styles.AppContent}>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" placeholder="Digite sua senha: " onChange={(e=> setPassword(e.target.value))}/>
        </div>
        <div>
          <input type="submit" value="Cadastrar"/>
        </div>
      </form>
    </>
  )
};

export default Form;