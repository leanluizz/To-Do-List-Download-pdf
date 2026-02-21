import 'bootstrap/dist/css/bootstrap.min.css';

export default function PrivacyPolicy() {
  return (
    <main className="container py-5">
      <h1 className="mb-4">Política de Privacidade</h1>
      <p className="mb-3">
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

      <section className="mb-4">
        <h2 className="h5">Contato</h2>
        <p>
          Para dúvidas sobre esta política, entre em contato pelo e-mail disponível na seção Sobre.
        </p>
      </section>
    </main>
  );
}
