/**
 *
 * Login
 *
 */
import * as React from 'react';
import { Button, Container, Input, Text } from 'src/app/components/Core';
import { RootTabScreenProps } from 'src/utils/types/types';

export function Login({ navigation }: RootTabScreenProps<'Login'>) {
  return (
    <Container bg="white" height="100%">
      <Text
        bg="primary"
        color="white"
        p={2}
        borderRadius={2}
        justifySelf="flex-start"
        my={2}
        variant="h1"
      >
        Invest Sky Login
      </Text>
      <Text my={2} variant="h3">
        Welcome back
      </Text>
      <Input
        placeholder="Email"
        bg="gray.100"
        border={1}
        borderColor="gray.300"
        my={2}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        bg="gray.100"
        border={1}
        borderColor="gray.300"
        mb={2}
      />
      <Text mb={2}>Don't have an account yet?</Text>

      <Button width="300px" variant="secondary" color="white">
        Login
      </Button>
    </Container>
  );
}
