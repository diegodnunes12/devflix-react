import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault'
import FormFields from '../../../components/FormFields';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias'

function CadastroCategoria() {

    const dadosIniciais = {
      nome: '',
      descricao: '',
      cor: '',
    };

    const { handleChange, valores, clearForm } = useForm(dadosIniciais)

    const [categorias, setCategoria] = useState([])

    useEffect(() => {
        const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://diegonunesflix.herokuapp.com/categorias';
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

            categoriasRepository.create({
              titulo: valores.nome,
              descricao: valores.descricao,
              cor: valores.cor
            })
            .then(() => {
              clearForm()
              //history.push('/')
            })

            setCategoria([
              ...categorias,
              valores
            ])

            //clearForm()
          }}
        >
            <FormFields label="Nome" name="nome" value={valores.nome} onChange={handleChange} />

            <FormFields label="Descrição" type="textarea" name="descricao" value={valores.descricao} onChange={handleChange} />
            
            <FormFields label="Cor" type="color" name="cor" value={valores.cor} onChange={handleChange} />
            
            <Button>Cadastrar</Button>
        </form>

          {categorias.length === 0 && (
            <div>Loading...</div>
          )}

        {/* <h3 style={{marginTop:'40px'}}>Categorias Cadastradas</h3> */}
        <ul>
          {categorias.map( (categoria) =>{
            return <li key={`${categoria.titulo}`}>{categoria.titulo}</li>
          })
          }
        </ul>
        <div>
        <Link to="/" className="link-novo">
            Ir para home
        </Link>
        </div>
      </PageDefault>
    )
}

export default CadastroCategoria;
