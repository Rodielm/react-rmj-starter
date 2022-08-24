import colors from "@siimple/colors";
import base from "@siimple/preset-base";

export default {
    useRootStyles: false,
    useBorderBox: true,
    prefix: "",
    ...base,
    colors: {
        primary: colors.blue["500"],
        secondary: colors.mint["600"],
        text: colors.gray["800"],
        background: "#fff",
        muted: colors.gray["200"],
    },
    fonts: {
        body: ["Roboto", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
        code: ["monospace"],
    },
};