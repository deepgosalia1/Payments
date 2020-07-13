// React Imports
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacityBase,
} from 'react-native';
import  LinearGradient  from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SegmentedControl, WhiteSpace, InputItem } from '@ant-design/react-native';
import DatePicker from '@react-native-community/datetimepicker';

import SCard from '../../customcore/SCard';

export default function Flights({navigation}) {

  console.disableYellowBox = true;
  var arrowCheck=<TextInput placeholder="arrow" />;
  var displayDate=<Text>hie</Text>

  const [show_arrive,setArriveShow] = useState(false);
  const [show_depart,setDepartShow] = useState(false);
  const [date_arrive, setArriveDate] = useState(String(new Date()));
  const [date_depart, setDepartDate] = useState(String(new Date()));
  const [from,setDepart] = useState('From');
  const [to,setArrive] = useState('To');




  const onArriveDateChange = (event, selectedDate) => {
    const currentArriveDate = selectedDate || date_arrive;
    setArriveShow(Platform.OS === 'ios');
    setArriveDate(String(currentArriveDate));
    console.log(String(currentArriveDate))
  };
  const onDepartDateChange = (event, selectedDate) => {
    const currentDepartDate = selectedDate || date_depart;
    setDepartShow(Platform.OS === 'ios');
    setDepartDate(String(currentDepartDate));
    console.log(String(currentDepartDate))
  };
  const showArriveDatePicker = () => {
    setArriveShow(true);
  };

  const showDepartDatePicker = () => {
    setDepartShow(true);
  };
  var yeapnajson = {
    trip:0,
    from:'Mumbai',
    to:'Goa'
  };
  const onChange = (e) => {
    console.log(`${e.nativeEvent.selectedSegmentIndex}`);
    yeapnajson.trip=e.nativeEvent.selectedSegmentIndex
    if (yeapnajson.trip===0){
      console.log(yeapnajson.trip,'sadasdsa')
      arrowCheck = <TextInput placeholder="doublearrow" />;}
    else {
      console.log(yeapnajson.trip,'sadasdsa')
      arrowCheck= <TextInput placeholder="doublearrow" />}

      }

  const valueChange = (value) => { console.log(value)  }

  return (
    <LinearGradient colors= {['#ebffff','#f0ffff','#f5ffff','#faffff']} style={{ flex: 1 }} >
        <SegmentedControl values={['One Way', 'Two Way']}  
          onChange={ (index) => onChange(index)}
          style={styles.segmentedControl}       />
        <WhiteSpace size="lg" />
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        
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
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
      <TouchableOpacity style={styles.datePicker}onPress={showDepartDatePicker}><Text>{date_depart}</Text></TouchableOpacity>
        {show_depart && (<DatePicker
          onChange={onDepartDateChange}
          value = {new Date}
          mode='date'
          display='default'
        />)}
        <TouchableOpacity style={styles.datePicker}onPress={showArriveDatePicker}><Text>{date_arrive}</Text></TouchableOpacity>
        {show_arrive && (<DatePicker
          onChange={onArriveDateChange}
          value = {new Date}
          mode='date'
          display='default'
        />)}
        </View>
      
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  segmentedControl:{
    alignSelf:'center',
    marginLeft:15,
    marginTop:10,
    height:42,
    borderRadius:5,
    marginRight:15,

  },
fromto:{
  width:'40%',
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
arrow:{
  textAlignVertical:'center',
},
datePicker:{
  marginTop:10,
  margin:5,
  borderRadius:5,
  borderWidth:1.5,
  borderColor:'white',width:'55%',
  alignSelf:'center',
}
})