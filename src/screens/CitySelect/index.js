// React Imports
import React, { useState, useEffect } from 'react';
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
  FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { } from 'react-native-elements';
import { Divider, ListItem } from 'react-native-paper';
// import SearchBar from "react-native-dynamic-search-bar";

import CSearchBAr from '../../components/SearchBar';
import SCard from '../../customcore/SCard';
import { onChange } from 'react-native-reanimated';

export default function CitySelect(props) {
  console.disableYellowBox = true;

  const cityList = [
    { name: 'Mumbai', id: "BOM" },
    { name: 'Pune', id: "PUN" },
    { name: 'Ahemdabad', id: "AHD" }]

  const [searchQuery, setSearchQuery] = React.useState('');
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => { setCities(cityList); }, []);

  useEffect(() => {
    setFilteredCities(
      cities.filter(city => city.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, cities]);

  const test = (enteredtext) => {
    console.log(enteredtext)
    setSearchQuery(enteredtext)
  }

  return (
    <View style={{ flex: 1 }} >
      <CSearchBAr searchData={cityList} onChange={test} />

      {/* <FlatList
        style={{ marginLeft: 15, marginTop: 15, marginRight: 15 }}
        data={filteredCities}
        renderItem={({ item }) => (<TouchableOpacity style={{ flexDirection:'row', width: '100%', backgroundColor:'white' }}>
                                      <Text style={styles.listItem0}>{item.name}</Text>  
                                      <Text style={styles.listItem1}>{item.id}</Text>   
                                      <Divider />
                                    </TouchableOpacity>)} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  listItem0: {
    marginLeft: 0,
    marginRight: 200,
    fontSize: 25,
    paddingBottom: 5,
    paddingTop: 5
  },
  listItem1: {
    marginRight: 5,
    borderWidth: 1,
    padding: 5,
    fontSize: 25,
  }

})