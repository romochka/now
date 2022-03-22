import { mode } from "@chakra-ui/theme-tools";

export const chat = {
   baseStyle: props => ({
      // w: "100%",
      // bgColor: mode("gray.100", "gray.900")(props),
      // bg: "orange.100",
      maxWidth: [null, null, null, "900px"],
      m: ["5px", null, "20px"],
      h: "1px",
      flexGrow: "1",
      display: "flex",
      flexDirection: "column",
      overflowY: "scroll",
   }),
};

export const entry = {
   parts: ["entry", "date", "line", "actor"],
   baseStyle: props => ({
      entry: { display: "flex", flexDirection: "column", my: "2em" },
      date: {
         alignSelf: "center",
         fontSize: "xs",
         color: mode("gray.500", "gray.300")(props),
         mb: "1em",
         whiteSpace: "nowrap",
      },
      line: {
         w: ["85%", "70%", "67%"],
         borderRadius: "16px",
         px: "16px",
         pt: "8px",
         pb: "16px",
         borderColor: mode("gray.200", "gray.700")(props),
         bg: mode("white", "black")(props),
         borderWidth: "3px",
      },
      actor: {
         display: "flex",
         alignItems: "center",
         gap: "4px",
         mt: "-12px",
      },
   }),
   variants: {
      left: {
         line: {
            alignSelf: "flex-start",
         },
         actor: {
            alignSelf: "flex-start",
            ml: "8px",
         },
      },
      right: {
         line: {
            alignSelf: "flex-end",
         },
         actor: {
            alignSelf: "flex-end",
            flexDirection: "row-reverse",
            mr: "8px",
         },
      },
   },
};
