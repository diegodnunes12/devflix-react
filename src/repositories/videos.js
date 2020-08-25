import config from "../config";

const VIDEOS_URL = `${config.URL_BACKEND}/videos`

function create(objetoVideo){

    return fetch(`${VIDEOS_URL}?_embed=videos`, {
        method: 'POSt',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(objetoVideo)
    })
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
};