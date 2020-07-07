// React Imports
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SCard from '../../customcore/SCard';
import { View, Text, Alert, FlatList, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider, Title } from 'react-native-paper';
import HCI from '../../customcore/HCI';
import hoteldata from '../../assets/constants/hoteldata.js'


export default function Home() {

  return (
    <LinearGradient colors={['#ebffff', '#f0ffff', '#f5ffff', '#faffff']} style={{ height: '100%' }} >
      <ScrollView style={{ height: '100%' }}>

        <View style={{ marginBottom: 10, width: '100%', height: 70, backgroundColor: 'blue', borderBottomLeftRadius: 35, borderBottomRightRadius: 35 }}>
          <Text style={{ width: '100%', flex: 1, textAlign: 'center', textAlignVertical: 'center', fontSize: 25, fontWeight: 'bold', color: 'white' }}>
            EZ-Payments
        </Text>
        </View>

        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
          <Title style={{ marginLeft: 15, marginBottom: 15 }}>Recharge and Billings</Title>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <SCard type='phonerecharge' title={'Phone'} onPress={() => Alert.alert('working')} />
            <SCard type='otherrecharge' title={'Other Recharge'} />
            <SCard type='bills' title={'Bills'} />
          </View>
          <Title style={{ marginTop: 10, marginLeft: 15, marginBottom: 15 }}>Bookings</Title>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <SCard type='flight' title={'Flights'} />
            <SCard type='train' title={'Trains'} />
            <SCard type='bus' title={'Bus'} />
          </View>
        </View>


        <Divider style={{ borderWidth: 0.3, width: '95%', alignSelf: 'center', marginBottom: 15, marginTop: 15 }} />


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

