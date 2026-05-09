import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native';

import API from '../services/api';

export default function StudentListScreen({ navigation }) {

  const [students, setStudents] = useState([]);
  const [attendanceStatus, setAttendanceStatus] = useState({});
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {

    try {

      const response = await API.get('/students');

      setStudents(response.data);

    } catch(error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  // INSTANT UI UPDATE
  const markAttendance = async (id, status) => {

    setAttendanceStatus({
      ...attendanceStatus,
      [id]: status
    });

    try {

      await API.post('/attendance', {
        student_id: id,
        status: status
      });

    } catch(error) {

      console.log(error);
    }
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(
      search.toLowerCase()
    )
  );

  const presentCount = Object.values(attendanceStatus)
    .filter(status => status === 'present')
    .length;

  const absentCount = Object.values(attendanceStatus)
    .filter(status => status === 'absent')
    .length;

  // LOADING SCREEN
  if(loading){

    return(

      <View style={styles.loadingContainer}>

        <Text style={styles.loadingText}>
          Loading Students...
        </Text>

      </View>
    );
  }

  return (

    <View style={{ flex:1, backgroundColor:'#f2f2f2' }}>

      {/* DASHBOARD */}

      <View style={styles.header}>

        <Text style={styles.title}>
          Attendance Dashboard
        </Text>

        <View style={styles.dashboardRow}>

          <View style={styles.dashboardCard}>
            <Text style={styles.cardLabel}>
              Students
            </Text>

            <Text style={styles.cardNumber}>
              {students.length}
            </Text>
          </View>

          <View style={styles.presentCard}>
            <Text style={styles.cardLabel}>
              Present
            </Text>

            <Text style={styles.cardNumber}>
              {presentCount}
            </Text>
          </View>

          <View style={styles.absentCard}>
            <Text style={styles.cardLabel}>
              Absent
            </Text>

            <Text style={styles.cardNumber}>
              {absentCount}
            </Text>
          </View>

        </View>

      </View>

      {/* SEARCH */}

      <TextInput
        placeholder="Search Student..."
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />

      {/* HISTORY */}

      <TouchableOpacity
        style={styles.historyButton}
        onPress={() =>
          navigation.navigate('History')
        }
      >
        <Text style={styles.buttonText}>
          View History
        </Text>
      </TouchableOpacity>

      {/* STUDENTS */}

      <FlatList
        data={filteredStudents}

        keyExtractor={(item) =>
          item.id.toString()
        }

        renderItem={({ item }) => (

          <View style={styles.card}>

            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {item.name.charAt(0)}
              </Text>
            </View>

            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text>
              Roll No: {item.roll_number}
            </Text>

            <View style={styles.buttons}>

              <TouchableOpacity
                style={[
                  styles.button,
                  attendanceStatus[item.id] === 'present'
                  && styles.presentButton
                ]}

                onPress={() =>
                  markAttendance(
                    item.id,
                    'present'
                  )
                }
              >

                <Text style={styles.buttonText}>
                  Present
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.button,
                  attendanceStatus[item.id] === 'absent'
                  && styles.absentButton
                ]}

                onPress={() =>
                  markAttendance(
                    item.id,
                    'absent'
                  )
                }
              >

                <Text style={styles.buttonText}>
                  Absent
                </Text>

              </TouchableOpacity>

            </View>

          </View>
        )}
      />

      {/* LOGOUT */}

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() =>
          navigation.navigate('Login')
        }
      >
        <Text style={styles.buttonText}>
          Logout
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  loadingContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f2f2f2'
  },

  loadingText:{
    fontSize:22,
    fontWeight:'bold',
    color:'#007bff'
  },

  header:{
    backgroundColor:'#007bff',
    padding:15,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },

  title:{
    fontSize:24,
    color:'white',
    fontWeight:'bold',
    marginBottom:15,
    textAlign:'center'
  },

  dashboardRow:{
    flexDirection:'row',
    justifyContent:'space-between'
  },

  dashboardCard:{
    backgroundColor:'#4da6ff',
    padding:10,
    borderRadius:12,
    width:'30%',
    alignItems:'center'
  },

  presentCard:{
    backgroundColor:'green',
    padding:10,
    borderRadius:12,
    width:'30%',
    alignItems:'center'
  },

  absentCard:{
    backgroundColor:'red',
    padding:10,
    borderRadius:12,
    width:'30%',
    alignItems:'center'
  },

  cardLabel:{
    color:'white',
    fontWeight:'bold',
    marginBottom:5
  },

  cardNumber:{
    color:'white',
    fontSize:18,
    fontWeight:'bold'
  },

  search:{
    backgroundColor:'white',
    margin:10,
    padding:12,
    borderRadius:10
  },

  card:{
    backgroundColor:'#ffffff',
    marginHorizontal:10,
    marginVertical:8,
    padding:15,
    borderRadius:15,
    elevation:5
  },

  avatar:{
    width:50,
    height:50,
    borderRadius:25,
    backgroundColor:'#007bff',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10
  },

  avatarText:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  },

  name:{
    fontSize:22,
    fontWeight:'bold',
    marginBottom:5
  },

  buttons:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15
  },

  button:{
    padding:12,
    borderRadius:10,
    backgroundColor:'#cccccc',
    width:'45%',
    alignItems:'center'
  },

  presentButton:{
    backgroundColor:'green'
  },

  absentButton:{
    backgroundColor:'red'
  },

  historyButton:{
    backgroundColor:'#6c63ff',
    padding:15,
    marginHorizontal:10,
    marginTop:10,
    borderRadius:10,
    alignItems:'center'
  },

  logoutButton:{
    backgroundColor:'#ff4d4d',
    padding:15,
    margin:10,
    borderRadius:10,
    alignItems:'center'
  },

  buttonText:{
    color:'white',
    fontWeight:'bold',
    fontSize:16
  }
});