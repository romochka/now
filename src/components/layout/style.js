
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
            bg: "orange.100",
            w: ["100vw", null, "3.75rem"],
            h: ["3.75rem", null, "unset"],
         },
      },
      content: {
         panel: {
            bg: "blue.100", flexGrow: "1",
            flexDirection: "column",
         },
      },
   },
};
