import React from 'react';

import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import DrawerContent from './DrawerContent';
import Home from './Home';
import Flights from './Flights';
import Bus from './Bus';
import Train from './Train';
import Hotels from './Hotels';
import CitySelect from './CitySelect';
import Profile from './Profile';
import PNR from './PNR';
import PRecharge from './SimRecharge';
import LRecharge from './LandRecharge';
import DTHRech from './otherRecharge/DTHrech';
import MetroRech from './otherRecharge/MetroRech';
import CreditRech from './otherRecharge/CreditRech';
import DataCardRech from './otherRecharge/DataCardRech';
import WebCheckIn from './WebCheckIn';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();


function OtherRechargeTopTabs(props) {
    return (
        <Tab.Navigator initialRouteName={'DTH'} tabBarPosition={'top'} swipeVelocityImpact={0.7}>
            <Tab.Screen name="DTH" component={DTHRech} />
            <Tab.Screen name="Metro" component={MetroRech} />
            <Tab.Screen name="Credit" component={CreditRech} />
            <Tab.Screen name="Data" component={DataCardRech} />
        </Tab.Navigator>
    )
}

function RechargeTopTabs(props) {
    return (
        <Tab.Navigator initialRouteName={'Mobile'} tabBarPosition={'top'} swipeVelocityImpact={0.7}>
            <Tab.Screen name="Mobile" component={PRecharge} />
            <Tab.Screen name="Landline" component={LRecharge} />
        </Tab.Navigator>
    )
}
function TravelTopStack(props){
    return(
        <Tab.Navigator initialRouteName={'Flights'} tabBarPosition={'top'} swipeVelocityImpact={0.7}>
        <Tab.Screen name="Flights" component={FlightStack} />
        <Tab.Screen name="Bus" component={BusStack} />
        <Tab.Screen name = "Train" component={TrainStack} />
    </Tab.Navigator>
    )}

function HomeStack(props) {

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
            <Stack.Screen options={{ headerTitle: 'Recharge and Payments' }} name='PhoneRec' component={RechargeTopTabs} />
            <Stack.Screen options={{ headerTitle: 'Recharge and Payments' }} name='OtherRec' component={OtherRechargeTopTabs} />
        {/* <Stack.Screen options={{headerTitile: 'Bookings'}} name ='Bookings' component={TravelTopStack} /> */}
        </Stack.Navigator>
    )
}

function FlightStack(props) {

    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name='Flights' component={Flights} />
            <Stack.Screen name='CitySelect' component={CitySelect} />
        </Stack.Navigator>    )
}

function BusStack(props) {
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name='Bus' component={Bus} />
            <Stack.Screen name='CitySelect' component={CitySelect} />
        </Stack.Navigator>
    )
}

function TrainStack(props) {
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name='Train' component={Train} />
            <Stack.Screen name='CitySelect' component={CitySelect} />
            <Stack.Screen name='PNR' component={PNR} />

        </Stack.Navigator>
    )
}
export default function AppContainer(){
    return(
        <Drawer.Navigator drawerContent={props => <DrawerContent{...props}/>} >
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="Flights" component={TravelTopStack} />
            <Drawer.Screen name="Hotels" component={Hotels} />
        <Drawer.Screen name="WebCheckIn" component={WebCheckIn} />
        <Drawer.Screen name="Profile" component={Profile} />

        </Drawer.Navigator>

    )
}