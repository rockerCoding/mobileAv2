import { Dimensions, StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white'
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'blue'
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
    right: 0,
  },
  titleContainer: {
    width: '100%',
    backgroundColor: "blue",
    height: Dimensions.get("screen").height * 0.1,
    justifyContent: 'center' , alignItems: 'center',
    borderRadius: 5,
  },
  titleText: {
    color: 'white',
    letterSpacing: 5,
    textTransform: "uppercase",
    fontWeight: '300',
    fontSize: 30
  },

  buttonsBottomContainer: {
    flex: 1,
    justifyContent: 'space-around'
  }
});
