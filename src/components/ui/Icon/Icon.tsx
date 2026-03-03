import { ComponentType, SVGProps, MouseEventHandler } from 'react';
import * as Solid from '@heroicons/react/24/solid';
import * as Outline from '@heroicons/react/24/outline';
export type IconName = keyof typeof Solid | keyof typeof Outline;
export interface IconProps {
  name: IconName;
  style?: 'solid' | 'outline';
  size?: number;
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}
export default function Icon({
  name,
  style = 'outline',
  size = 24,
  className,
  onClick,
}: IconProps) {
  const icons = style === 'solid' ? Solid : Outline;
  const Comp = icons[name as keyof typeof icons] as ComponentType<SVGProps<SVGSVGElement>>;
  if (!Comp) return null;
  return <Comp width={size} height={size} className={className} onClick={onClick} />;
}