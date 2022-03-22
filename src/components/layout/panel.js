import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Panel = (props) => {
   const { children, variant, ...rest } = props;
   const styles = useMultiStyleConfig("Layout", { variant });
   return (
      <Box __css={styles.panel} {...rest}>
         <Outlet />
         { children }
      </Box>
   );
};

export default Panel;
