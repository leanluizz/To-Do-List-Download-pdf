import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button/Button";
export default function Intro(){
    return(
        <section className="intro p-3 bg-intro d-lg-flex align-items-center justify-content-around">
        <h2 id="text-intro" className="typewriter gradient-text">Faça listas de tarefas, atividades entre outros tipos de listas com inúmeros estilos de PDF.</h2>
        <div className="d-none d-lg-flex flex-column w-25 alturaSeis border border-5 border-success border-gradient rounded-4">
          <div className="lines rounded-5 border-5 border-bottom border-success m-5" />
          <div className="linesTwo rounded-5 border-5 border-bottom border-success m-5" />
          <div className="linesThree rounded-5 border-5 border-bottom border-success m-5" />
          <div className="linesFour rounded-5 border-5 border-bottom border-success m-5" />
          <div className="linesFive rounded-5 border-5 border-bottom border-success m-5" />
        <Button href="/criar" className="d-none d-lg-block bg-gradient fw-bolder d-flex m-auto mt-3" variant="success">
          Criar lista
        </Button>
         </div> 
        <div>
          <Button href="/criar" className="d-lg-none bg-gradient fw-bolder d-flex m-auto mt-5" variant="outline-success">Criar lista</Button>
        </div>
      </section>
    )
}
