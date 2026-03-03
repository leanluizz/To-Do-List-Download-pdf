import { CSSProperties, ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/styles/variables.css';
export interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  style?: CSSProperties;
  animationClass?: string;
  animationDelay?: string;
  enableHoverZoom?: boolean;
  children?: ReactNode;
}
export default function Card({ icon, title, description, className, style, animationClass = 'animate__animated animate__fadeInUp', animationDelay, enableHoverZoom = false, children }: CardProps) {
  return (
    <div
      className={`p-4 border rounded-3 shadow-sm bg-white h-100 ${animationClass} ${className || ''} ${enableHoverZoom ? 'card-hover-zoom' : ''}`}
      style={{ 
        minHeight: 180, 
        ...(animationDelay ? { animationDelay } : {}), 
        ...(style || {}),
      }}
    >
      {icon && <div className="mb-2 d-inline-flex align-items-center justify-content-start">{icon}</div>}
      {title && <h3 className="h6 mb-2">{title}</h3>}
      {description && <p className="text-muted mb-0">{description}</p>}
      {children}
    </div>
  );
}