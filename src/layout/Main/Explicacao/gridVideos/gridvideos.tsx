import Icon from '../../../../components/ui/Icon/Icon';
import Card from '../../../../components/ui/Card/Card';
import IntersectionObserver from '../../../../utils/intersectionobserver';
import Titulo from '../videos/titulo.mp4';
import CRUD from '../videos/crud.mp4';
import Cor from '../videos/cor.mp4';
import Tamanho from '../videos/tamanho.mp4';
import Fonte from '../videos/fonte.mp4';
import Alinhamento from '../videos/alinhamento.mp4';
import Wallpaper from '../videos/wallpaper.mp4';
import PDF from '../videos/PDF.mp4';

export default function GridVideos() {
  const data = [
    { title: 'Como criar um título', src: Titulo },
    { title: 'Inserir, editar e excluir', src: CRUD },
    { title: 'Alterando a cor dos textos', src: Cor },
    { title: 'Alterando o tamanho dos textos na lista', src: Tamanho },
    { title: 'Alterando a fonte dos textos na lista', src: Fonte },
    { title: 'Alinhando os textos na lista', src: Alinhamento },
    { title: 'Inserindo um wallpaper', src: Wallpaper },
    { title: 'Convertendo pra PDF', src: PDF },
  ];

  function PlayVideo(num: number) {
    const style = document?.createElement('style');
    // Seleciona APENAS o botão e o vídeo correspondentes ao índice clicado
    const currentButton = document.querySelectorAll('.play-icon')[num] as HTMLElement;
    const currentVideo = document.querySelectorAll('video')[num] as HTMLVideoElement;

    // Configura apenas o vídeo atual
    currentVideo.controls = true;
    currentVideo.addEventListener('pause', () => {
      currentVideo.controls = false;
      currentButton.style.display = 'block';
      
      style.innerHTML = `
              video::-webkit-media-controls {
                background-color: #00000056;
              }
            `;
      document.head.appendChild(style);
    });

    currentVideo.addEventListener('fullscreenchange', () => {
      style.innerHTML = `
              video::-webkit-media-controls {
                background-color: #00000056;
              }
            `;
    });

    // Dá play apenas no vídeo atual e esconde apenas o botão atual
    currentVideo.play();
    currentButton.style.display = 'none';

    // Cria um ID único ou classe para o vídeo atual se ainda não tiver, para escopar o CSS
    const videoId = `tutorial-${num}`;
    
    // Remove estilos anteriores se existirem
    const existingStyle = document.getElementById(`style-${videoId}`);
    if (existingStyle) existingStyle.remove();

    style.id = `style-${videoId}`;
    style.innerHTML = `
            #${videoId}::-webkit-media-controls {
              background-color: transparent !important;
            }
          `;
    document.head.appendChild(style);
  }

  return (
    <section className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {data.map((item, i) => (
          <div className="col" key={i}>
            <IntersectionObserver animationClass="animate__fadeInUp" delay={`${i * 0.1}s`} threshold={0.1}>
              <Card
                enableHoverZoom
                animationClass=""
                className="p-0 overflow-hidden"
                icon={null}
                title=""
                description=""
                style={{ minHeight: 'auto' }}
              >
                <div className="p-3">
                  <div className="d-flex align-items-center mb-3">
                    <Icon name="VideoCameraIcon" style="solid" size={36} className="text-primary-color" />
                    <h4 className="ms-2 mb-0 text-start fs-6">{item.title}</h4>
                  </div>
                  <div className="video-container p-2 position-relative">
                    <video className="w-100 rounded" id={`tutorial-${i}`}>
                      <source src={item.src} type="video/mp4" />
                    </video>
                    <Icon
                      onClick={() => PlayVideo(i)}
                      name="PlayCircleIcon"
                      style="solid"
                      size={40}
                      className="play-icon text-dark position-absolute top-50 start-50 translate-middle cursor-pointer"
                    />
                  </div>
                </div>
              </Card>
            </IntersectionObserver>
          </div>
        ))}
      </div>
    </section>
  );
}
