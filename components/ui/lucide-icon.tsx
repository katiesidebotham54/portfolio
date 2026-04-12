/**
 * Dynamic Lucide icon renderer — accepts an icon name string from data.ts
 * and renders the corresponding component.
 */
import * as Icons from "lucide-react";

interface LucideIconProps {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

type LucideIconComponent = React.ComponentType<{
  size?: number;
  className?: string;
  strokeWidth?: number;
}>;

export function LucideIcon({ name, size = 20, className, strokeWidth = 1.75 }: LucideIconProps) {
  const Icon = (Icons as unknown as Record<string, LucideIconComponent>)[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} strokeWidth={strokeWidth} />;
}
