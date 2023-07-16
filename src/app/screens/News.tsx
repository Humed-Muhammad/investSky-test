import { StyleSheet } from 'react-native';

import { View } from 'src/app/components/Themed';
import { Container, Text } from '../components/Core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default function News() {
  return (
    <Container height="100%" bg="background">
      <Text color="text" style={styles.title}>
        News
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text color="text" variant="h2">
        Coming Soon
      </Text>
    </Container>
  );
}
