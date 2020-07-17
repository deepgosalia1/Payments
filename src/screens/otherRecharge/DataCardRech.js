import React, { useState, useEffect } from 'react';
import { View, Dimensions, TouchableOpacity, Text, FlatList, Image, Alert } from 'react-native';
import { Input, ButtonGroup, Overlay } from 'react-native-elements';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import Promocodes from '../../assets/constants/promodata'
import { Divider, Button } from 'react-native-paper';

export default function PRecharge({ navigation }) {
  const [selectedIndex, setIndex] = useState();
  const [prepaidOverlay, setPrepaid] = useState(false);
  const [postpaidOverlay, setPostpaid] = useState(false);
  const [selectedNumber, setNumber] = useState(9876543210);
  const [selectedOperator, setOperatorname] = useState('Airtel');
  var fullcontacts = [];

  useEffect(() => {
    // props.contacts.map((item) => {
    //   console.log('item value is ',item)
    //   FileSystem.writeAsStringAsync(FileSystem.cacheDirectory + 'payments/contacts.txt',item.valueOf(), FileSystem.EncodingType.UTF8)
    // })
    // console.log(FileSystem.readAsStringAsync(FileSystem.cacheDirectory+'payments/contacts.txt'))
  }, [])

  return (
    <View style={{ flex: 1, padding: 10 }}>

      <Overlay
        overlayStyle={{ height: '100%', width: '100%' }}
        isVisible={prepaidOverlay}
      >
        <View style={{ flexDirection: 'row' }}>
          <Ionicons style={{ alignSelf: 'flex-start' }} name="md-arrow-round-back" size={30} color="black" onPress={() => setPrepaid(false)} />
          <Text style={{ textAlign: 'center', alignSelf: 'center', flex: 1, fontSize: 18 }}> Prepaid Recharge </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
          <View style={{ margin: 10, flexDirection: 'column' }}>
            <Text style={{ fontSize: 14, margin: 5, fontStyle: 'italic' }}>Contact_Name_here</Text>
            <Text style={{ fontSize: 25, margin: 5 }}>{selectedNumber}</Text>
            <Text style={{ fontSize: 15, margin: 5 }}>{selectedIndex === 0 ? 'Prepaid, ' : 'Postpaid, '}{selectedOperator}</Text>
          </View>
          <View style={{ alignSelf: 'flex-end', justifyContent: 'flex-end', margin: 15 }}>
            <Image style={{ width: 100, height: 100 }} source={require('../../assets/airtel.png')} />
          </View>
        </View>

        <Input
          keyboardType={'number-pad'}
          containerStyle={{ marginTop: 15, height: 70, width: Dimensions.get('screen').width - 25, }}
          inputContainerStyle={{ height: 60, marginBottom: 0, }}
          inputStyle={{ color: 'black', fontSize: 20, fontWeight: '800', marginBottom: -20 }}
          placeholder={'Amount in INR'}
          placeholderTextColor={'#4F8EC9'}
          rightIcon={
            <TouchableOpacity onPress={() => {
              // FileSystem.readAsStringAsync(FileSystem.cacheDirectory+'payments/contacts.txt', FileSystem.EncodingType.UTF8).then((res)=>{
              //   console.log('leeee', res);
              // });
            }}>
              <Text> Plans </Text>
            </TouchableOpacity>
          }
          rightIconContainerStyle={{ marginBottom: -10 }}
        />

        <Button style={{ marginTop: 15, height: 50, alignItems: 'center', justifyContent: 'center' }} labelStyle={{ fontSize: 20 }} mode={'contained'} onPress={() => { }}> Recharge </Button>

      </Overlay>

      <Overlay
        overlayStyle={{ flex: 1 }}
        isVisible={postpaidOverlay}
      >
        <View style={{ flexDirection: 'row' }}>
          <Ionicons style={{ alignSelf: 'flex-start' }} name="md-arrow-round-back" size={30} color="black" onPress={() => setPostpaid(false)} />
          <Text style={{ textAlign: 'center', alignSelf: 'center', flex: 1, fontSize: 18 }}> Postpaid Bill Payment </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
          <View style={{ margin: 10, flexDirection: 'column' }}>
            <Text style={{ fontSize: 14, margin: 5, fontStyle: 'italic' }}>Contact_Name_here</Text>
            <Text style={{ fontSize: 25, margin: 5 }}>{selectedNumber}</Text>
            <Text style={{ fontSize: 15, margin: 5 }}>{selectedIndex === 0 ? 'Prepaid, ' : 'Postpaid, '}{selectedOperator}</Text>
          </View>
          <View style={{ alignSelf: 'flex-end', justifyContent: 'flex-end', margin: 15 }}>
            <Image style={{ width: 100, height: 100 }} source={require('../../assets/airtel.png')} />
          </View>
        </View>

        <Input
          keyboardType={'number-pad'}
          containerStyle={{ marginTop: 15, height: 70, width: Dimensions.get('screen').width - 25, }}
          inputContainerStyle={{ height: 60, marginBottom: 0, }}
          inputStyle={{ color: 'black', fontSize: 20, fontWeight: '800', marginBottom: -20 }}
          placeholder={'Amount in INR'}
          placeholderTextColor={'#4F8EC9'}
          rightIcon={
            <TouchableOpacity onPress={() => {
              // FileSystem.readAsStringAsync(FileSystem.cacheDirectory+'payments/contacts.txt', FileSystem.EncodingType.UTF8).then((res)=>{
              //   console.log('leeee', res);
              // });
            }}>
              <Text> Fetch Bill </Text>
            </TouchableOpacity>
          }
          rightIconContainerStyle={{ marginBottom: -10 }}
        />

        <Button
          style={{
            marginTop: 15,
            height: 45,
          }}
          labelStyle={{
            fontSize: 20
          }}
          mode={'contained'}
          onPress={() => { }}
        >
          Pay Bill
            </Button>

      </Overlay>

      <ButtonGroup buttons={['Prepaid', 'Postpaid']}
        selectedButtonStyle={{ backgroundColor: '#3399ff' }}
        selectedIndex={selectedIndex}
        onPress={(selectedIndex) => setIndex(prev => selectedIndex)}
        containerStyle={{ height: 30, elevation: 5, marginTop: 10 }} />
      <Input
        keyboardType={'number-pad'}
        containerStyle={{ marginTop: 15, height: 70, width: Dimensions.get('screen').width - 25, }}
        inputContainerStyle={{ height: 60, marginBottom: 0, }}
        inputStyle={{ color: 'black', fontSize: 20, fontWeight: '800', marginBottom: -20 }}
        placeholder={'Enter Mobile Number'}
        placeholderTextColor={'#4F8EC9'}
        rightIcon={
          <TouchableOpacity onPress={() => {
            // FileSystem.readAsStringAsync(FileSystem.cacheDirectory+'payments/contacts.txt', FileSystem.EncodingType.UTF8).then((res)=>{
            //   console.log('leeee', res);
            // });
          }}>
            <AntDesign name="contacts" size={30} color="black" />
          </TouchableOpacity>
        }
        rightIconContainerStyle={{ marginBottom: -10 }}
      />

      <Button 
      mode='contained' 
      color={'darkblue'} 
      style={{ margin: 5 }}
      onPress={()=>{
        if (selectedIndex === 0){
          setPrepaid(true);
        }else if(selectedIndex===1) {
          setPostpaid(true)
        }else{
          Alert.alert('Enter valid number & select the kind of connection (Postpaid/Predpaid)');
        }
      }}
      > Proceed </Button>

      <View style={{ borderTopWidth: 0.3, borderBottomWidth: 0.3, marginBottom: 15, marginTop: 15, width: Dimensions.get('screen').width, backgroundColor: 'lightgrey', height: 35, justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }}>
        <Text style={{ textAlignVertical: 'center', fontSize: 16, marginLeft: 10 }}> Promo Codes for you! </Text>
      </View>

      <FlatList
        style={{ marginBottom: 0, }}
        data={Promocodes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ height: 75, width: '100%', marginBottom: 0 }}>
            <Text style={{ fontSize: 18, textAlignVertical: 'center' }}><Text style={{ fontSize: 18, fontStyle: 'italic' }}> {item.code} </Text>- {item.title} </Text>
            <Text numberOfLines={1} style={{ fontSize: 14, textAlignVertical: 'center' }}>{item.description}</Text>
            <Divider style={{ width: '100%', borderWidth: 0.2 }} />
          </View>
        )}
      />

    </View>
  )
}