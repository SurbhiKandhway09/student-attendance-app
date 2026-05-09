import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import API from '../services/api';

export default function DashboardScreen() {

  const [students, setStudents] = useState(0);
  const [present, setPresent] = useState(0);
  const [absent, setAbsent] = useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {

    try {

      const studentResponse =
        await API.get('/students');

      setStudents(studentResponse.data.length);

      const historyResponse =
        await API.get('/history');

      const history =
        historyResponse.data;

      const presentCount =
        history.filter(item =>
          item.status === 'present'
        ).length;

      const absentCount =
        history.filter(item =>
          item.status === 'absent'
        ).length;

      setPresent(presentCount);
      setAbsent(absentCount);

    } catch(error) {

      console.log(error);
    }
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Dashboard
      </Text>

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Total Students
        </Text>

        <Text style={styles.number}>
          {students}
        </Text>

      </View>

      <View style={styles.presentCard}>

        <Text style={styles.cardTitle}>
          Present Today
        </Text>

        <Text style={styles.number}>
          {present}
        </Text>

      </View>

      <View style={styles.absentCard}>

        <Text style={styles.cardTitle}>
          Absent Today
        </Text>

        <Text style={styles.number}>
          {absent}
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#f2f2f2',
    padding:20
  },

  title:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:20,
    textAlign:'center'
  },

  card:{
    backgroundColor:'#007bff',
    padding:25,
    borderRadius:20,
    marginBottom:20
  },

  presentCard:{
    backgroundColor:'green',
    padding:25,
    borderRadius:20,
    marginBottom:20
  },

  absentCard:{
    backgroundColor:'red',
    padding:25,
    borderRadius:20
  },

  cardTitle:{
    color:'white',
    fontSize:20,
    marginBottom:10
  },

  number:{
    color:'white',
    fontSize:40,
    fontWeight:'bold'
  }
});