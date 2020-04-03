import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

import logoImg from '../../assets/logo.png';

const Incidents = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de casos: <Text style={styles.headerTextBold}>0</Text>
        </Text>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.description}>
          Escolha um dos casos abaixo e salve o dia!
        </Text>
      </View>
    </View>
  );
};

export default Incidents;
