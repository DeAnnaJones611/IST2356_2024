import { View, Text , Pressable, StyleSheet} from "react-native";
 import EquationScreen from "./EquationScreen";
import{useState} from "react";
import {useRoute} from "@react-navigation/native";


function LevelsScreen({navigation}){


    function selectedListingHandler(){
        navigation.navigate("EquationScreen");
    
     }

    return (
    
    //Note watch the video
    <View>
        <Text style ={styles.Title}> Addition Level Screen </Text>

        <View>
        <Pressable style = {styles.rightbutton} onPress={selectedListingHandler}><Text>
                Level 1
            </Text></Pressable>
        </View>

        <View>
        <Pressable style = {styles.leftbutton} onPress={selectedListingHandler}><Text>
            Level 2
            </Text></Pressable>
        </View>

        <View>
        <Pressable style = {styles.rightbutton} onPress={selectedListingHandler}>
            <Text>
                Level 3
            </Text>
        </Pressable>
        </View>

        <View>
        <Pressable style = {styles.leftbutton} onPress={selectedListingHandler}>
            <Text>
                Level 4
            </Text>
        </Pressable>
        </View>

    </View>
    
);
}

export default LevelsScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rightbutton:{
            padding: 20,
            backgroundColor: "yellow",
            margin: 20,
            marginLeft: 300,
    },
    leftbutton:{
        padding: 20,
        backgroundColor: "yellow",
        margin: 20,
        marginRight: 300,
},
Title:{
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
},
  });