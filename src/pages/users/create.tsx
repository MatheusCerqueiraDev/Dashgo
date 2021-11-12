import { Box, Divider, Flex, Heading, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">
            Criar Usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <Simplegrid></Simplegrid>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
