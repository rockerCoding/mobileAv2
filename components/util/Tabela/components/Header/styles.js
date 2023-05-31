import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#b9bf83',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get("screen").height * ( 5 / 100),
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  headerTextContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 600,
    flex: 1
    
  },
  separator: {
    backgroundColor: 'grey',
    width: 0.5,
    right: 0,
    bottom: '100%'
  }
})