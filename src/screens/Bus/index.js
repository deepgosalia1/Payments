// React Imports
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  LinearGradient  from 'react-native-linear-gradient';
import DatePicker from '@react-native-community/datetimepicker';


export default function Bus({navigation}) {
  console.disableYellowBox = true;
  var arrowCheck=<TextInput placeholder="arrow" />;

  const [show_depart,setDepartShow] = useState(false);
  const [date_depart, setDepartDate] = useState(String(new Date()));
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
    <LinearGradient colors= {['#ebffff','#f0ffff','#f5ffff','#faffff']} style={{ flex: 1 }} >
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

      <TouchableOpacity style={styles.datePicker}onPress={showDepartDatePicker}><Text>{date_depart}</Text></TouchableOpacity>
        {show_depart && (<DatePicker
          onChange={onDepartDateChange}
          value = {new Date}
          mode='date'
          display='default'
        />)}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
fromtoView:{
  marginTop:10,
  alignSelf:'center',
  width:'90%',
  flexDirection:'column'

},
fromto:{
  width:'100%',
  textAlignVertical:'center',
  textAlign:'center',
  marginLeft:5,
  marginRight:5,
  borderRadius:5,
  borderWidth:1.5,
  borderColor:'white',
  color:'grey',
  height:130,
  fontSize:30
},
})