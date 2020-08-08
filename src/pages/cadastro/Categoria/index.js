import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';

function CadastroCategoria() {

    const [categorias, setCategoria] = useState([])
    const [nomeCategoria, setNomeCategoria] = useState('filmes')

    return (
      <PageDefault>
        <h1>Cadastro da categoria: {nomeCategoria}</h1>

        <form onSubmit={function handleSubmit(e) {
            e.preventDefault()
            setCategoria([
              ...categorias,
              nomeCategoria
            ])
          }}
        >
            <div>
              <label>
                Nome:
                <input type="text" value={nomeCategoria} onChange={function  pegarValue(e) {
                    setNomeCategoria(e.target.value)
                  }} 
                />
              </label>
            </div>
            <div>
              <label>
              Descrição:
              <textarea type="text" value={nomeCategoria} onChange={function  pegarValue(e) {
                  setNomeCategoria(e.target.value)
                }} 
              />
            </label>
            </div>
            <div>    
            <label>
              Cor:
              <input type="color" value={nomeCategoria} onChange={function  pegarValue(e) {
                  setNomeCategoria(e.target.value)
                }} 
              />
            </label>
            </div>
            <button>Cadastrar</button>
        </form>

        <h3 style={{marginTop:'40px'}}>Categorias Cadastradas</h3>
        <ul>
          {categorias.map( (categoria, indice) =>{
            return <li key={`${categoria}${indice }`}>{categoria}</li>
          })
          }
        </ul>

        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;
