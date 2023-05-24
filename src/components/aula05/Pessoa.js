function Pessoa({nome, idade, profissao, foto}) {
  return ( 
      <div>
        <h1>Componente Pessoa</h1>
        <img src={foto} alt={nome} />
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
      </div>
   );
}
 
export default Pessoa;