import { jsx as _jsx } from "react/jsx-runtime";
import { icons } from "../icons";
const Icon = ({ name, size = 24, color = "currentColor", strokeWidth = 2, ...props }) => {
    const SvgIcon = icons[name];
    if (!SvgIcon)
        return null;
    return (_jsx(SvgIcon, { width: size, height: size, stroke: color, strokeWidth: strokeWidth, ...props }));
};
export default Icon;
