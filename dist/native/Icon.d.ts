import { SvgProps } from "react-native-svg";
import { IconName } from "../icons";
export { default as Icon } from "./Icon";
type IconProps = SvgProps & {
    name: IconName;
    size?: number;
    color?: string;
    strokeWidth?: number;
};
declare const Icon: ({ name, size, color, strokeWidth, ...props }: IconProps) => import("react/jsx-runtime").JSX.Element;
export default Icon;
