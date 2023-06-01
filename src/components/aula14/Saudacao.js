function Saudacao({nome}) {

  function gerarSaudacao(algumNome){
    return `Olá, ${algumNome}, tudo bem?`
  }

  return(
    <>
    {nome.length>0 ? (<p>{gerarSaudacao(nome)}</p>) : (
      <p>Não saudação para ser feita, por favor digite seu nome!</p>
    )}
    </>
  )
}
export default Saudacao