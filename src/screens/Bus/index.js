// React Imports
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  ImageBackground,
  Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from '@react-native-community/datetimepicker';


export default function Bus({ navigation }) {
  console.disableYellowBox = true;
  var arrowCheck = <TextInput placeholder="arrow" />;
  const bgimage = { uri: "../assets/bus.jpeg" }

  const [show_depart, setDepartShow] = useState(false);
  const [date_depart, setDepartDate] = useState("Select Date");
  const [from, setDepart] = useState('From');
  const [to, setArrive] = useState('To');

  const onDepartDateChange = (event, selectedDate) => {
    const currentDepartDate = selectedDate || date_depart;
    setDepartShow(Platform.OS === 'ios');
    setDepartDate(String(currentDepartDate));
    console.log(String(currentDepartDate))
  };
  const showDepartDatePicker = () => {
    setDepartShow(true);
  };

  // colors= {['#ebffff','#f0ffff','#f5ffff','#faffff']}
  return (
    <View style={{ flex: 1 }} >
      <Text style={styles.appName}>App_Name</Text>
      <View style={styles.fromtoView}>
        {/* <ImageBackground source={require('../../assets/bus.jpeg')} style={styles.bgimage} borderBottomLeftRadius={30} borderBottomRightRadius={30}> */}
        <Text
          style={styles.fromto}
          onPress={() => navigation.navigate('CitySelect')}>{from}</Text>

        <TouchableOpacity style={styles.arrow}>
          {arrowCheck}
        </TouchableOpacity>
        <Text
          style={styles.fromto}
          onPress={() => navigation.navigate('CitySelect')}>{to}</Text>
        {/* </ImageBackground>  */}
      </View>
      <View>
        <TouchableOpacity style={styles.datePicker} onPress={showDepartDatePicker}><Text style={{ paddingBottom: 15 }}>{date_depart}</Text></TouchableOpacity>
        {show_depart && (<DatePicker
          onChange={onDepartDateChange}
          value={new Date}
          mode='date'
          display='default'
        />)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appName: {
    padding: 20,
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  fromtoView: {
    width: '100%',
    alignSelf: 'center',
    alignItems: "center",
    flexDirection: 'column',
    justifyContent: 'center',
  },
  // bgimage:{
  //   height:215,
  //   width:Dimensions.get('window').width,

  //   },
  fromto: {
    alignSelf: 'center',
    width: '90%',
    textAlignVertical: 'center',
    textAlign: 'center',
    margin: 2.5,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: 'grey',
    color: 'black',
    height: 70,
    fontSize: 28
  },
  datePicker: {
    margin: 25,
    borderBottomWidth: 1.5,
    borderBottomColor: 'black'
  },
})