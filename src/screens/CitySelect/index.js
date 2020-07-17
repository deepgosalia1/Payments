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
import SearchBar from "react-native-dynamic-search-bar";
import SCard from '../../customcore/SCard';
import { onChange } from 'react-native-reanimated';

export default function CitySelect() {
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


  return (
    <LinearGradient colors={['#ebffff', '#f0ffff', '#f5ffff', '#faffff']} style={{ flex: 1 }} >
      <SearchBar
        onPressToFocus
        autoFocus={true}
        height={35}
        width={'94%'}
        fontSize={18}
        fontColor="#c6c6c6"
        iconSize={18}
        iconColor="#c6c6c6"
        shadowColor="#282828"
        cancelIconColor="#c6c6c6"
        backgroundColor="white"
        placeholder="Select City"
        onChangeText={(text) => setSearchQuery(text)}
        onPressCancel={() => {
          this.filterList("");
        }}
        onPress={() => alert("onPress")} />

      <FlatList
        style={{ marginLeft: 15, marginTop: 15, marginRight: 15 }}
        data={filteredCities}
        renderItem={({ item }) => (<TouchableOpacity style={{ flexDirection:'row', width: '100%', backgroundColor:'white' }}>
                                      <Text style={styles.listItem0}>{item.name}</Text>  
                                      <Text style={styles.listItem1}>{item.id}</Text>   
                                      <Divider />
                                    </TouchableOpacity>)} />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  listItem0: {
    marginLeft:0,
    marginRight:200,
    fontSize: 25,
    paddingBottom: 5,
    paddingTop: 5
  },
  listItem1: {
    marginRight:5,
    borderWidth:1,
    padding:5,
    fontSize: 25,
  }

})