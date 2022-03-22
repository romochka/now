import { Flex, useMultiStyleConfig } from "@chakra-ui/react";

const Layout = (props) => {

   const { children, ...rest } = props;

   const styles = useMultiStyleConfig("Layout");

   return (
      <Flex sx={styles.layout} {...rest}>
         { children }
      </Flex>
   )
};

export default Layout;
