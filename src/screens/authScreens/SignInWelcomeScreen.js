import React,{useState,useRef} from "react";

import { View, Text, StyleSheet, Dimensions, TextInput, Image} from "react-native"
import { colors, parameters, title } from "../../global/styles";
import {Icon, Button, SocialIcon} from 'react-native-elements'

import * as Animatable from 'react-native-animatable'

import Swiper from "react-native-swiper";


export default function SignInWelcomeScreen({navigation}){
    return(
        <View style={{flex:1}}>

            <View style ={{flex:3,justifyContent:'flex-start',alignItems:'center',paddingTop:20}}>    
            <Text style={{fontSize:26,color:colors.buttons,fontWeight:'bold'}}>NAMFOOD</Text>   
            </View> 

            <View style={{flex:4, justifyContent:"center"}}>

                <Swiper autoplay ={true} style ={{height:250,}}>

                    <View style={styles.slide1}>
                        <Image
                            source ={{uri:"https://cdn.huongnghiepaau.com/wp-content/uploads/2018/07/com-ga-xoi-mo.jpg"}}
                            style ={{height:"100%", width:"100%"}}
                        />
                    </View>

                    <View style={styles.slide2}>
                        <Image
                            source ={{uri:"https://foodshownw.com/wp-content/uploads/com-tam-suon-nuong-2-600x400.jpg"}}
                            style ={{height:"100%", width:"100%"}}
                        />
                    </View>

                    <View style={styles.slide3}>
                        <Image
                            source ={{uri:"https://cdn.beptruong.edu.vn/wp-content/uploads/2016/05/mon-com-chien-hai-san.jpg"}}
                            style ={{height:"100%", width:"100%"}}
                        />
                    </View>

                    <View style={styles.slide3}>
                        <Image
                            source ={{uri:"https://images.foody.vn/res/g106/1050080/prof/s640x400/file_restaurant_photo_lnqz_16049-d8eabe4e-201109160231.jpg"}}
                            style ={{height:"100%", width:"100%"}}
                        />
                    </View>
                </Swiper>

            </View>

            <View style={{flex:4, justifyContent:"flex-end", marginBottom:20}}>

            </View>

            <View style={{marginHorizontal:20, marginTop:30}}>
            <Button
                    title="ĐĂNG NHẬP"
                    buttonStyle = {parameters.styledButton}
                    titleStyle = {parameters.buttonTitle}
                    onPress = {()=>{
                        navigation.navigate("SignInScreen")
                    }}
                 /> 
            </View>

            <View style={{ marginHorizontal:20, marginTop:30, marginBottom:10}}>
                <Button 
                    title="Tạo tài khoản"
                    buttonStyle ={styles.createButton}
                    titleStyle={styles.createButtonTitle}
                />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    slide1: {
        height:250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        height:250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        height:250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1, 
        borderColor:"#ff8c52", 
        height:50,
        paddingHorizontal:20,
        borderColor:colors.buttons,
      },

      createButtonTitle:{
        color:colors.grey1,
        fontSize:20,  
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center"  ,
        marginTop:-3
      }
})