// src/screens/Coordinator/CoordinatorDashboardScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import Header from '../components/Header';
import api from '../api/api';

const CoordinatorDashboardScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    totalStudents: 0,
    totalTeachers: 0,
  });

  useEffect(() => {
    const fetchCoordinatorData = async () => {
      try {
        const studentResponse = await api.get('/students/count'); // Ajuste para o endpoint correto
        const teacherResponse = await api.get('/teachers/count'); // Ajuste para o endpoint correto

        setData({
          totalStudents: studentResponse.data.count,
          totalTeachers: teacherResponse.data.count,
        });
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os dados do coordenador.');
        console.error('Erro ao buscar dados do coordenador:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoordinatorData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#333" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Painel do Coordenador" />
      <Text style={styles.subtitle}>Visão Geral</Text>

      <View style={styles.overview}>
        <Text style={styles.infoText}>Total de Alunos: {data.totalStudents}</Text>
        <Text style={styles.infoText}>Total de Professores: {data.totalTeachers}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Relatórios de Alunos"
          onPress={() => navigation.navigate('StudentReports')}
        />
        <Button
          title="Relatórios de Professores"
          onPress={() => navigation.navigate('TeacherReports')}
        />
        <Button
          title="Gerenciar Usuários"
          onPress={() => navigation.navigate('UserManagement')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
  overview: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginVertical: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 15,
  },
});

export default CoordinatorDashboardScreen;
