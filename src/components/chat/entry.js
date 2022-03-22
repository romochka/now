import { useRef } from "react";
import { Avatar, Box, Text, useMultiStyleConfig } from "@chakra-ui/react";
import { cl, getRandomInt } from "../../shed";

const Entry = ({ entry, actor }) => {

   const { current: index } = useRef(getRandomInt(0, actor.avatar.length-1));

   const { left, right } = actor;
   const variant = cl({ left, right });

   const styles = useMultiStyleConfig("ChatEntry", { variant });

   console.log(variant, styles);

   console.log(index);

   console.log(`/assets/actors/${actor.id}/${actor.avatar[index]}`);

   const date = new Date(entry.dt);

   const dateFormatted = date.toLocaleTimeString([], {year: '2-digit', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});

   return (
      <Box __css={styles.entry}>
         <Box __css={styles.date}>{ dateFormatted }</Box>
         <Box __css={styles.line}>{ entry.line }</Box>
         <Box __css={styles.actor}>
            <Avatar borderWidth="3px" borderColor={styles.line.borderColor} name={actor.full} src={`/assets/actors/${actor.id}/${actor.avatar[index]}`} />
            <Text fontSize="sm" mt="6px">{ actor.full }</Text>
         </Box>
      </Box>
   )

};

export default Entry;
