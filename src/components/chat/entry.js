import { useRef } from "react";
import { Avatar, Box } from "@chakra-ui/react";
import { getRandomInt } from "../../shed";

const Entry = ({ entry, actor }) => {

   const { current: index } = useRef(getRandomInt(0, actor.avatar.length-1));

   console.log(actor);

   console.log(index);

   console.log(`/assets/actors/${actor.id}/${actor.avatar[index]}`);

   return (
      <Box>
         <Box>{ entry.dt }</Box>
         <Box>{ entry.line }</Box>
         <Box>
            <Avatar name={actor.full} src={`/assets/actors/${actor.id}/${actor.avatar[index]}`} />
            <Box>{ actor.full }</Box>
         </Box>
      </Box>
   )

};

export default Entry;
