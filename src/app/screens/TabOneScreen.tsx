import { StyleSheet } from "react-native";

import EditScreenInfo from "src/app/components/EditScreenInfo";
import { RootTabScreenProps } from "src/utils/types/types";
import { useLocalization } from "src/locales";
import { Button, Container, Text } from "../components/Core";
import { useDispatch } from "react-redux";
import { useDefaultLayoutSlice } from "./defaultLayout/slice";
import { useTheme } from "src/utils/theme";
import { colors } from "src/utils/constants/themeColors";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"Markets">) {
  const { i18n } = useLocalization({
    lang: "ja",
  });
  const dispatch = useDispatch();
  const { actions } = useDefaultLayoutSlice();

  return (
    <Container style={styles.container}>
      <Container
        alignItems="flex-start"
        bg={colors.primary}
        width="100%"
        height={250}
      >
        <Text variant="h1" color="text">
          Markets
        </Text>
        <Button
          bg="primary"
          p="2"
          borderRadius="6"
          onPress={() => {
            dispatch(actions.changeThemeMode("light"));
          }}
        >
          <Text color="text">Change Theme</Text>
        </Button>
      </Container>
      <Text>
        {i18n.t("welcome")} {i18n.t("name")}
      </Text>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
