import { useContext } from "react"
import { UsuarioContext } from "./context/UsuarioContext"



export const HomeScreen = () => {

const {usuario} = useContext(UsuarioContext)

  return (
    <div className="container">
   <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">nombre</th>
          <th scope="col">tecnologia</th>
          <th scope="col">Email</th>
          <th scope="col">Instangram </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{usuario.nombre}</th>
          <td>{usuario.tecnologia}</td>
          <td>{usuario.email}</td>
          <td>{usuario.instagram}</td>
        </tr>
      
      </tbody>
    </table>

    </div>
  )
}
