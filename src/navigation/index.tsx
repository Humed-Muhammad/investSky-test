/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from 'src/utils/constants/Colors';
import useColorScheme from 'src/utils/hooks/useColorScheme';
import ModalScreen from 'src/app/screens/ModalScreen';
import NotFoundScreen from 'src/app/screens/NotFoundScreen';
import Markets from 'src/app/screens/Markets';
import TabTwoScreen from 'src/app/screens/TabTwoScreen';

import { Login } from 'src/app/screens/Login/Loadable';
// [IMPORT NEW COMPONENT SCREEN ABOVE] < Needed for importing screen

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from 'src/utils/types/types';
import { useTheme } from 'src/utils/theme';
import LinkingConfiguration from './LinkingConfiguration';

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  const { theme } = useTheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Markets"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Markets"
        component={Markets}
        options={({ navigation }: RootTabScreenProps<'Markets'>) => ({
          headerTitle: '',
          title: 'Markets',
          tabBarIcon: ({ color }) => {
            return <Octicons name="arrow-switch" size={20} color={color} />;
          },
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="bell-o"
                size={20}
                color={theme?.colors.white}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="align-left"
                size={20}
                color={theme?.colors.white}
                style={{ marginLeft: 15 }}
              />
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: theme?.colors.primary,
            shadowColor: 'transparent', // this covers iOS
            elevation: 0, // this covers Android
          },
          headerTintColor: theme?.colors.white,
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />

<BottomTab.Screen
  name="Login"
  component={ Login }
  options={
    {title: "Login",
    tabBarIcon: ({color}) => <TabBarIcon name="code" color={color} />}
  }
/>
{/* // [INSERT NEW SCREEN COMPONENT ABOVE] < Needed for generating screen */}

      {/** @End  */}
    </BottomTab.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
