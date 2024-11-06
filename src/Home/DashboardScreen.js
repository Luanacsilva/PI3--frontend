// src/screens/Home/DashboardScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from '../../components/Header';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Dashboard" />
      <Text style={styles.welcomeText}>Bem-vindo ao Dashboard!</Text>
      
      <Button
        title="Gerenciar Alunos"
        onPress={() => navigation.navigate('StudentList')}
      />
      <Button
        title="Gerenciar Professores"
        onPress={() => navigation.navigate('TeacherList')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  welcomeText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default DashboardScreen;
