import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import Button from '../../../components/ui/button/button';
import Icon from '../../../components/ui/icon/icon';

export default function About() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={handleShow}
        className="position-fixed bottom-0 start-0 m-4 z-3 rounded-circle p-3 shadow"
        variant="success"
        title="Sobre o projeto"
      >
        <Icon name="CodeBracketIcon" size={32} className="text-white" />
      </Button>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton className="bg-primary-color">
          <Modal.Title className="text-white fw-bold">Sobre o Projeto</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light p-4">
          <div className="d-flex flex-column gap-4">
            <div>
              <h5 className="fw-bold mb-3">Projeto Open Source</h5>
              <p className="text-muted">
                Este projeto é open-source (código aberto). Se você se interessou pela ideia ou encontrou algum possível bug, sinta-se à vontade para contribuir!
              </p>
              <p className="text-muted mb-0">
                Entre em contato comigo ou faça uma PR (pull request) para o projeto.
              </p>
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm">
                <Icon name="EnvelopeIcon" size={24} className="text-primary me-3" />
                <a target="__blank" href="mailto:luizzleandro827@gmail.com" className="text-decoration-none text-dark fw-semibold">
                  Enviar um email
                </a>
              </div>

              <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm">
                 <Icon name="CommandLineIcon" size={24} className="text-dark me-3" />
                <a target="__blank" href="https://github.com/leanluizz/to-do-list-download-pdf" className="text-decoration-none text-dark fw-semibold">
                  Ver código no GitHub
                </a>
              </div>

              <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm">
                <Icon name="LinkIcon" size={24} className="text-info me-3" />
                <a
                  target="__blank"
                  className="text-decoration-none text-dark fw-semibold"
                  href="https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests"
                >
                  O que é uma pull request (PR)?
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-light border-top-0">
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
