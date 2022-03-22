
import { extendTheme } from "@chakra-ui/react";
import components from "../components";

const config = {
   useSystemColorMode: true,
};

const overrides = {
   components,
   config,
};

export default extendTheme(overrides);
