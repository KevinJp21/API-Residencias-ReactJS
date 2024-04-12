import { useState, useEffect } from 'react'
export function useFetch(url){// se pasa por parametro el url debido a que no siempre se trabajará con la misma.
const [data, setData] = useState(null); //Se crea un estado de tipo null
const [error, setError] = useState(null); 
useEffect(()=>{// Permite hacer la peticion HTTP
  fetch(url)
  .then((response) => response.json())
  .then((data) => setData(data))
  .catch((error) => setError(error));
},[]); //El array vacio hace que se ejecute una unica vez cuando se monte el componente
return {data, error}; //se retorna data como objeto, ya que es mas facil reestructurar el objeto que un array por ejemplo
}