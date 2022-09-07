import Create from "../Create"
import Read from "../Read"
import './DashboardClientes.css'

export default function DashboardCliente() {
  return (
      <section className='clientesSection'>

        <div className='createDiv'>
          <Create />
        </div>

        <div className=" readDiv">
          <Read />
        </div>

      </section>
  );
}