import { useEffect, useRef } from 'react';
export default function IntersectionObserver({ children, animationClass = 'animate__fadeInUp', delay, threshold = 0.2, rootMargin = '0px', once = true }: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let animated = false;
    el.style.opacity = '0';
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!animated) {
            animated = true;
            el.style.opacity = '1';
            el.classList.add('animate__animated', animationClass, 'animate__faster');
            if (delay) (el.style as any).animationDelay = delay;
            
            if (once) {
              observer.unobserve(el);
            }
          }
        } else {
          if (!once) {
            el.style.opacity = '0';
            el.classList.remove('animate__animated', animationClass, 'animate__faster');
            if (delay) (el.style as any).animationDelay = '';
            animated = false;
          }
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animationClass, delay, threshold, rootMargin, once]);
  return <div ref={ref}>{children}</div>;
}
