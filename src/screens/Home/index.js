// React Imports
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SCard from '../../customcore/SCard';
import { View, Text, Alert, FlatList, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider, Title, Surface, Button } from 'react-native-paper';
import HCI from '../../customcore/HCI';
import hoteldata from '../../assets/constants/hoteldata.js'
import { useSafeArea } from 'react-native-safe-area-context';



export default function Home(props, { navigation }) {

  const [phoneModal, setPhoneModal] = useState(false)
  const [otherrechargeModal, setOtherModal] = useState(false)
  const [billModal, setBillModal] = useState(false)

  return (
    <LinearGradient colors={['#ebffff', '#f0ffff', '#f5ffff', '#faffff']} style={{ height: '100%' }} >

      {/* modals for recharges */}
      <Modal visible={phoneModal} transparent={true} animationType={'fade'} statusBarTranslucent={true}>
        <View
          style={{
            backgroundColor: '#000000d1',
            // flex: 1,
            height: '100%',
            width: '100%',
            justifyContent: 'center',
          }}>
          <Surface
            style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', elevation: 10, height: 220, width: Dimensions.get('screen').width - 100, alignSelf: 'center', borderRadius: 10, padding: 20 }}>

            <View style={{ flexDirection: 'row', width: Dimensions.get('screen').width - 130, justifyContent: 'space-evenly', height: 100 }}>
              <SCard type={'phonerecharge'} title={'Prepaid/Postpaid'} onPress={() => {
                setPhoneModal(false);
                setOtherModal(false);
                props.navigation.navigate('PhoneRec');
              }} />
              <SCard type={'phonerecharge'} title={'Landline'} onPress={() => {
                setPhoneModal(false); setOtherModal(false)
                setPhoneModal(false); setOtherModal(false);
                props.navigation.navigate('PhoneRec', { screen: 'Landline' });
              }} />
            </View>
            <Button mode='contained' onPress={() => { setPhoneModal(false) }}>Close</Button>
          </Surface>
        </View>
      </Modal>

      <Modal visible={otherrechargeModal} transparent={true} animationType={'fade'} statusBarTranslucent={true}>
        <View
          style={{
            backgroundColor: '#000000d1',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
          }}>
          <Surface
            style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', elevation: 10, height: 300, width: Dimensions.get('screen').width - 100, alignSelf: 'center', borderRadius: 10, padding: 20 }}>

            <View style={{ flexDirection: 'row', width: Dimensions.get('screen').width - 130, justifyContent: 'space-evenly', height: 100 }}>
              <SCard type={'otherrecharge'} title={'DTH'} onPress={() => {
                setPhoneModal(false);
                setOtherModal(false);
                props.navigation.navigate('OtherRec', {screen:'DTH'});
              }}/>
              <SCard type={'otherrecharge'} title={'Metro Card'} onPress={() => {
                setPhoneModal(false);
                setOtherModal(false);
                props.navigation.navigate('OtherRec', {screen:'Metro'});
              }}/>
              <SCard type={'otherrecharge'} title={'Credit Card'} onPress={() => {
                setPhoneModal(false);
                setOtherModal(false);
                props.navigation.navigate('OtherRec', {screen:'Credit'});
              }}/>
            </View>
            <View style={{ flexDirection: 'row', width: Dimensions.get('screen').width - 130, justifyContent: 'space-evenly', height: 100 }}>
              <SCard type={'otherrecharge'} title={'Data Card'} onPress={() => {
                setPhoneModal(false);
                setOtherModal(false);
                props.navigation.navigate('OtherRec', {screen:'Data'});
              }}/>
            </View>

            <Button mode='contained' onPress={() => { setOtherModal(false) }}>Close</Button>
          </Surface>
        </View>
      </Modal>

      <Modal visible={billModal} transparent={true} animationType={'fade'} statusBarTranslucent={true}>
        <View
          style={{
            backgroundColor: '#000000d1',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
          }}>
          <Surface
            style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', elevation: 10, height: 300, width: Dimensions.get('screen').width - 100, alignSelf: 'center', borderRadius: 10, padding: 20 }}>

            <View style={{ flexDirection: 'row', width: Dimensions.get('screen').width - 130, justifyContent: 'space-evenly', height: 100 }}>
              <SCard type={'bills'} title={'Water'} onPress={() => {
                setPhoneModal(false);
                setOtherModal(false);
                setBillModal(false);
                props.navigation.navigate('Bills', {screen:'WaterBill'});
              }}/>
              <SCard type={'bills'} title={'Electricity'} onPress={() => {
                setPhoneModal(false);
                setOtherModal(false);
                setBillModal(false);
                props.navigation.navigate('Bills', {screen:'ElectricBill'});
              }}/>
              <SCard type={'bills'} title={'Piped Gas'} onPress={() => {
                setPhoneModal(false);
                setOtherModal(false);
                setBillModal(false);
                props.navigation.navigate('Bills', {screen:'PGasBill'});
              }}/>
            </View>
            <View style={{ flexDirection: 'row', width: Dimensions.get('screen').width - 130, justifyContent: 'space-evenly', height: 100 }}>
              {/* <SCard type={'bills'} title={'Cylinder Gas'} onPress={() => {
                setPhoneModal(false);
                setOtherModal(false);
                setBillModal(false);
                props.navigation.navigate('Bills', {screen:'CGasBill'});
              }}/> */}
              <SCard type={'bills'} title={'Loan Bill'} onPress={() => {
                setPhoneModal(false);
                setOtherModal(false);
                setBillModal(false);
                props.navigation.navigate('Bills', {screen:'LoanBill'});
              }}/>
            </View>

            <Button mode='contained' onPress={() => { setBillModal(false) }}>Close</Button>
          </Surface>
        </View>
      </Modal>

      <ScrollView style={{ height: '100%' }}>

        <View style={{ marginBottom: 10, width: '100%', height: 70, backgroundColor: 'blue', borderBottomLeftRadius: 35, borderBottomRightRadius: 35 }}>
          <Text style={{ width: '100%', flex: 1, textAlign: 'center', textAlignVertical: 'center', fontSize: 25, fontWeight: 'bold', color: 'white' }}>
            EZ-Payments
        </Text>
        </View>

        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
          <Title style={{ marginLeft: 15, marginBottom: 5 }}>Recharge and Billings</Title>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <SCard type='phonerecharge' title={'Phone'} onPress={() => { setPhoneModal(prev => true); console.log('hogaya') }} />
            <SCard type='otherrecharge' title={'Other Recharge'} onPress={() => setOtherModal(prev => true)} />
            <SCard type='bills' title={'Bills'} onPress={()=>{setBillModal(prev=>true)}}/>
          </View>

          <Title style={{ marginTop: 10, marginLeft: 15, marginBottom: 5 }}>Bookings</Title>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <SCard type='flight' title={'Flights'} onPress={()=> { props.navigation.navigate('Bookings');}} />
            <SCard type='train' title={'Trains'} onPress={()=> { props.navigation.navigate('Bookings',{screen:'Train'});}}/>
            <SCard type='bus' title={'Bus'} onPress={()=> { props.navigation.navigate('Bookings',{screen:'Bus'});}}/>
          </View>
        </View>


        <Divider style={{ borderWidth: 0.3, width: '95%', alignSelf: 'center', marginBottom: 15, marginTop: 10 }} />


        <Title style={{ marginLeft: 15 }}> Deals on Hotel Bookings!</Title>
        <View
          style={{
            width: '100%',
            height: 150,
            marginTop: 5,
          }}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={hoteldata}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: 'column', }}>
                <HCI uri={item.source} textTitle={item.title} isHome={true} />
                <Text
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={{
                    textAlign: 'left',
                    marginLeft: 10,
                    width: 150
                  }}
                >
                  {item.title} -
                  {item.deal}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>


        <Divider style={{ borderWidth: 0.3, width: '95%', alignSelf: 'center', marginBottom: 15, marginTop: 15 }} />


        <Title style={{ marginLeft: 15 }}> # Trending Donations</Title>


      </ScrollView>
    </LinearGradient>
  )
}

