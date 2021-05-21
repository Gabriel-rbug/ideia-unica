import { useState } from 'react';

function Home() {
    return (
        <>
            <div>Home 1</div>
            <div>Teste</div>
            <Contador/>
        </>
    )
               
} 
  

function Contador() {
    const [contador,setContador] = useState(1);
    const [contadorNovo, setContadorNovo] = useState(2);

    function addValor5() {
        setContadorNovo(contadorNovo + 2);
        

    }

    function AdicionarContador() {
        setContador(contador + 1);
    }
    return (       
        <div>
            <div>{contador}</div>
            <button onClick={AdicionarContador}>Adicionar</button>
            <div>{contadorNovo}</div>
            <button onClick={addValor5}>Atualizar</button>
        </div>
    

    )
}

export default Home