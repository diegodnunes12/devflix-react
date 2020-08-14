import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault'
import FormFields from '../../../components/FormFields';
import Button from '../../../components/Button';

function CadastroCategoria() {

    const dadosIniciais = {
      nome: '',
      descricao: '',
      cor: '',
    };

    const [categorias, setCategoria] = useState([])
    const [valores, setValores] = useState(dadosIniciais)

    function setValor(chave, valor) {      
      setValores({       
        ...valores,
        [chave]: valor,
      });
    }

    function  handleChange(e) {
      setValor(e.target.getAttribute('name'), e.target.value);
    }

    useEffect(() => {
        const URL = "http://localhost:8080/categorias";
        fetch(URL)
        .then(async (response) => {
          const resposta = await response.json()
          setCategoria([
            ...resposta
          ])
        })
    }, [])

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
            <FormFields label="Nome" name="nome" value={valores.nome} onChange={handleChange} />

            <FormFields label="Descrição" type="textarea" name="descricao" value={valores.descricao} onChange={handleChange} />
            
            <FormFields label="Cor" type="color" name="cor" value={valores.color} onChange={handleChange} />
            
            <Button>Cadastrar</Button>
        </form>

          {categorias.length === 0 && (
            <div>Loading...</div>
          )}

        {/* <h3 style={{marginTop:'40px'}}>Categorias Cadastradas</h3> */}
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
