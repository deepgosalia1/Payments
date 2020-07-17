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


export default function PNR({navigation}) {
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
      <TextInput placeholder='Enter PNR Number'/>
      </View>     

      <Button title='search' />
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