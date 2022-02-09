import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    paddingTop: 40,
    backgroundColor: 'white',
    justifyContent: 'center'
  },

  header: {
    height: 50,
    alignContent: 'center',
    backgroundColor: '#bf80ff'
  },

  tableTxt: {
    margin: 10
  },

  headerTxt: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  rowsTxt: {
    textAlign: 'center'
  },

  rows: {
    height: 55
  },

  titleTxt: {
    color: '#9933ff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    textDecorationLine: 'underline'
  },

  tableBorder: {
    borderWidth: 1,
    borderColor: 'white'
  }
})

export default styles;