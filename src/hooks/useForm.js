import { useState } from 'react';

function useForm(dadosIniciais) {
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
  
    function clearForm(){
      setValores(dadosIniciais)
    }
  
    return {
      valores,
      handleChange,
      clearForm
    }
  }

export default useForm;