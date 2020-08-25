import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom';
import FormFields from '../../../components/FormFields';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos'

function CadastroVideo() {
  const history = useHistory()
  const { handleChange, valores } = useForm({
    titulo: 'Novo Vídeo',
    url: 'https://youtube.com.br',
    categoria: 'front-end'
  })

    return (
      <PageDefault>
        <h1>Cadastro de video</h1>

        <form onSubmit={(event) => {
          event.preventDefault()

          videosRepository.create({
            titulo: valores.titulo,
            url: valores.url,
            categoriaId: 1
          })
          .then(() => {

            history.push('/')
          })

        }} >
          <FormFields label="Titulo do vídeo" name="titulo" value={valores.titulo} onChange={handleChange} />
          <FormFields label="URL do vídeo" name="url" value={valores.url} onChange={handleChange} />
          <FormFields label="Categoria do vídeo" name="categoria" value={valores.categoria} onChange={handleChange} />

          <Button type="submit">Cadastrar</Button>
        </form>

        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>
      </PageDefault>
    )
}

export default CadastroVideo;
