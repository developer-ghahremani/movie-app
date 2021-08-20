import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { localStorageKeys, pageName } from "../../../constant";
import IText from "../../component/general/IText";
import Row from "../../component/general/Row";
import Logout from "../../component/icons/Logout";
import colors from "../../style/colors";
import { removeFromLocalStorage } from "../../utils/localStorage";
import { useNavigation } from "@react-navigation/native";
import FilterIcon from "../../component/icons/Filter";
import { HomeContext } from "./context";

const HomeHeader = () => {
  const { toggleFilterModal, state } = useContext(HomeContext);
  const counter = state.genres.length + state.languages.length;
  // + state.searchText.length >
  //   2 && 1;

  const { replace } = useNavigation();

  const handleLogout = async () => {
    try {
      removeFromLocalStorage(localStorageKeys.token);
      replace(pageName.auth.login);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Row pX={10} pY={10} justify="space-between" align="center">
      <IText color={colors.grayLight}>MovieApp</IText>
      <Row align="center">
        <View style={styles.badgeContainer}>
          <FilterIcon
            size={20}
            color={colors.grayLight}
            onPress={toggleFilterModal}
            style={styles.filterIcon}
          />
          {counter > 0 && (
            <View style={styles.badge}>
              <IText color={"white"}>{counter}</IText>
            </View>
          )}
        </View>

        <Logout color={colors.grayLight} size={20} onPress={handleLogout} />
      </Row>
    </Row>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  badgeContainer: {
    width: 35,
    height: 30,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  filterIcon: {
    position: "absolute",
    left: 0,
  },
  badge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: colors.red,
    top: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
