import React, { useState } from 'react';
import { Text, View, Linking } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import styles from './App.css';

export default function App() {
  const [tableContent, setTableContent] = useState({
    Header: ['No', 'Título', 'Duração'],
    Rows: [
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
  })

  return (
    <View style={styles.container}>
      <Text
        testID="external-link-text"
        onPress={() => Linking.openURL("https://youtu.be/cAVgKdbDlRY")}
        style={styles.titleTxt}
      >
        Justin Bieber - Seasons
      </Text>
      <Table borderStyle={styles.tableBorder}>
        <Row
          textStyle={styles.headerTxt}
          style={styles.header}
          data={tableContent.Header}
          flexArr={[1, 9, 2]}
        />
        <TableWrapper>
          {
            tableContent.Rows.map((currentValue, index) => (
              <Row
                key={index}
                data={currentValue}
                flexArr={[1, 9, 2]}
                textStyle={styles.rowsTxt}
                style={styles.rows}
              />
            ))
          }
        </TableWrapper>
      </Table>
    </View>
  )
}