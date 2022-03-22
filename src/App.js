import React from 'react';
import {
   ChakraProvider,
} from '@chakra-ui/react';
import theme from './theme';
import Layout from './components/layout/layout';
import Panel from './components/layout/panel';
import Chat from './components/chat/chat';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {

   console.log(theme);

   return (
      <ChakraProvider theme={theme}>
         <Layout name="layout">
            <Routes>
               <Route path="/" element={ <Navigate to="chats/ww3" replace /> } />
               <Route path="chats" element={<Panel variant="content" name="content" />}>
                  <Route path=":chat" element={<Chat />} />
               </Route>
            </Routes>
            <Panel variant="sidebar" name="sidebar">sidebar</Panel>
         </Layout>
      </ChakraProvider>
   );
}

export default App;
