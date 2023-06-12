import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: { 
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height * 0.08, 
    flexDirection: 'row' 
  },
  leftHeaderContainer: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: 'center', alignItems: 'center'
  },
  middleHeaderContainer: {
    flex: 5,
    backgroundColor: 'green',
    justifyContent: 'center', alignItems: 'center'
  },
  rightHeaderContainer: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center', alignItems: 'center'
  }
})