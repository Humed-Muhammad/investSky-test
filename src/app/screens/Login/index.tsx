/**
*
* Login
*
*/
import * as React from 'react';
import {Text, View} from 'react-native';
import { RootTabScreenProps } from "src/utils/types/types";

interface Props {}

export function Login({
  navigation,
}: RootTabScreenProps< Login >) {

  return (
  <View  style={ {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      } } >
  <Text
    style={ {
      fontFamily: "Jost",
      fontWeight: "600",
      fontSize: 40,
    } }
  >
    Login Screen
  </Text>
  </View>
  );

};

