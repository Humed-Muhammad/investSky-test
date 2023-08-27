/**
 *
 * Welcome
 *
 */
import * as React from 'react';
import { ImageBackground, View } from 'react-native';
import { RootTabScreenProps } from 'src/utils/types/types';
import { useLocalization } from 'src/locales';
import { Button } from 'src/app/components/Core';
import { FontAwesome } from '@expo/vector-icons';

interface Props {}

export function Welcome({ navigation }: RootTabScreenProps<'Welcome'>) {
  const { i18n } = useLocalization();

  return (
    <ImageBackground
      source={require('../../../assets/images/welcome.png')}
      resizeMode="contain"
      // style={styles.image}
    >
      <View
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          icon={<FontAwesome name="arrow-right" color="white" size={18} />}
          position="absolute"
          width={100}
          bottom={60}
          backgroundColor="primary"
          onPress={() => navigation.navigate('Root')}
        >
          start
        </Button>
      </View>
    </ImageBackground>
  );
}
