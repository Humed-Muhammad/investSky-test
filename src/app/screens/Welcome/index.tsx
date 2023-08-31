/**
 *
 * Welcome
 *
 */
import * as React from 'react';
import { Image, View } from 'react-native';
import { RootTabScreenProps } from 'src/utils/types/types';
import { useLocalization } from 'src/locales';
import { useLoadFonts } from 'src/utils/hooks/useLoadFonts';
import { Button, Text } from 'react-native-paper';

interface Props {}

export function Welcome({ navigation }: RootTabScreenProps<'Welcome'>) {
  const { i18n } = useLocalization();

  const [fontsLoaded] = useLoadFonts();
  if (!fontsLoaded) return null;

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        // justifyContent: 'flex',
        alignItems: 'center',
      }}
    >
      <Image
        source={require('src/assets/images/logoXl.jpg')}
        style={{
          height: 300,
          width: 300,
          resizeMode: 'contain',
        }}
      />
      <Text
        // variant="titleLarge"
        style={{
          textAlign: 'center',
          width: '80%',
          fontFamily: 'PoppinsBold',
          fontSize: 26,
        }}
      >
        Give a new look to your car
      </Text>
      <Text
        style={{
          textAlign: 'center',
          width: '80%',
          fontFamily: 'Poppins',
        }}
      >
        Your sparkling clean car is just a touch away!
      </Text>
      <Button
        mode="outlined"
        icon="arrow-right"
        onPress={() => navigation.navigate('Login')}
        style={{
          marginTop: 140,
        }}
      >
        Next
      </Button>
    </View>
  );
}
