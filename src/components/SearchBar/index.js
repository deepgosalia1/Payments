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

export default function CSearchBar(props) {
  console.disableYellowBox = true;


  const [searchQuery, setSearchQuery] = React.useState('');
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => { setItems(props.searchData); }, []);

  useEffect(() => {
    setFilteredItems(
      items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, items]);


  return (
    <SafeAreaView>
      <View>
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
          placeholder="Search"
          onChangeText={(text) => setSearchQuery(text)}
          onPressCancel={() => {

          }}
          onPress={() => alert("onPress")} />

        <FlatList
          style={{ margin: 15, width: "100%" }}
          data={filteredItems}
          renderItem={({ item }) =>
            (<TouchableOpacity onPress={props.onChange.bind(this, item.name)}
              style={{ flexDirection: 'row', width: '100%', alignItems: 'baseline' }}>
              <Text style={styles.listItem0}>{item.name}</Text>
              <Text style={styles.listItem1}>{item.id}</Text>
              <Divider />
            </TouchableOpacity>)} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  listItem0: {
    flex: 3,
    fontSize: 25,
    paddingBottom: 5,
    paddingTop: 5,
  },
  listItem1: {
    flex: 1,
    alignSelf: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 25,
  }

})