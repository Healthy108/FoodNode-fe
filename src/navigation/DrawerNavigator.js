import * as React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer'
import RootCLientTabs from "./ClientTabs";

import { Icon } from "react-native-elements";
import { colors } from "../global/styles";



const Drawer = createDrawerNavigator()

export default function DrawerNavigator({navigation}){

    return(
        <Drawer.Navigator
        drawerContent  = {props =><DrawerContent {...props} /> }
        >

            <Drawer.Screen 
                name = "RootClientTabs"
                component ={RootCLientTabs}

                options = {{
                    title:'Client',
                    drawerIcon: ({focussed,size}) =>(
                        <Icon 
                            type = "material-community"
                            name = "home"
                            color = {focussed ? '#7cc' :colors.grey2}
                            size = {size}

                        />
                    )
                }}
            />

        </Drawer.Navigator>
    )
}