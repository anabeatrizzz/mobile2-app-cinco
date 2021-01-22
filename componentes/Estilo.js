import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    paddingTop: 40,
    backgroundColor: 'white',
    justifyContent: 'center'
  },

  cabecalho: {
    height: 50,
    alignContent: 'center',
    backgroundColor: '#bf80ff'
  },

  textoTabela: {
    margin: 10
  },

  textoCabecalho: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  textoLinhas: {
    textAlign: 'center'
  },

  linhas: {
    height: 55
  },

  textoTitulo: {
    color: '#9933ff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    textDecorationLine: 'underline'
  }
})

export default estilos;