import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  topContainer: {
    flex: 3,
    justifyContent: 'center', alignItems: 'center'
    
  },
  bottomContainer: {
    flex: 3,
    
    justifyContent: 'space-around'
  },
  buttonContainer: {
    flexDirection: 'row',
    /* backgroundColor: "#4CAF50", */
    
    height: Dimensions.get("screen").height * 0.1,
    justifyContent: 'space-evenly', alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textTransform: 'uppercase',
    letterSpacing: 10

  },
  imageLogo: {
    width: Dimensions.get("screen").width * 0.5,
    height: Dimensions.get("screen").width * 0.5
  },
  warningContainer: {
    flex: 1/2,
    
    
    justifyContent: 'center',
    alignItems: 'center'
  },
  warningText: {
    color: "white",
    textTransform: 'uppercase'
  }

})