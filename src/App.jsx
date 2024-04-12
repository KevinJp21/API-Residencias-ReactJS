import './App.css'
import { Suspense } from 'react'
import {fetchData} from './fetchData'

const apiData = fetchData("http://localhost/Apiresidencia/getpropietario.php")
function App() {
  const data = apiData.read();
  return (
    <div className="App">
      <h1>Fetch Like a PRO</h1>
      <Suspense fallback={<div>Loading...</div>}>
      <ul className='card'>
        {data?.map((user) => (
          <li key={user.id}>{user.nombres} {user.apellidos}</li>
        ))}
      </ul>
      </Suspense>
    </div>
  )
}

export default App
