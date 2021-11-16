import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex aling="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Matheus Cerqueira</Text>
          <Text color="gray.300" fontSize="small">
            matheus.cerqueria1208@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Matheus Cerqueira"
        src="http://github/MatheusCerqueiraDev.png"
      />
    </Flex>
  );
}
