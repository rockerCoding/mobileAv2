import { Dimensions, StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  topContainer: {
    height: Dimensions.get("screen").height * 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20
  },
  th: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'grey',
    borderStyle: 'solid',

  },
  td: {
    justifyContent: 'center',
    paddingHorizontal: 0
    
  },
  thText: {
    letterSpacing: 2
  }

});
