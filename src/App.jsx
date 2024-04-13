import './App.css'
import { Suspense } from 'react'
import {fetchData} from './fetchData'

const apiData = fetchData("http://localhost/Apiresidencia/getpropietario.php")
function App() {
const datas = apiData.read();

  return (
  <>
  <table className="table table-striped" id="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Nombre</th>
        <th scope="col">Direccion</th>
        <th scope="col">Telefono</th>
        <th scope="col">Correo</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
     {datas.map((datas,id)=>(
      <tr key={id}>
        <th scope="row">{datas.id}</th>
        <td>{datas.nombres}</td>
        <td>{datas.direccion}</td>
        <td>{datas.telefono}</td>
        <td>{datas.correo}</td>
        <td>
          <button type="button" className="btn btn-primary">Editar</button>
          <button type="button" className="btn btn-danger">Borrar</button>
        </td>
      </tr>
     ))}
    </tbody>
</table>
  </>
  )
}

export default App
