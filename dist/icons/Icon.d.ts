import { IconName } from "./index";
type IconProps = {
    name: IconName;
    size?: number;
    color?: string;
    strokeWidth?: number;
};
declare const Icon: ({ name, size, color, strokeWidth, }: IconProps) => import("react/jsx-runtime").JSX.Element;
export default Icon;
