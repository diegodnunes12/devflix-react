import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom';
import FormFields from '../../../components/FormFields';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

function CadastroVideo() {
  const history = useHistory()
  const [categorias, setCategorias] = useState([])
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, valores } = useForm({
    titulo: 'Novo Vídeo',
    url: 'https://youtube.com.br',
    categoria: 'front-end'
  })

  useEffect( () => {
    categoriasRepository
    .getAll()
    .then((categoriasFromServer) => {
      setCategorias(categoriasFromServer)
    })
  }, [] )

    return (
      <PageDefault>
        <h1>Cadastro de video</h1>

        <form onSubmit={(event) => {
          event.preventDefault()

          const categoriaEscolhida = categorias.find( (categoria) => {
              return categoria.titulo === valores.categoria;
          } )

          videosRepository.create({
            titulo: valores.titulo,
            url: valores.url,
            categoriaId: categoriaEscolhida.id
          })
          .then(() => {

            history.push('/')
          })

        }} >
          <FormFields 
            label="Titulo do vídeo" 
            name="titulo" 
            value={valores.titulo} 
            onChange={handleChange} 
          />

          <FormFields 
            label="URL do vídeo" 
            name="url" 
            value={valores.url} 
            onChange={handleChange} 
          />

          <FormFields 
            label="Categoria do vídeo" 
            name="categoria" 
            value={valores.categoria} 
            onChange={handleChange} 
            suggestions={categoryTitles}
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>
      </PageDefault>
    )
}

export default CadastroVideo;
