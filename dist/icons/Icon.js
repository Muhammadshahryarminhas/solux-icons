import { jsx as _jsx } from "react/jsx-runtime";
import { icons } from "./index";
const Icon = ({ name, size = 24, color = "#000", strokeWidth = 2, }) => {
    const SvgIcon = icons[name];
    if (!SvgIcon)
        return null;
    return (_jsx(SvgIcon, { width: size, height: size, stroke: color, strokeWidth: strokeWidth }));
};
export default Icon;
