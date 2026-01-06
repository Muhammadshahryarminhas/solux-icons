import React from "react";
import { icons, IconName } from "../icons";

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
} & React.FC<React.SVGProps<SVGSVGElement>>;

const Icon = ({
  name,
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  ...props
}: IconProps) => {
  const SvgIcon = icons[name];

  if (!SvgIcon) return null;

  return (
    <SvgIcon
      width={size}
      height={size}
      stroke={color}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
};

export default Icon;
