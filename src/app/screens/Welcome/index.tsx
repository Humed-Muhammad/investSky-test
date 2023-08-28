/**
 *
 * Welcome
 *
 */
import * as React from 'react';
import { Image, View } from 'react-native';
import { RootTabScreenProps } from 'src/utils/types/types';
import { useLocalization } from 'src/locales';
import { Button, Text } from 'src/app/components/Core';
import { useLoadFonts } from 'src/utils/hooks/useLoadFonts';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from 'src/utils/theme';

interface Props {}

export function Welcome({ navigation }: RootTabScreenProps<'Welcome'>) {
  const { i18n } = useLocalization();
  const { theme } = useTheme();

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
        variant="h1"
        textAlign="center"
        width="80%"
        fontFamily="PoppinsBold"
        // fontWeight="bold"
        color="gray.800"
      >
        Give a new look to your car
      </Text>
      <Text
        variant="h4"
        textAlign="center"
        width="80%"
        fontFamily="Poppins"
        // fontWeight="bold"
        color="gray.800"
      >
        Your sparkling clean car is just a touch away!
      </Text>
      <Button
        icon={
          <FontAwesome
            name="arrow-right"
            color={theme.colors.background}
            size={18}
          />
        }
        marginTop={100}
        width={70}
        backgroundColor="text"
        onPress={() => navigation.navigate('Login')}
        // style={{
        //   transform: 'rotate(180deg)',
        // }}
      />
    </View>
  );
}
