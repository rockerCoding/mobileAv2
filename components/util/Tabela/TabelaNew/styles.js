import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Dimensions.get("screen").height * 0.1,
    width: Dimensions.get("screen").width
  }
})