import { Dimensions, StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  headerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  leftHeaderContainer: {
    flex: 2,
    justifyContent: 'center', alignItems: 'center'
  },
  middleHeaderContainer: {
    flex: 6,
    justifyContent: 'center', alignItems: 'center'
  },
  rightHeaderContainer: {
    flex: 2,
    
  },


  innerContainer: {
    flex: 8,
    padding: 20
  },
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bottomContainer: {
    flex: 1,
    /* flexDirection: 'row', */
    justifyContent: 'center',
    
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#34baeb',
    /* flex: 1, */
    height: Dimensions.get("screen").height * 0.05,
  },
  buttonValid: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  closeButton: {
    position: 'absolute',
    left: 0,
    top: 5,
  },
  detailsButton: {
    position: 'absolute',
    right: 0,
    top: 10,
  },
  titleContainer: {
    paddingHorizontal: 40,
    backgroundColor: "blue",
    height: Dimensions.get("screen").height * 0.07,
    justifyContent: 'center' , alignItems: 'center',
    borderRadius: 5,
    position: 'absolute',
    top: 0
  },
  titleText: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'white',
    letterSpacing: 5,
    textTransform: "uppercase",
    fontWeight: '300',
    fontSize: 20,
    borderRadius: 5
  },

  buttonsBottomContainer: {
    flex: 1,
    justifyContent: 'space-around'
  },



});
