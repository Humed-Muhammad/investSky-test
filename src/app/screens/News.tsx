import { StyleSheet } from 'react-native';

import { View } from 'src/app/components/Themed';
import { Text } from '../components/Core';

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
    <View style={styles.container}>
      <Text style={styles.title}>News</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text variant="h2">Coming Soon</Text>
    </View>
  );
}
