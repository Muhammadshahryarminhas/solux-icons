import React from "react";
import { SvgProps } from "react-native-svg";
import { icons, IconName } from "../icons";
export { default as Icon } from "./Icon";

type IconProps = SvgProps & {
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
