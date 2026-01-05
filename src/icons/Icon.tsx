import React from "react";
import { icons, IconName } from "./index";

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
};

const Icon = ({
  name,
  size = 24,
  color = "#000",
  strokeWidth = 2,
}: IconProps) => {
  const SvgIcon = icons[name];

  if (!SvgIcon) return null;

  return (
    <SvgIcon
      width={size}
      height={size}
      color={color}
      stroke={color}
      strokeWidth={strokeWidth}
    />
  );
};

export default Icon;