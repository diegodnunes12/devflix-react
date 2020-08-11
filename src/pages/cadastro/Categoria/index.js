import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormFields from '../../../components/FormFields';
import Button from '../../../components/Button';

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
      console.log(e.target.getAttribute('name'))
      console.log(e.target.value)
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

            <FormFields label="Descrição" type="textarea" name="descricao" value={valores.descricao} onChange={handleChange} />
            
            <FormFields label="Cor" type="color" name="cor" value={valores.color} onChange={handleChange} />
            
            <Button>Cadastrar</Button>
        </form>

        <h3 style={{marginTop:'40px'}}>Categorias Cadastradas</h3>
        <ul>
          {categorias.map( (categoria) =>{
            return <li key={`${categoria.nome}`}>{categoria.nome}</li>
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
