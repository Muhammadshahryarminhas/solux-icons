import React from "react";
import { IconName } from "../icons";
type IconProps = {
    name: IconName;
    size?: number;
    color?: string;
    strokeWidth?: number;
} & React.FC<React.SVGProps<SVGSVGElement>>;
declare const Icon: ({ name, size, color, strokeWidth, ...props }: IconProps) => import("react/jsx-runtime").JSX.Element;
export default Icon;
