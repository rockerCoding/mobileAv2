import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    flex: 1,
    flexDirection: 'row',
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

  innerContainer: {
    flex: 8,
    paddingHorizontal: 30,
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#34baeb',
  },
  buttonValid: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
