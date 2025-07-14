import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { ChatState } from '../Context/ChatProvider';
import SideDrawer from '../components/miscellaneous/SideDrawer';
import MyChats from '../components/MyChats';
import ChatBox from '../components/ChatBox';

const ChatPage = () => {
  const { user } = ChatState();

  // ✅ This controls re-fetching chats/messages when new messages arrive etc.
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: '100%' }}>
      {/* Top header with search & profile */}
      {user && <SideDrawer />}

      {/* Main chat area: sidebar + chatbox */}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {/* Sidebar showing list of chats */}
        {user && (
          <MyChats fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}

        {/* Chat area showing messages */}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
