import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormFields from '../../../components/FormFields';

function CadastroCategoria() {

    const dadosIniciais = {
      nome: '',
      descricao: '',
      cor: ''
    }

    const [categorias, setCategoria] = useState([])
    const [valores, setValores] = useState(dadosIniciais)

    function setValor(chave, valor) {
      setValores({
        ...valores,
        [chave]: valor
      })
    }

    function  handleChange(e) {
      //const { getAttribute, value } = e.target;
      setValor(e.target.getAttribute('name'), e.target.value)
    }

    return (
      <PageDefault>
        <h1>Cadastro da categoria: {valores.nome}</h1>

        <form onSubmit={function handleSubmit(e) {
            e.preventDefault()
            setCategoria([
              ...categorias,
              valores
            ])

            setValores(dadosIniciais)
          }}
        >
            <FormFields label="Nome" type="text" name="nome" value={valores.nome} onChange={handleChange} />
            
            <div>
              <label>
              Descrição:
              <textarea type="text" name='descricao' value={valores.descricao} onChange={handleChange} 
              />
            </label>
            </div>

            <FormFields label="Cor" type="color" name="cor" value={valores.color} onChange={handleChange} />

            
            <button>Cadastrar</button>
        </form>

        <h3 style={{marginTop:'40px'}}>Categorias Cadastradas</h3>
        <ul>
          {categorias.map( (cat, indice) =>{
            return <li key={`${cat}${indice }`}>{cat.nome}</li>
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
