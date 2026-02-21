import React from 'react';

type ButtonProps = {
  variant?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  href?: string;
  children: React.ReactNode;
};

export default function Button({
  variant,
  className,
  type = 'button',
  disabled,
  onClick,
  href,
  children,
}: ButtonProps) {
  const base = 'btn';
  const variantClass = variant ? `btn-${variant}` : '';
  const classes = [base, variantClass, className].filter(Boolean).join(' ');

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
