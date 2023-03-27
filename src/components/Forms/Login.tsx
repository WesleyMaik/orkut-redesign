import Link from "next/link";
import { Button, Checkbox, Heading, HStack, Spacer, Stack, Text } from "@chakra-ui/react";
import { Input, PasswordInput } from "@/components/Input";

export interface LoginProps { };
export const Login = ({ }: LoginProps) => {
    return (
        <Stack
            padding={2}
        >
            <Heading>Acesse sua conta</Heading>
            <Stack
                spacing={8}
            >
                <Input
                    label="Email"
                    placeholder="Insira seu e-mail"
                    colorScheme="primary"
                    isRequired
                />
                <PasswordInput
                    label="Senha"
                    placeholder="Insira sua senha"
                    colorScheme="primary"
                    isRequired
                />
            </Stack>
            <HStack>
                <Checkbox
                    colorScheme="pink"
                >Lembre-me</Checkbox>
                <Spacer />
                <Link href="#">
                    <Text
                        color="primary"
                        fontWeight="bold"
                    >Esqueci minha senha!</Text>
                </Link>
            </HStack>
            <Button
                variant="primary"
                marginY={4}
            >Entrar</Button>
        </Stack>
    )
};