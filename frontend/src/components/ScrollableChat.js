

import { Avatar } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import ScrollableFeed from "react-scrollable-feed";
import { Box, Text } from "@chakra-ui/react";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();

  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => (
          <Box display="flex" key={m._id}>
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                <Avatar
                  mt="7px"
                  mr={1}
                  size="sm"
                  cursor="pointer"
                  name={m.sender.name}
                  src={m.sender.pic}
                />
              </Tooltip>
            )}
            <Text
              bg={m.sender._id === user._id ? "blue.100" : "green.200"}
              borderRadius="20px"
              px={4}
              py={2}
              maxW="75%"
              ml={isSameSenderMargin(messages, m, i, user._id)}
              mt={isSameUser(messages, m, i, user._id) ? 3 : 10}
            >
              {m.content}
            </Text>
          </Box>
        ))}
    </ScrollableFeed>
  );
};

export default ScrollableChat;

// import { Avatar, Box, Text, Tooltip } from "@chakra-ui/react";
// import ScrollableFeed from "react-scrollable-feed";
// import {
//   isLastMessage,
//   isSameSender,
//   isSameSenderMargin,
//   isSameUser,
// } from "../config/ChatLogics";
// import { ChatState } from "../Context/ChatProvider";

// const ScrollableChat = ({ messages }) => {
//   const { user } = ChatState();

//   return (
//     <ScrollableFeed>
//       {messages &&
//         messages.map((m, i) => (
//           <Box display="flex" key={m._id}>
//             {(isSameSender(messages, m, i, user._id) ||
//               isLastMessage(messages, i, user._id)) && (
//               <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
//                 <Avatar
//                   mt="7px"
//                   mr={1}
//                   size="sm"
//                   cursor="pointer"
//                   name={m.sender.name}
//                   src={m.sender.pic}
//                 />
//               </Tooltip>
//             )}
//             <Text
//               bg={m.sender._id === user._id ? "blue.300" : "green.300"}
//               borderRadius="lg"
//               px={3}
//               py={2}
//               maxW="70%"
//               ml={isSameSenderMargin(messages, m, i, user._id)}
//               mt={isSameUser(messages, m, i, user._id) ? 1 : 3}
//               fontSize="sm"
//             >
//               {m.content}
//             </Text>
//           </Box>
//         ))}
//     </ScrollableFeed>
//   );
// };

// export default ScrollableChat;