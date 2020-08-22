import config from "../config";

const CATEGORIES_URL = `${config.URL_BACKEND}/categorias`

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
    getAllWithVideos,
};