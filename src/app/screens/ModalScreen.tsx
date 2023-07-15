import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import { View } from 'src/app/components/Themed';

export default function ModalScreen() {
  return (
    <View>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      {/* <Button>
        <Text>Book</Text>
      </Button> */}
    </View>
  );
}
