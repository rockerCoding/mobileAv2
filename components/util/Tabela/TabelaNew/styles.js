import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    borderColor: 'lightblue',
    borderWidth: 0.1,
    borderStyle: 'solid',
    borderRadius: 5
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Dimensions.get("screen").height * 0.03,
    width: Dimensions.get("screen").width
  },

  // title
  titleContainer: {
    height: Dimensions.get("screen").height * 0.05,
    justifyContent: 'center', alignItems: 'center'
  },
  titleText: {
    textTransform: 'uppercase',
    fontWeight: '100',
    letterSpacing: 5
  },

  // header
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: Dimensions.get("screen").height * 0.02,
  },
  headerCellsContainer: {
    borderRightColor: 'grey',
    borderStyle: 'solid'
  },
  headerText: {
    fontWeight: '500',
    textAlign: 'center',
    textTransform: "uppercase",
    letterSpacing: 5
  }
})