// React Imports
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import SCard from '../../customcore/SCard';
import { Button } from 'react-native-paper';
import { Header } from 'react-native-elements';

export default function Profile() {
  var user = auth().currentUser;
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#ebffff', '#f0ffff', '#f5ffff', '#faffff']} style={{ flex: 1, padding: 10 }} >
        <Header
          containerStyle={{height:65, borderRadius:5, backgroundColor:'transparent'}}
          centerComponent={<Text style={{fontSize:20, textAlignVertical:'top'}}> Profile information </Text>}
        />
        <View style={{padding:20, justifyContent:'center'}}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ textAlignVertical: 'center', width: '50%' }}>Name : </Text>
            <TextInput scrollEnabled={true} style={{width:'50%', borderBottomWidth:0.5}} placeholder={'Name'} defaultValue={user.displayName} />
          </View>
          <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ textAlignVertical: 'center', width: '50%' }}>Email : </Text>
            <TextInput scrollEnabled={true} style={{width:'50%', borderBottomWidth:0.5}} placeholder={'Email'} defaultValue={user.email}/>
          </View>
          <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ textAlignVertical: 'center', width: '50%' }}>Contact No. : </Text>
            <TextInput scrollEnabled={true} style={{width:'50%', borderBottomWidth:0.5}} placeholder={'Cell Number'} defaultValue={user.phoneNumber?user.phoneNumber:null}/>
          </View>
          <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ textAlignVertical: 'center', width: '50%' }}>Address Line 1 : </Text>
            <TextInput scrollEnabled={true} style={{width:'50%', borderBottomWidth:0.5}} placeholder={'Apartment No. / name'} />
          </View>
          <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ textAlignVertical: 'center', width: '50%' }}>Address Line 2 : </Text>
            <TextInput scrollEnabled={true} style={{width:'50%', borderBottomWidth:0.5}} placeholder={'Road Name/Locality'} />
          </View>
          <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ textAlignVertical: 'center', width: '50%' }}>Address Line 3: </Text>
            <TextInput scrollEnabled={true} style={{width:'50%', borderBottomWidth:0.5}} placeholder={'Optional additional Info'} />
          </View>
          <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ textAlignVertical: 'center', width: '50%' }}>City: </Text>
            <TextInput scrollEnabled={true} style={{width:'50%', borderBottomWidth:0.5}} placeholder={'City name'} />
          </View>
        </View>
        <Button style={{marginVertical:20}} mode={'contained'}> Save and Update </Button>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({

})