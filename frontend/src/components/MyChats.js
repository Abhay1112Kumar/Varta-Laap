
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Text,
  useToast,
  Stack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";
import ChatLoading from "./ChatLoading";
import { getSender } from "../config/ChatLogics";
import GroupChatModal from "./miscellaneous/GroupChatModal";

const MyChats = ({ fetchAgain, setFetchAgain }) => {
  const [loggedUser, setLoggedUser] = useState();
  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();
  const toast = useToast();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/chat", config);

      // Filter out chats where the user has been removed
      const filtered = data.filter(chat =>
        chat.users.some(u => u._id === user._id)
      );

      setChats(filtered);
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description: "Failed to load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setLoggedUser(userInfo);
    fetchChats();
    // eslint-disable-next-line
  }, [fetchAgain]);

  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDirection="column"
      alignItems="center"
      p={3}
      bg="white"
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        fontFamily="Work sans"
        display="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        My Chats
        <GroupChatModal fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}>
          <Button
            display="flex"
            fontSize={{ base: "17px", md: "10px", lg: "17px" }}
            rightIcon={<AddIcon />}
          >
            New Group Chat
          </Button>
        </GroupChatModal>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        p={3}
        bg="#F8F8F8"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
      >
        {chats ? (
          <Stack overflowY="scroll">
            {chats.map((chat) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                cursor="pointer"
                bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                color={selectedChat === chat ? "white" : "black"}
                px={3}
                py={2}
                borderRadius="lg"
                key={chat._id}
              >
                <Text>
                  {!chat.isGroupChat
                    ? getSender(loggedUser, chat.users)
                    : chat.chatName}
                </Text>
                {chat.latestMessage && (
                  <Text fontSize="xs" noOfLines={1}>
                    <b>{chat.latestMessage.sender.name}:</b>{" "}
                    {chat.latestMessage.content}
                  </Text>
                )}
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  );
};

export default MyChats;


// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   Text,
//   useToast,
//   Stack,
// } from "@chakra-ui/react";
// import { AddIcon } from "@chakra-ui/icons";
// import axios from "axios";
// import { ChatState } from "../Context/ChatProvider";
// import ChatLoading from "./ChatLoading";
// import { getSender } from "../config/ChatLogics";
// import GroupChatModal from "./miscellaneous/GroupChatModal";

// const MyChats = ({ fetchAgain, setFetchAgain }) => {
//   const [loggedUser, setLoggedUser] = useState();
//   const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();
//   const toast = useToast();

//   const fetchChats = async () => {
//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       };

//       const { data } = await axios.get("/api/chat", config);

//       const filtered = data.filter(chat =>
//         chat.users.some(u => u._id === user._id)
//       );

//       setChats(filtered);
//     } catch (error) {
//       toast({
//         title: "Error Occurred!",
//         description: "Failed to load the chats",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom-left",
//       });
//     }
//   };

//   useEffect(() => {
//     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//     setLoggedUser(userInfo);
//     fetchChats();
//   }, [fetchAgain]);

//   return (
//     <Box
//       display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
//       flexDirection="column"
//       alignItems="center"
//       p={3}
//       bg="white"
//       w={{ base: "100%", md: "31%" }}
//       borderRadius="lg"
//       borderWidth="1px"
//     >
//       <Box
//         pb={3}
//         px={3}
//         fontSize={{ base: "28px", md: "30px" }}
//         fontFamily="Work sans"
//         display="flex"
//         w="100%"
//         justifyContent="space-between"
//         alignItems="center"
//       >
//         My Chats
//         <GroupChatModal fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}>
//           <Button
//             display="flex"
//             fontSize={{ base: "17px", md: "10px", lg: "17px" }}
//             rightIcon={<AddIcon />}
//           >
//             New Group Chat
//           </Button>
//         </GroupChatModal>
//       </Box>

//       <Box
//         display="flex"
//         flexDirection="column"
//         p={3}
//         bg="#F8F8F8"
//         w="100%"
//         h="100%"
//         borderRadius="lg"
//         overflowY="auto"
//       >
//         {chats ? (
//           <Stack>
//             {chats.map((chat) => (
//               <Box
//                 onClick={() => setSelectedChat(chat)}
//                 cursor="pointer"
//                 bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
//                 color={selectedChat === chat ? "white" : "black"}
//                 px={3}
//                 py={2}
//                 borderRadius="lg"
//                 key={chat._id}
//               >
//                 <Text>
//                   {!chat.isGroupChat
//                     ? getSender(loggedUser, chat.users)
//                     : chat.chatName}
//                 </Text>
//                 {chat.latestMessage && (
//                   <Text fontSize="xs" noOfLines={1}>
//                     <b>{chat.latestMessage.sender.name}:</b> {chat.latestMessage.content}
//                   </Text>
//                 )}
//               </Box>
//             ))}
//           </Stack>
//         ) : (
//           <ChatLoading />
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default MyChats;


