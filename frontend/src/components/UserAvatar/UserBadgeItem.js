import { CloseIcon } from "@chakra-ui/icons";
import { Badge, Box } from "@chakra-ui/react";

const UserBadgeItem = ({ user, handleFunction, admin }) => {
  return (
    <Badge
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize="12px"
      colorScheme="purple"
      cursor="pointer"
      onClick={handleFunction}
      display="flex"
      alignItems="center"
      gap={1}
    >
      {user.name}
      {admin === user._id && <span>(Admin)</span>}
      <Box as="span" pl={1}>
        <CloseIcon boxSize={2.5} />
      </Box>
    </Badge>
  );
};

export default UserBadgeItem;
