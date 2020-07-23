import React from 'react';
import { Image, TouchableOpacity,View, StyleSheet} from 'react-native';
import {Text,Avatar,Title,Caption,Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';

export default function DrawerContent (props){
    const [active, setActive] = React.useState('');

    function signOut() {
        auth()
        .signOut()
        .then(() => console.log('User signed out!'));
        }

    return(
        <View>
            <View style={styles.userInfoSection}>
                <Avatar.Image source={{ uri: 'https://api.adorable.io/avatars/50/abott@adorable.png' }}
                    size={50} onPress={() => props.navigation.navigate('Profile')}/>
                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                    <Title style={styles.title}>John Doe</Title>
                    <Caption style={styles.caption}>@j_doe</Caption>
                </View>
            </View>
            <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem  label="Home"
                        onPress={() => {
                            props.navigation.navigate('Home')
                            setActive('first')  }} />
                    <DrawerItem    label="Flights"
                        onPress={() => {
                            props.navigation.navigate('Flights')}}/>
                    <DrawerItem    label="Train"
                        onPress={() => {
                            props.navigation.navigate('Train')}} />
                    <DrawerItem    label="Bus"
                        onPress={() => {
                            props.navigation.navigate('Bus')}}  />
                    <DrawerItem    label="Hotels"
                        onPress={() => { props.navigation.navigate('Hotels') }} />
                    <DrawerItem
                        label="Web Check-in"
                        onPress={() => { props.navigation.navigate('WebCheckIn') }} />
                    <DrawerItem
                        label="Profile"
                        onPress={() => { props.navigation.navigate('Profile') }} />
            </Drawer.Section>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    label="Sign Out"
                    onPress={() => { signOut() }} />
            </Drawer.Section>
        </View>
    )}

const styles = StyleSheet.create({
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        width: '100%'
    },
    userInfoSection:{
        flexDirection: 'row', marginTop: 15, width: '100%' 
    },
    drawerSection: {
        width: '100%'
    }
})