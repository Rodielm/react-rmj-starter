import colors from "@siimple/colors";
import ice from "@siimple/preset-ice"


// No coje la fuentes
// Falta colocar ...base.colors sino algunos falla 

export default {
    useRootStyles: true,
    useBorderBox: true,
    prefix: "",
    ...ice,
    fonts: {
        body: ["Roboto", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
        code: ["monospace"],
    },
};