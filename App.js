import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SCard from './src/customcore/SCard';

export default function App() {
  console.disableYellowBox = true;
  return (
    <View style={{ flex: 1, backgroundColor: 'grey' }}>


      {/* use the examples */}


      <SCard type='flight' title={'Flights'} />
      <SCard type='bus' title={'Bus'} />

      {/* you can also pass in your additional styles. will get appended */}
      <SCard type='train' title={'sample big text'} cardStyle={{ elevation: 0, width: 150 }} />
      <SCard type='train' title={'sample big text'} textStyle={{ elevation: 0, width: 150 }} />

      {/* to use the card to fetch on online image use 'toFetch' prop */}
      <SCard toFetch={true} title={'Fetched Online'} source={'https://n3.sdlcdn.com/imgs/a/8/p/Fetch-SDL441219400-1-5190a.jpg'} />

    </View>
  )
}
