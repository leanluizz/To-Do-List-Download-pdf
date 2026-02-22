import React from 'react';

interface SpinnerProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  size?: 'sm' | 'md';
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ variant = 'primary', size, className = '' }) => {
  const sizeClass = size === 'sm' ? 'spinner-border-sm' : '';
  
  return (
    <div className={`d-flex justify-content-center align-items-center p-5 ${className}`}>
      <div className={`spinner-border text-${variant} ${sizeClass}`} role="status">
        <span className="visually-hidden">Carregando...</span>
      </div>
    </div>
  );
};

export default Spinner;
