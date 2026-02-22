import { useEffect, useState } from 'react';
import 'animate.css';
import Icon from '../Icon/Icon';

export interface ScrollTopButtonProps {
  threshold?: number;
}

export default function ScrollTopButton({ threshold = 400 }: ScrollTopButtonProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  if (!visible) return null;
  return (
    <button
      type="button"
      onClick={goTop}
      className="position-fixed bottom-0 end-0 m-3 rounded-circle bg-primary-color text-white border-0 p-3 shadow animate__animated animate__fadeIn"
      style={{ zIndex: 1050 }}
      title="Voltar ao topo"
      aria-label="Voltar ao topo"
    >
      <Icon name="ChevronUpIcon" style="solid" size={22} className="text-white" />
    </button>
  );
}
