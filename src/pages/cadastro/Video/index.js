import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom';
import FormFields from '../../../components/FormFields';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';

function CadastroVideo() {
  const history = useHistory()
  const { handleChange, valores } = useForm({

  })

    return (
      <PageDefault>
        <h1>Cadastro de video</h1>

        <form onSubmit={(event) => {
          event.preventDefault()
          history.push('/')
        }} >
          <FormFields label="Titulo do vídeo" name="titulo" value={valores.titulo} onChange={handleChange} />

          <Button type="submit">Cadastrar</Button>
        </form>

        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>
      </PageDefault>
    )
}

export default CadastroVideo;
