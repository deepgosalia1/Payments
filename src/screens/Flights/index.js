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
import { onChange } from 'react-native-reanimated';

export default function Flights() {

  console.disableYellowBox = true;
  var arrowCheck=<TextInput placeholder="arrow" />;
  var displayDate=<Text>hie</Text>

  const [show,setShow] = useState(false);
  const [date, setDate] = useState(String(new Date()));

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(String(currentDate));
    console.log(String(currentDate))
  };
  const showDatePicker = () => {
    setShow(true);
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
        <TextInput
        style={styles.fromto}
          placeholder="From"
          clearTextOnFocus='true' />
        <TouchableOpacity style={styles.arrow}>
          {arrowCheck}
        </TouchableOpacity>
          <TextInput
        style={styles.fromto}
        placeholderTextColor
          placeholder="To"/>
        </View>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
      <TouchableOpacity style={styles.datePicker}onPress={showDatePicker}><Text>{date}</Text></TouchableOpacity>
        {show && (<DatePicker
          onChange={onDateChange}
          value = {new Date}
          mode='date'
          display='default'
        />)}
        <TouchableOpacity style={styles.datePicker}onPress={showDatePicker}><Text>{date}</Text></TouchableOpacity>
        {show && (<DatePicker
          onChange={onDateChange}
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
  alignSelf:'center',
  textAlign:'center',
  marginLeft:5,
  marginRight:5,
  borderRadius:5,
  borderWidth:1.5,
  borderColor:'white',
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