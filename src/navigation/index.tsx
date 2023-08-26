/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import { Notification } from 'src/app/components/Notification/Loadable';
import NotFoundScreen from 'src/app/screens/NotFoundScreen';
import { Markets } from 'src/app/screens/Markets/Loadable';
import News from 'src/app/screens/News';

// import { Home } from 'src/app/screens/Home/Loadable';
// [IMPORT NEW COMPONENT SCREEN ABOVE] < Needed for importing screen

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from 'src/utils/types/types';
import { useTheme } from 'src/utils/theme';
import { Flex } from 'src/app/components/Core';
import { ThemeController } from 'src/app/components/LightDarkThem';
import { Home } from 'src/app/screens/Home/Loadable';
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
  return <FontAwesome style={{ marginBottom: -3 }} {...props} />;
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const { theme } = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{
        backgroundColor: theme.colors.background,
        borderStyle: 'solid',
        borderColor: theme.colors.accent,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: navigation.isFocused() ? 'Home' : '',
          headerTitle: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome
              size={navigation.isFocused() ? 28 : 25}
              name="home"
              color={navigation.isFocused() ? theme.colors.primary : color}
            />
          ),

          headerStyle: {
            backgroundColor: theme.colors.background,
            shadowColor: 'transparent', // this covers iOS
            elevation: 0, // this covers Android
          },
        })}
      />

      <BottomTab.Screen
        name="Markets"
        component={Markets}
        options={({ navigation }: RootTabScreenProps<'Markets'>) => ({
          headerTitle: '',
          title: navigation.isFocused() ? 'Scheduled' : '',
          tabBarIcon: ({ color }) => {
            return (
              <FontAwesome
                name="calendar"
                size={navigation.isFocused() ? 28 : 25}
                color={navigation.isFocused() ? theme.colors.primary : color}
              />
            );
          },
          headerRight: () => (
            <Flex flexDirection="row">
              <Pressable
                onPress={() => navigation.navigate('Notification')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <FontAwesome
                  name="bell-o"
                  size={18}
                  style={{ marginRight: 15 }}
                  color={theme.colors.gray[50]}
                />
              </Pressable>
              <ThemeController color={theme.colors.gray[50]} />
            </Flex>
          ),
          // headerLeft: () => (
          //   <Pressable
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}
          //   >
          //     <FontAwesome
          //       name="align-left"
          //       size={navigation.isFocused() ? 28 : 25} color={theme?.colors.white}
          //       style={{ marginLeft: 15 }}
          //     />
          //   </Pressable>
          // ),
          headerStyle: {
            backgroundColor: theme?.colors.primary,
            shadowColor: 'transparent', // this covers iOS
            elevation: 0, // this covers Android
          },
        })}
      />
      <BottomTab.Screen
        name="News"
        component={News}
        options={({ navigation }: RootTabScreenProps<'News'>) => ({
          title: navigation.isFocused() ? 'Nearby' : '',
          headerTitle: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="map-o"
              size={navigation.isFocused() ? 28 : 25}
              color={navigation.isFocused() ? theme.colors.primary : color}
            />
          ),

          headerStyle: {
            // backgroundColor: theme.colors.background,
            shadowColor: 'transparent', // this covers iOS
            elevation: 0, // this covers Android
          },
        })}
      />

      {/* <BottomTab.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      /> */}

      {/* // [INSERT NEW SCREEN COMPONENT ABOVE] < Needed for generating screen */}

      {/** @End  */}
    </BottomTab.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      /> */}
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
        <Stack.Screen
          options={{
            headerTitle: 'Notification',
          }}
          name="Notification"
          component={Notification}
        />
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
