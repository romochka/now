
import { mode } from "@chakra-ui/theme-tools";

const bgLight = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8'><line x1='0' y1='4' x2='8' y2='4' stroke='black' stroke-opacity='0.05' /></svg>")`;

const bgDark = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8'><line x1='0' y1='4' x2='8' y2='4' stroke='white' stroke-opacity='0.1' /></svg>")`;

export const layout = {
   parts: ["layout", "panel"],
   baseStyle: {
      layout: {
         flexGrow: 1,
         minHeight: "-webkit-fill-available",
         flexDirection: ["column", null, "row"],
      },
      panel: {
         display: "flex",
      },
   },
   variants: {
      sidebar: {
         panel: {
            w: ["100vw", null, "7rem"],
            h: ["3.75rem", null, "unset"],
            flexShrink: "0",
         },
      },
      content: props => ({
         panel: {
            flexGrow: "1",
            flexDirection: "column",
            bgImage: mode(bgLight, bgDark)(props),
         },
      }),
   },
};
