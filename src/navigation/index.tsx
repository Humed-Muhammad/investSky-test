/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, View } from 'react-native';

import { Notification } from 'src/app/components/Notification/Loadable';
import NotFoundScreen from 'src/app/screens/NotFoundScreen';
import { Markets } from 'src/app/screens/Markets/Loadable';
import Schedule from 'src/app/screens/Schedule';

// import { Home } from 'src/app/screens/Home/Loadable';
import { Profile } from 'src/app/screens/Profile/Loadable';
// [IMPORT NEW COMPONENT SCREEN ABOVE] < Needed for importing screen

import { RootStackParamList, RootTabParamList } from 'src/utils/types/types';
import { useTheme } from 'src/utils/theme';
import { Home } from 'src/app/screens/Home/Loadable';
import { Box, Flex, Text } from 'src/app/components/Core';
import { FontAwesome } from '@expo/vector-icons';
import { ThemeController } from 'src/app/components/LightDarkThem';
import { Welcome } from 'src/app/screens/Welcome/Loadable';
import { Login } from 'src/app/screens/Login/Loadable';
import { Avatar } from 'react-native-paper';
import LinkingConfiguration from './LinkingConfiguration';
import { tabBarOptions } from './tabBarOptions';

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

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
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={screenProps => ({
          ...tabBarOptions<'Home'>({
            name: 'home',
            screenProps,
            screenName: 'Home',
            theme,
          }),
          headerLeft: () => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginHorizontal: 10,
              }}
            >
              <Avatar.Image
                size={45}
                source={require('src/assets/images/profile.webp')}
                style={{ marginRight: 5 }}
              />
              <View style={{ display: 'flex' }}>
                <Text variant="list-item">Welcome</Text>
                <Text variant="primary">Humed Essie</Text>
              </View>
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginHorizontal: 10,
              }}
            >
              <Box width="half" display="flex" flexDirection="row">
                <FontAwesome name="search" />
                <FontAwesome name="bell-o" />
              </Box>
            </View>
          ),
        })}
      />

      <BottomTab.Screen
        name="Markets"
        component={Markets}
        options={screenProps => ({
          ...tabBarOptions<'Markets'>({
            screenProps,
            name: 'calendar',
            screenName: 'Markets',
            theme,
            showHeaderStyle: true,
          }),
          headerRight: () => (
            <Flex flexDirection="row">
              <Pressable
                onPress={() => screenProps.navigation.navigate('Notification')}
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
        })}
      />
      <BottomTab.Screen
        name="Schedule"
        component={Schedule}
        options={screenProps =>
          tabBarOptions<'Schedule'>({
            name: 'map-o',
            screenProps,
            screenName: 'Schedule',
            theme,
          })
        }
      />

      {/* <BottomTab.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      /> */}

      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={screenProps =>
          tabBarOptions<'Profile'>({
            name: 'user-o',
            screenProps,
            screenName: 'Profile',
            theme,
          })
        }
      />

      {/* // [INSERT NEW SCREEN COMPONENT ABOVE] < Needed for generating screen */}

      {/** @End  */}
    </BottomTab.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerTitle: 'Welcome' }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
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
