import React, { useContext, useEffect, useState } from "react";
import { Dimensions, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TabelaProvider, { TabelaContext } from "./context/TabelaContext";
import Tabela from './Tabela'

const TabelaHome = ({ data, title, stick, configColumns, setVariable }) => {

  return (
    <TabelaProvider>
      <Tabela
        data={data} 
        title={title} 
        stick={true} 
        configColumns={configColumns} 
        setVariable={setVariable}
      />
    </TabelaProvider>
  )
}

export default TabelaHome;
