import { Button, Flex, Stack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../components/Form";

type SignInFormatData = {
  email: string;
  password: string;
};

const singInFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email é obrigatório")
    .email("Insira um email existente"),
  password: yup.string().required("Senha é obrigatório"),
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(singInFormSchema),
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormatData> = (values) => {};

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            type="email"
            name="email"
            label="E-mail"
            error={errors.email}
            {...register("email")}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            error={errors.password}
            {...register("password")}
          />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
