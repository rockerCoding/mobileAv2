import { Dimensions, StyleSheet } from "react-native";

const HEIGHT = Dimensions.get("screen").height
const WIDTH = Dimensions.get("screen").width

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
    
    height: HEIGHT * 0.075,
    width: WIDTH
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
    zIndex: 10
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