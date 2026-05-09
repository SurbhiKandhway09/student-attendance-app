import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

import API from '../services/api';

export default function HistoryScreen() {

  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {

    try {

      const response = await API.get('/history');

      setHistory(response.data);

    } catch(error) {

      console.log(error);
    }
  };

  return (

    <FlatList
      data={history}

      keyExtractor={(item) =>
        item.id.toString()
      }

      renderItem={({ item }) => (

        <View style={styles.card}>

          <Text style={styles.name}>
            {item.student?.name}
          </Text>

          <Text>
            Status: {item.status}
          </Text>

          <Text>
            Date: {item.date}
          </Text>

        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({

  card:{
    backgroundColor:'#ffffff',
    margin:10,
    padding:15,
    borderRadius:15,
    elevation:5
  },

  name:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:5
  }
});