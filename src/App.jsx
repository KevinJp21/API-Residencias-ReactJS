import './App.css'
import { Suspense } from 'react'
import {fetchData} from './fetchData'
import DataTable from 'react-data-table-component';

const apiData = fetchData("http://localhost/Apiresidencia/getpropietario.php")

function App() {
const datas = apiData.read();

const columns = [
  {
    name: 'ID',
    selector: row => row.id
  },
  {
    name: 'Nombre',
    selector: row => row.nombres
  },
  {
    name: 'Apellido',
    selector: row => row.apellidos
  },
  {
    name: 'Direccion',
    selector: row => row.direccion
  },
  {
    name: 'Email',
    selector: row => row.correo
  },
  {
    name: 'Telefono',
    selector: row => row.telefono
  }
]

  return (
    <div className="App">
      <h1>Fetch Like a PRO</h1>
      <Suspense fallback={<div>Loading...</div>}>
      <DataTable
        columns={columns}
        data = {datas}
        pagination
      />
      </Suspense>
    </div>
  )
}

export default App
