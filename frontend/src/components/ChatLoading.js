import { Stack } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/react";

const ChatLoading = () => {
  return (
    <Stack>
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
    </Stack>
  );
};

export default ChatLoading;

// import { Stack, Skeleton } from "@chakra-ui/react";

// const ChatLoading = () => {
//   return (
//     <Stack>
//       {Array(12)
//         .fill(0)
//         .map((_, i) => (
//           <Skeleton key={i} height="45px" />
//         ))}
//     </Stack>
//   );
// };

// export default ChatLoading;