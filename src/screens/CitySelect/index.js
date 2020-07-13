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
  FlatList
} from 'react-native';
import  LinearGradient  from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Searchbar } from 'react-native-paper';
import SearchBar from "react-native-dynamic-search-bar";



import SCard from '../../customcore/SCard';
import { onChange } from 'react-native-reanimated';

export default function CitySelect() {

  const cityList = [
    {name:'Mumbai', id: "BOM"},
    {name:'Pune', id: "PUN"},
    {name:'Ahemdabad', id: "AHD"}]
  console.disableYellowBox = true;
  const [searchQuery, setSearchQuery] = React.useState('');
 const searchHandler = (searchString) => { setSearchQuery(searchString) }
  
  return (
    <LinearGradient colors= {['#ebffff','#f0ffff','#f5ffff','#faffff']} style={{ flex: 1 }} >
       {/* <Searchbar
      placeholder="Search City"
      onChangeText={onChangeSearch}
      value={searchQuery}
      autoFocus='true'
    />
    <FlatList 
    data = {cityList}
  renderItem={({item})=><Text onPress={sendBack.bind(this,item.id)}>{item.name}{item.id}</Text>}
    /> */}
      <SearchBar
  onPressToFocus
  autoFocus={true}
  fontColor="#c6c6c6"
  iconColor="#c6c6c6"
  shadowColor="#282828"
  cancelIconColor="#c6c6c6"
  backgroundColor="#353d5e"
  placeholder="Search here"
  onChangeText={(text) => { searchHandler.bind(this,text)  }}
  onPressCancel={() => {
    this.filterList("");
  }}
  onPress={() => alert("onPress")}
/>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  
})