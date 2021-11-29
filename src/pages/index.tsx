import { Button, Flex, Stack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../components/Form";

type Inputs = {
  email: string;
  password: string;
};

export default function SignIn() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Campo obrigatório.")
      .email("Deve ser um email"),
    password: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing="2">
          <Input
            {...register("email")}
            error={errors.email}
            type="email"
            label="E-mail"
          />
          <Input
            {...register("password")}
            error={errors.password}
            type="password"
            label="Senha"
          />

          <Button
            type="submit"
            mt="4"
            colorScheme="pink"
            size="lg"
            isLoading={isSubmitting}
          >
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
