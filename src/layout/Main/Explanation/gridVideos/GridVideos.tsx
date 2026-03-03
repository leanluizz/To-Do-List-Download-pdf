import Icon from '../../../../components/ui/Icon/Icon';
import Card from '../../../../components/ui/Card/Card';
import IntersectionObserver from '../../../../utils/IntersectionObserver';
export default function GridVideos() {
  const videos = require.context('./../videos', false, /\.mp4$/);
  const data = Array.from(
    new Map(
      videos.keys().map((key: string) => {
        const fileName = key.split('/').pop()!.replace('.mp4', '');
        const title =
          fileName.charAt(0).toUpperCase() + fileName.slice(1);
        return [
          fileName,
          {
            title,
            src: videos(key) as string,
          },
        ];
      })
    ).values()
  );
  function PlayVideo(num: number) {
    const style = document?.createElement('style');
    const currentButton = document.querySelectorAll('.play-icon')[num] as HTMLElement;
    const currentVideo = document.querySelectorAll('video')[num] as HTMLVideoElement;
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
    currentVideo.play();
    currentButton.style.display = 'none';
    const videoId = `tutorial-${num}`;
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