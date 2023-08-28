/**
 *
 * Login
 *
 */
import * as React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Button, Container, Text } from 'src/app/components/Core';
import { PhoneNumberInput } from 'src/app/components/PhoneNumberInput';
import { RootTabScreenProps } from 'src/utils/types/types';

export function Login({ navigation }: RootTabScreenProps<'Login'>) {
  return (
    <Container bg="white" width="100%" height="100%">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled={false}
        style={{
          width: '100%',
        }}
      >
        <ScrollView>
          <Container alignItems="flex-start" width="100%">
            <Text
              color="primary"
              justifySelf="flex-start"
              variant="h1"
              fontFamily="PoppinsBold"
            >
              Welcome!
            </Text>

            <Image
              source={require('src/assets/images/carWasher.jpg')}
              style={{
                resizeMode: 'contain',
                height: 200,
                width: '80%',
              }}
            />

            <Container width="100%">
              <PhoneNumberInput />
              <Button
                width="85%"
                bg="primary"
                color="white"
                borderRadius="2"
                onPress={() => navigation.navigate('Root')}
              >
                Sign In
              </Button>
            </Container>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}
