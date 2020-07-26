// React Imports
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  Dimensions,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import DatePicker from '@react-native-community/datetimepicker';

import CSearchBar from '../../components/SearchBar';
import SCard from '../../customcore/SCard';
import { version } from 'core-js';

export default function Hotels(props) {
  console.disableYellowBox = true;

  const hotels = [{ name: "Rockstar", id: 'gta', uri: require('../../assets/h1.jpeg') },
  { name: "Malibu Club", id: 'vice-city', uri: require('../../assets/h2.jpeg') },
  { name: "Rockstar", id: 'gta', uri: require('../../assets/h3.jpeg') },
  { name: "Rockstar", id: 'gta', uri: require('../../assets/h4.jpeg') }]


  const promotions = [{ name: "Rockstar", id: 'gta', uri: require('../../assets/h1.jpeg') },
  { name: "Malibu Club", id: 'vice-city', uri: require('../../assets/h2.jpeg') },
  { name: "Rockstar", id: 'gta', uri: require('../../assets/h3.jpeg') },
  { name: "Rockstar", id: 'gta', uri: require('../../assets/h4.jpeg') }]


  const [from, setDepart] = useState('Select Area');
  const [show_arrive, setArriveShow] = useState(false);
  const [show_depart, setDepartShow] = useState(false);
  const [date_arrive, setArriveDate] = useState('Check Out');
  const [date_depart, setDepartDate] = useState('Check In');
  const [toggleModal, setModal] = useState(false)
  const [countAdult, setCA] = useState(0);
  const [countChild, setCC] = useState(0);


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

  const renderHotel = ({ item, index }) => {
    return (
      <View style={{ borderColor: '#000', borderWidth: 1, alignSelf: 'center', width: '80%', height: 150, borderRadius: 10 }}>
        <ImageBackground source={item.uri} style={{ width: '100%', height: '100%' }} borderRadius={10} >
          <Text>{item.name}</Text>
        </ImageBackground>
      </View>
    )
  }


  const renderPromo = ({ item, index }) => {
    return (
      <View style={{ borderColor: '#000', borderWidth: 1, alignSelf: 'center', width: '80%', height: 150, borderRadius: 10 }}>
        <ImageBackground source={item.uri} style={{ width: '100%', height: '100%' }} borderRadius={10} >
          <Text>{item.name}</Text>
        </ImageBackground>
      </View>
    )
  }

  const test = (selecteditem) => { console.log("Hotel name is : ", selecteditem) }
  return (
    <View style={{ flex: 1 }}>
      {/* <CSearchBar searchData={hotels} onChange={test} /> */}
      <Text style={styles.appName}>App_Name</Text>
      <Text
          style={styles.destination}
          onPress={() => props.navigation.navigate('CitySelect')}>{from}</Text>


      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <View style={{ flexDirection: 'column', width: '50%', justifyContent: 'flex-start', paddingTop:20}}>
          <TouchableOpacity style={styles.datePicker} onPress={showDepartDatePicker}><Text style={{paddingBottom:15}}>{date_depart}</Text></TouchableOpacity>
          {show_depart && (<DatePicker
            onChange={onDepartDateChange}
            value={new Date}
            mode='date'
            display='default'
          />)}
        </View>
        <View style={{ flexDirection: 'column', width: '50%', justifyContent: 'flex-start',paddingTop:20 }}>
          <TouchableOpacity style={styles.datePicker} onPress={showArriveDatePicker}><Text style={{paddingBottom:15}}>{date_arrive}</Text></TouchableOpacity>
          {show_arrive && (<DatePicker
            onChange={onArriveDateChange}
            value={new Date}
            mode='date'
            display='default'
          />)}
        </View>
      </View>


      <TouchableOpacity style={styles.passengerView}
          onPress={setModal.bind(this, true)}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
            <Text style={styles.passengerCount}>Adults</Text>
            <Text style={styles.passengerCount}>Children</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
            <Text style={styles.passengerCount}>{countAdult}</Text>
            <Text style={styles.passengerCount}>{countChild}</Text>
          </View>
        </TouchableOpacity>

        <Modal style={styles.modal}
          isVisible={toggleModal}
          onBackdropPress={setModal.bind(this, false)}>
          <View style={styles.modalView}>

            <View style={styles.modalTitle}>
              <Text>Passengers</Text>
              <Text style={styles.doneButton} onPress={setModal.bind(this, false)} >Done</Text>
            </View>

            <View style={styles.modalTitle}>
              <Text>Adults</Text>

              <View style={styles.rightItem}>
                <Button mode="contained" onPress={setCA.bind(this, countAdult - 1)}
                  icon={<Icon name='local_hospital' type='material-icons' />}
                />

                <Text>{countAdult}</Text>
                <Button icon='plus' mode="contained" onPress={setCA.bind(this, countAdult + 1)} />
              </View>
            </View>
            <View style={styles.modalTitle}>
              <Text>Children</Text>

              <View style={styles.rightItem}>
                <Button mode="contained" onPress={setCC.bind(this, countChild - 1)} >-</Button>
                <Text>{countChild}</Text>
                <Button icon='plus' mode="contained" onPress={setCC.bind(this, countChild + 1)} />
              </View>
            </View>

           
          </View >
        </Modal>

      <Carousel layout={"default"}
        data={hotels}
        renderItem={renderHotel}
        horizontal={true}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={Dimensions.get('screen').width}
        />

      <Carousel layout={"default"}
        data={promotions}
        renderItem={renderPromo}
        horizontal={true}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={Dimensions.get('screen').width}
        />

      <View style={{justifyContent:'center',height:150,margin:10}}>
        <Text style={{ borderWidth:1,borderColor:"#fff",fontSize:18,width:'100%',height:40}}>My_current_hotel_booking</Text>
        <Text style={{ borderWidth:1,borderColor:"#fff",fontSize:18,width:'100%',height:50}}>Go_to_booking</Text>
      </View>

      <View style={{margin:15}}>
        <View style={{flexDirection:'row'}}>
        <Icon name="help" />
        <Icon name="arrow" />
        </View>
        <Icon name="contact" />
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
  destination: {
    margin: 15,
    paddingLeft:10,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: 'grey',
    color: 'black',
    height: 50,
    textAlign:'justify',
    textAlignVertical:'center',
    fontSize: 18
  },

  datePicker: {
    margin: 5,
    borderRadius: 5,
    width: '60%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },

  passengerView: {
    margin: 10,
    alignSelf: 'flex-start',

  },

  passengerCount: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'black',
    fontSize: 18
  },

  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    width: '100%',
    height: '60%'
  },
  modalView: {
    padding: 10,
    backgroundColor: 'white',
    width: '100%',
    height: '60%',
    borderRadius: 10,
    alignItems: 'center'
  },

  modalTitle: {
    margin: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%'
  },
  rightItem: {
    flexDirection: 'row',
  },
  countButton: {
    width: '20%',
    height: 40,
    textAlignVertical: 'center'
  },
  modalRadio: {
    margin: 10,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%'
  },

})