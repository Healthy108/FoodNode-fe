import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { colors } from "../global/styles"
import { Icon,withBadge } from "react-native-elements"

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchSreen";
import MyOrdersScreen from "../screens/MyOrdersScreen";
import MyAccountScreen from "../screens/MyAccountScreen";


const ClientTabs = createBottomTabNavigator();


export default function RootCLientTabs(){

    const BadeIcon = withBadge(2)(Icon)

    return(
        <ClientTabs.Navigator 
            tabBarOptions = {{
                activeTintColor :colors.buttons,
            }}
        
        >
            <ClientTabs.Screen 
                name ="HomeScreen"
                component ={HomeScreen}
                options ={
                    {
                        headerShown: false,
                        tabBarLabel : "Trang Chủ",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='home'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )  
                    }
                    
                }  
           

            />

            <ClientTabs.Screen 
                name ="SearchScreen"
                component ={SearchScreen}
                options ={{
                        headerShown: false,
                        tabBarLabel : "Tìm Kiếm",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='search'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }}

            />

            <ClientTabs.Screen 
                name ="MyOrdersScreen"
                component ={MyOrdersScreen}
                options ={
                    {
                        headerShown: false,
                        tabBarLabel : "Đơn hàng",
                        tabBarIcon: ({color,size})=>(
                            <BadeIcon
                                name ='view-list'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }

            />

            <ClientTabs.Screen 
                name ="MyAccount"
                component ={MyAccountScreen}
                options ={
                    {
                        headerShown: false,
                        tabBarLabel : "Hồ Sơ",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='person'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }

            />

            

            

        </ClientTabs.Navigator>
    )
}