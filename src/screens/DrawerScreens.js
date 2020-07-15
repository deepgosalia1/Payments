import React from 'react';
import { StyleSheet, View, } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Drawer
} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Flights from './Flights';
import Train from './Train';
import Hotels from './Hotels';
import Bus from './Bus';
import WebCheckIn from './WebCheckIn';
import CitySelect from './CitySelect';
import Profile from './Profile';
import auth from '@react-native-firebase/auth';


const Drawer0 = createDrawerNavigator();
const Stack0 = createStackNavigator();

function FlightStack(props) {
    return(
    <Stack0.Navigator headerMode={"none"}>
        <Stack0.Screen name='Flights' component={Flights}/>
        <Stack0.Screen name='CitySelect' component={CitySelect}/>

    </Stack0.Navigator>
    )
}

function DrawerContent(props) {
    function signOut() {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }
    const [active, setActive] = React.useState('');

    return (
        <View>
            <TouchableOpacity onPress = {()=> props.navigation.navigate('Profile')}>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 , width:'100%'}}>
                    <Avatar.Image source={{ uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'  }}
                        size={50} />
                    <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                        <Title style={styles.title}>John Doe</Title>
                        <Caption style={styles.caption}>@j_doe</Caption>
                    </View>
                </View>
                </View>
            </TouchableOpacity>
            <Drawer.Section style={styles.drawerSection}>
                <DrawerItemList {...props}>
                <DrawerItem
                    focused
                    label="Home"
                    onPress={() => { props.navigation.navigate('Home') 
                    setActive('first')}} />
                <DrawerItem
                    label="Flights"
                    onPress={() => { props.navigation.navigate('Flights') }} />
                <DrawerItem
                    label="Train"
                    onPress={() => { props.navigation.navigate('Train') }} />
                <DrawerItem
                    activeBackgroundColor='black'
                    label="Bus"
                    onPress={() => { props.navigation.navigate('Bus') }} />
                <DrawerItem
                    label="Hotels"
                    onPress={() => { props.navigation.navigate('Hotels') }} />
                <DrawerItem
                    label="Web Check-in"
                    onPress={() => { props.navigation.navigate('WebCheckIn') }} />
                    </DrawerItemList>
            </Drawer.Section>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    label="Sign Out"
                    onPress={() => { signOut() }} />
            </Drawer.Section>
        </View>
    )
}
export default function DrawerScreen() {
    return (
        <Drawer0.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />} >
            <Drawer0.Screen  activeBackgroundColor='black' name="Home" component={Home} />
            <Drawer0.Screen drawerContentOptions={{ activeBackgroundColor: '#5cbbff', activeTintColor: '#ffffff' }} activeBackgroundColor='black' name="Flights" component={FlightStack} />
            <Drawer0.Screen drawerContentOptions={{activeBackgroundColor:'black'}} name="Train" component={Train} />
            <Drawer0.Screen name="Bus" component={Bus} />
            <Drawer0.Screen name="Hotels" component={Hotels} />
            <Drawer0.Screen name="Web Check-in" component={WebCheckIn} />
            <Drawer0.Screen name="Profile" component={Profile} />


        </Drawer0.Navigator>

    )
}


const styles = StyleSheet.create({
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        width:'100%'
    },
    drawerSection:{
        width:'100%'
    }
})