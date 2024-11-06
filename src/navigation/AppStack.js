// src/navigation/AppStack.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../screens/Home/DashboardScreen';
import StudentListScreen from '../screens/Users/StudentListScreen';
import TeacherListScreen from '../screens/Users/TeacherListScreen';
import CoordinatorDashboardScreen from '../screens/Coordinator/CoordinatorDashboardScreen';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator initialRouteName="Dashboard">
    <Stack.Screen 
      name="Dashboard" 
      component={DashboardScreen} 
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="StudentList" 
      component={StudentListScreen} 
      options={{ title: 'Alunos' }} 
    />
    <Stack.Screen 
      name="TeacherList" 
      component={TeacherListScreen} 
      options={{ title: 'Professores' }} 
    />
    <Stack.Screen 
      name="CoordinatorDashboard" 
      component={CoordinatorDashboardScreen} 
      options={{ title: 'Coordenador' }} 
    />
  </Stack.Navigator>
);

export default AppStack;
