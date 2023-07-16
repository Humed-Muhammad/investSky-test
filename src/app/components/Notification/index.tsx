import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import { View } from 'src/app/components/Themed';
import { Container, Text } from '../Core';

export function Notification() {
  return (
    <Container height="100%">
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Text color="text" variant="h2">
        No Recent Notification
      </Text>
    </Container>
  );
}
