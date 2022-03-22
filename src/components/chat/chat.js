import { useState, useEffect } from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { uniq } from "lodash";
import Entry from "./entry";

async function fetchChat(chatName) {
   return await fetch(`/assets/chats/${chatName}/chat.json`).then(res => res.json());
};

async function fetchActor(actorName) {
   return await fetch(`/assets/actors/${actorName}/actor.json`).then(res => res.json())
}

const useChat = chatName => {

   const [entries, setEntries] = useState();
   const [actors, setActors] = useState();
   const [status, setStatus] = useState("idle");
   const [error, setError] = useState(null);

   useEffect(() => {
      if (entries) return;
      setStatus("loading");
      fetchChat(chatName).then(res => { setEntries(res) }).catch(err => { setError(err) });
   }, [entries, chatName]);

   useEffect(() => {
      if (!entries) return;
      const actorIds = uniq(entries.map(entry => entry.actor));
      console.log(actorIds);
      const promises = actorIds.map(actor => fetchActor(actor));
      Promise.all(promises)
      .then(res => setActors(res.map((actor, i) => {
         const a = {...actor, id: actorIds[i] };
         if (i % 2 === 0) { a.left = true } else { a.right = true }
         return a;
      } )))
      .catch(err => { setError(err) });
   }, [entries]);

   useEffect(() => { if (error) setStatus("error") }, [error]);

   useEffect(() => {
      if (entries && actors) setStatus("success");
   }, [entries, actors]);

   return { error, status, entries, actors };

};

const Chat = () => {

   const styles = useStyleConfig("Chat");

   const { chat } = useParams();

   const { status, entries, actors } = useChat(chat);

   useEffect(() => {
      console.log("CHAT:", entries);
      console.log("ACTORS:", actors);
   }, [entries, actors]);

   if (status !== "success") return null;

   return (
      <Box __css={styles} name="chat">
         <Box>
            {
               entries.map((entry, i) => {
                  const a = actors.find(a => a.id === entry.actor);
                  console.log(a);
                  return (
                     <Entry key={i} entry={entry} actor={actors.find(a => a.id === entry.actor)} />
                  )
               })
            }
         </Box>

      </Box>
   )
};

export default Chat;
