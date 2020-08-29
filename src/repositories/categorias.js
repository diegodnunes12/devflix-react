import config from "../config";

const CATEGORIES_URL = `${config.URL_BACKEND}/categorias`

function create(objetoCategoria){

  return fetch(`${CATEGORIES_URL}`, {
      method: 'POSt',
      headers:{
          'Content-type': 'application/json'
      },
      body: JSON.stringify(objetoCategoria)
  })
      .then(async (response) => {
        if(response.ok){
          const resposta = await response.json()
          return resposta
        }

        throw new Error('Não foi possível pegar os dados :(')
      })
}

function getAll(){

  return fetch(`${CATEGORIES_URL}`)
      .then(async (response) => {
        if(response.ok){
          const resposta = await response.json()
          return resposta
        }

        throw new Error('Não foi possível pegar os dados :(')
      })
}

function getAllWithVideos(){

    return fetch(`${CATEGORIES_URL}?_embed=videos`)
        .then(async (response) => {
          if(response.ok){
            const resposta = await response.json()
            return resposta
          }

          throw new Error('Não foi possível pegar os dados :(')
        })
}

export default {
    create,
    getAllWithVideos,
    getAll
};