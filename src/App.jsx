import './App.css'
import { useFetch } from './useFetch'
function App() {
  const {data, error} = useFetch("http://localhost/Apiresidencia/getpropietario.php")
  return (
    <div className='App'>
        <h1>Fetch Like a PRO</h1>
        <div className="card">
          <ul>
            {error && <p>Error: {error}</p> /*Esta linea es un condicional if, Si el error existe se muestra, sino, no hace nada*/}   
            {data?.map((user) => ( /*?= si existe*/
              <li key={user.id}>{user.nombres} {user.apellidos}</li>
              ))}
          </ul>
        </div>
    </div>
  )
}

export default App
