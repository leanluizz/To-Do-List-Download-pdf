import { MouseEventHandler, ReactNode } from 'react';
import Icon, { IconName } from '../icon/icon';

export interface IconButtonProps {
  name: IconName;
  style?: 'solid' | 'outline';
  size?: number;
  variant?: string;
  className?: string;
  title?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | MouseEventHandler<HTMLAnchorElement>;
  href?: string;
  ariaLabel?: string;
  bare?: boolean;
  children?: ReactNode;
}

export default function IconButton({
  name,
  style = 'solid',
  size = 24,
  variant,
  className,
  title,
  type = 'button',
  disabled,
  onClick,
  href,
  ariaLabel,
  bare = false,
  children,
}: IconButtonProps) {
  const base = bare ? '' : 'btn';
  const variantClass = !bare && variant ? `btn-${variant}` : '';
  const layout = 'd-inline-flex align-items-center justify-content-center';
  const classes = [base, variantClass, layout, className].filter(Boolean).join(' ');

  const iconEl = <Icon name={name} style={style} size={size} className="" title={title} />;

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} onClick={onClick as any}>
        {iconEl}
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick as any}
      aria-label={ariaLabel}
      title={title}
    >
      {iconEl}
      {children}
    </button>
  );
}
