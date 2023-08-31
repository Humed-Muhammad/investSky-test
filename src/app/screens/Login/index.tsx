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
import { Button, Text, TextInput } from 'react-native-paper';
import { Container } from 'src/app/components/Core';
import { Colors } from 'src/utils/theme/variables';
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
              style={{
                fontFamily: 'PoppinsBold',
                fontSize: 30,
              }}
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
              {/* <PhoneNumberInput /> */}
              <Text
                variant="labelLarge"
                style={{ textAlign: 'left', width: '85%', marginBottom: 10 }}
              >
                Sign in with your email only
              </Text>
              <TextInput
                mode="outlined"
                style={{
                  width: '85%',
                  marginBottom: 10,
                  borderColor: Colors.gray[300],
                }}
                placeholder="Your email address"
              />
              <Button
                rippleColor="gray"
                onPress={() => navigation.navigate('Root')}
                mode="contained-tonal"
                style={{
                  width: '85%',
                  borderRadius: 2,
                  marginBottom: 20,
                }}
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
