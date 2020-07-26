// React Imports
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  LinearGradient  from 'react-native-linear-gradient';
import DatePicker from '@react-native-community/datetimepicker';


export default function Train({navigation}) {
  console.disableYellowBox = true;
  var arrowCheck=<TextInput placeholder="arrow" />;

  const [show_depart,setDepartShow] = useState(false);
  const [date_depart, setDepartDate] = useState('Select Date');
  const [from,setDepart] = useState('From');
  const [to,setArrive] = useState('To');

  const onDepartDateChange = (event, selectedDate) => {
    const currentDepartDate = selectedDate || date_depart;
    setDepartShow(Platform.OS === 'ios');
    setDepartDate(String(currentDepartDate));
    console.log(String(currentDepartDate))
  };
  const showDepartDatePicker = () => {
    setDepartShow(true);
  };
  return (
    <View  style={{ flex: 1 }} >
      <Text style={styles.appName}>App_Name</Text>

      <View style={styles.fromtoView}>
      <Text
          style={styles.fromto}
          onPress={()=>navigation.navigate('CitySelect')}>{from}</Text>
    
        <TouchableOpacity style={styles.arrow}>
          {arrowCheck}
        </TouchableOpacity>
        <Text
          style={styles.fromto}
          onPress={()=>navigation.navigate('CitySelect')}>{to}</Text>
      </View>

      <TouchableOpacity style={styles.datePicker}onPress={showDepartDatePicker}><Text  style={{paddingBottom:15}}>{date_depart}</Text></TouchableOpacity>
        {show_depart && (<DatePicker
          onChange={onDepartDateChange}
          value = {new Date}
          mode='date'
          display='default'
        />)}

      <Button title='search' style={styles.searchButton}/>

      <Text onPress={()=>navigation.navigate('PNR')} style={styles.checkPNR}>Check PNR Status</Text>
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
fromtoView:{
  width:'100%',
  alignSelf:'center',
  alignItems:"center",
  flexDirection:'column',
  justifyContent:'center',

},
fromto:{
  alignSelf:'center',
  width:'90%',
  textAlignVertical:'center',
  textAlign:'center',
  margin:2.5,
  borderRadius:5,
  borderWidth:1.5,
  borderColor:'grey',
  color:'black',
  height:70,
  fontSize:28
},

datePicker: {
  
  margin: 25,
  borderBottomWidth: 1.5,
  borderBottomColor: 'black'
},

searchButton:{
width:'50%',
margin: 10
},
checkPNR:{
  margin:25,
  borderBottomColor:'black',
  borderBottomWidth:1.5,
  paddingBottom:15
},
})