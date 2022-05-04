import React from "react";

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import SignInWelcomeScreen from "../screens/authScreens/SignInWelcomeScreen";
import SignInScreen from "../screens/authScreens/SignInScreen";
import RestaurantMapScreen from "../screens/RestaurantsMapScreen";
import RootCLientTabs from "./ClientTabs";


const Auth = createStackNavigator();

export default function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen
                name ="SignInWelcomeScreen"
                component = {SignInWelcomeScreen}
                option = {{
                    headershow: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
                options={{
                    headerShown: false,
                  }}
                  
                
            />

            <Auth.Screen
                name ="SignInScreen"
                component = {SignInScreen}
                option = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
                options={{
                    headerShown: false,
                  }}
            />

            <Auth.Screen
                name ="RootCLientTabs"
                component = {RootCLientTabs}
                option = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
                options={{
                    headerShown: false,
                  }}
            />


            <Auth.Screen
                name ="RestaurantMapScreen"
                component = {RestaurantMapScreen}
                option = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
                options={{
                    headerShown: false,
                  }}
            />

        </Auth.Navigator>
    )
}