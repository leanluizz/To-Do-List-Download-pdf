import { ReactNode, useEffect, useRef, useState, CSSProperties } from 'react';

export interface DropdownProps {
  title: string;
  icon: ReactNode;
  content: ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  trigger?: 'hover' | 'click' | 'both';
  className?: string;
  panelStyle?: CSSProperties;
  buttonTitle?: string;
}

export default function Dropdown({ title, icon, content, placement = 'bottom', trigger = 'both', className, panelStyle, buttonTitle }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);
  function cancelClose() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }
  function scheduleClose() {
    if (trigger === 'hover' || trigger === 'both') {
      cancelClose();
      closeTimer.current = setTimeout(() => setOpen(false), 150);
    }
  }
  function onMouseEnter() {
    if (trigger === 'hover' || trigger === 'both') {
      cancelClose();
      setOpen(true);
    }
  }
  function onMouseLeave() {
    scheduleClose();
  }
  function onClick() {
    if (trigger === 'click' || trigger === 'both') setOpen((v) => !v);
  }
  const posClass =
    placement === 'bottom'
      ? 'top-100 start-0 mt-2'
      : placement === 'top'
      ? 'bottom-100 start-0 mb-2'
      : placement === 'left'
      ? 'top-0 end-100 me-2'
      : 'top-0 start-100 ms-2';
  return (
    <div ref={ref} className={`position-relative d-inline-block ${className || ''}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button type="button" className="d-inline-flex align-items-center bg-transparent border-0 p-0 cursor-pointer" onClick={onClick} aria-expanded={open} aria-haspopup="true" title={buttonTitle ?? title}>
        {icon}
      </button>
      {open && (
        <div className={`position-absolute ${posClass} bg-white border rounded shadow`} onMouseEnter={cancelClose} onMouseLeave={scheduleClose} style={panelStyle}>
          <div className="px-3 py-2 border-bottom fw-semibold">{title}</div>
          <div className="p-3">{content}</div>
        </div>
      )}
    </div>
  );
}
