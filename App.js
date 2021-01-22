import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, Linking } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell} from 'react-native-table-component';

// CSS
import estilos from './componentes/Estilo.js';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Cabecalho: ['No', 'Título', 'Duração'],
      Linhas: [
        ['01', 'Deixando os Holofotes', '11:11'],
        ['02', 'Bieber Está de Volta', '08:54'],
        ['03', 'Fazendo Mágica', '09:27'],
        ['04', 'Justin e Hailey', '11:22'],
        ['05', 'A Temporada Sombria', '14:50'],
        ['06', 'Somente a Partir Daqui', '08:37'],
        ['07', 'Planejando o casamento um ano depois', '08:30'],
        ['08', 'O Casamento: Oficialmente Sr. e Sra. Bieber', '10:57'],
        ['09', 'Yummy a Caminho', '09:52'],
        ['10', 'O Grand Finale', '16:23']
      ]
    }
  }

  render(){
    return (
      <View style={estilos.container}>
        <Text
          onPress={
            () => Linking.openURL("https://youtu.be/cAVgKdbDlRY")
          }
          style={estilos.textoTitulo}
        >
          Justin Bieber - Seasons
        </Text>
        <Table borderStyle={{ borderWidth: 1, borderColor: 'white'}}>
          <Row
            textStyle={estilos.textoCabecalho}
            style={estilos.cabecalho}
            data={this.state.Cabecalho}
            flexArr={[1, 9, 2]}
          />
          <TableWrapper>
            {
              this.state.Linhas.map(
                (currentValue, index) => (
                  <Row
                    key={index}
                    data={currentValue}
                    flexArr={[1, 9, 2]}
                    textStyle={estilos.textoLinhas}
                    style={estilos.linhas}
                  />
                )
              )
            }
          </TableWrapper>
        </Table>
      </View>
    )
  }
}