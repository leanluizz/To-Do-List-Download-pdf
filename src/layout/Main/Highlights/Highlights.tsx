import Icon from '../../../components/ui/Icon/Icon';
import Card from '../../../components/ui/Card/Card';
import IntersectionObserver from 'utils/intersectionobserver';
import 'animate.css';

export default function Highlights() {
  return (
    <section className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col-12 col-md-4">
          <IntersectionObserver animationClass="animate__fadeInUp" delay="0s" threshold={0.1}>
            <Card
              icon={<Icon name="ListBulletIcon" style="solid" size={28} className="text-primary-color mb-2" />}
              title="Crie listas rapidamente"
              description="Adicione, edite e organize seus itens com facilidade."
              animationDelay="0s"
              enableHoverZoom
            />
          </IntersectionObserver>
        </div>
        <div className="col-12 col-md-4">
          <IntersectionObserver animationClass="animate__fadeInUp" delay="0.15s" threshold={0.1}>
            <Card
              icon={<Icon name="DocumentArrowDownIcon" style="solid" size={28} className="text-primary-color mb-2" />}
              title="Baixe em PDF"
              description="Exporte suas listas com aparência limpa e profissional."
              animationDelay="0.15s"
              enableHoverZoom
            />
          </IntersectionObserver>
        </div>
        <div className="col-12 col-md-4">
          <IntersectionObserver animationClass="animate__fadeInUp" delay="0.3s" threshold={0.1}>
            <Card
              icon={<Icon name="PaintBrushIcon" style="solid" size={28} className="text-primary-color mb-2" />}
              title="Personalize o visual"
              description="Ajuste cor, fonte, alinhamento e plano de fundo."
              animationDelay="0.3s"
              enableHoverZoom
            />
          </IntersectionObserver>
        </div>
      </div>
    </section>
  );
}
