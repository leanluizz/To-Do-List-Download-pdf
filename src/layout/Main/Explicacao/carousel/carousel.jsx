import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Icon from '../../../../components/ui/Icon/icon';

//Videos
import Titulo from '../videos/titulo.mp4';
import CRUD from '../videos/crud.mp4';
import Cor from '../videos/cor.mp4';
import Tamanho from '../videos/tamanho.mp4';
import Fonte from '../videos/fonte.mp4';
import Alinhamento from '../videos/alinhamento.mp4';
import Wallpaper from '../videos/wallpaper.mp4';
import PDF from '../videos/PDF.mp4';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

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
  
function PlayVideo(num) {
          // Cria um elemento de estilo
          var style = document?.createElement('style');
        
          var button = document.querySelectorAll('.play-icon');
      
          //Adiciona o atributo controls nos vídeos
          var video = document.querySelectorAll('video')
          video.forEach((videos) => {
              videos.controls = true;

              videos.addEventListener('pause', () => {
                videos.controls = false;
                button.forEach((btn) => {
                    btn.style.display = 'block';
                })
               
                style.innerHTML = `
                video::-webkit-media-controls {
                  background-color: #00000056;
                }
              `;
          
              // Adiciona o elemento de estilo ao documento
              document.head.appendChild(style);

            });
            videos.addEventListener('fullscreenchange', () => {
                style.innerHTML = `
                video::-webkit-media-controls {
                  background-color: #00000056;
                }
              `;
            })
          })
  
          video[num].play()

          //Define o botão de play pra display none
          button.forEach((btn) => {
            btn.style.display = 'none';
          })
    
      
          // Define o conteúdo do estilo para remover o background-color dos controles de mídia
          style.innerHTML = `
            video::-webkit-media-controls {
              background-color: transparent !important;
            }
          `;
      
          // Adiciona o elemento de estilo ao documento
          document.head.appendChild(style);
          
}
  

  return (
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect} style={{ position: 'relative', zIndex: 0 }}>
      {data.map((item, i) => (
        <Carousel.Item key={i}>
          <div>
            <div className='m-5 d-flex align-items-center'>
              <Icon name="VideoCameraIcon" style="solid" size={50} className="text-success" />
              <h4 className='m-2 text-start'>{item.title}</h4>
            </div>
            <div className='video-container p-5'>
              <video className='w-100 rounded' id='tutorial-titulo'>
                <source src={item.src} type="video/mp4" />
              </video>
              <Icon onClick={() => PlayVideo(i)} name="PlayCircleIcon" style="solid" size={50} className="play-icon text-dark" />
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
