import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/ui/Icon/icon';

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-secondary-color text-white py-3">
        <div className="container d-flex align-items-center justify-content-between">
          <button type="button" className="btn btn-light btn-sm d-inline-flex align-items-center" onClick={() => navigate(-1)} title="Voltar">
            <Icon name="ArrowUturnLeftIcon" style="solid" size={18} className="me-2" />
            Voltar
          </button>
          <h1 className="h5 mb-0">Política de Privacidade</h1>
        </div>
      </div>
      <main className="container py-4">
        <section className="bg-white rounded-3 shadow-sm border p-4">
          <p className="mb-4">
            Sua privacidade é importante. Esta página descreve como coletamos, utilizamos e protegemos informações.
          </p>

          <section className="mb-4">
            <h2 className="h5">Coleta de Dados</h2>
            <p>
              Este site não coleta dados pessoais sensíveis. Informações inseridas nas listas são armazenadas localmente no navegador.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h5">Uso das Informações</h2>
            <p>
              Os dados das listas são utilizados exclusivamente para exibir, editar e exportar seus conteúdos em PDF.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h5">Cookies</h2>
            <p>
              Podemos usar armazenamento local do navegador para manter preferências e estado das listas. Não utilizamos cookies de rastreamento.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h5">Compartilhamento</h2>
            <p>
              Não compartilhamos suas informações com terceiros.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h5">Segurança</h2>
            <p>
              Adotamos boas práticas para proteger dados locais, porém recomendamos não inserir informações confidenciais nas listas.
            </p>
          </section>

          <section className="mb-2">
            <h2 className="h5">Contato</h2>
            <p>
              Para dúvidas sobre esta política, entre em contato pelo e-mail disponível na seção Sobre.
            </p>
          </section>
        </section>
      </main>
    </>
  );
}
