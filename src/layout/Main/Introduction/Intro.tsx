import ListPreview from '../../Components/listPreview/ListPreview';
import CreateListButton from '../../Components/createListButton/CreateListButton';

export default function Intro() {
  return (
    <section className="intro p-3 bg-intro d-flex flex-column flex-lg-row align-items-center justify-content-around">
      <h2 id="text-intro" className="typewriter gradient-text">
        Faça listas de tarefas, atividades entre outros tipos de listas com inúmeros estilos de PDF.
      </h2>
      <ListPreview />
      <CreateListButton />
    </section>
  );
}
