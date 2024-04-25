import { View, Text , Pressable, StyleSheet, ImageBackground, Alert} from "react-native";
 import EquationScreen from "./EquationScreen";
import{useContext, useEffect, useState} from "react";
import {useRoute} from "@react-navigation/native";
import CircleButton from "../components/CircleButton";
import { AppContext } from "../store/app-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CircleButton_Right from "../components/CircleButton_Right";


//https://wallpapercave.com/wp/wp2424376.jpg
function AdditionLevelsScreen({navigation}){
    const picAddition =  require("../assets/images/all.png");
    const [error,setError] = useState();
    const backpic =  "https://th.bing.com/th/id/R.0eab5fb4427590311e7c7ba3da0256c2?rik=EcVo4fu8zMMhHg&riu=http%3a%2f%2ftrumpwallpapers.com%2fwp-content%2fuploads%2fColorful-Wallpaper-22-3000x2000-1-scaled.jpg&ehk=o4bgBqlDu8SjKfKpMDPsKP6lxqPB3%2fzmTxnw1WbQ3m8%3d&risl=&pid=ImgRaw&r=0";
     
    const appCtx = useContext(AppContext);
    const insets =  useSafeAreaInsets();

    function setLevelOneRange(){
        Alert.alert("Level One Difficutly was picked");
        appCtx.setNumberOne(10);
        appCtx.setNumberTwo(0);
        appCtx.setMagicIncrease(1);

    }

    function setLevelTwoRange(){
        Alert.alert("Level Two Difficutly was picked");
        appCtx.setNumberOne(15);
        appCtx.setNumberTwo(0);
        appCtx.setMagicIncrease(2);


    }

    function setLevelThreeRange(){
        Alert.alert("Level Three Difficutly was picked");
        appCtx.setNumberOne(20);
        appCtx.setNumberTwo(0);
        appCtx.setMagicIncrease(3);


    }

    function setLevelFourRange(){
        Alert.alert("Level Four Difficutly was picked");
        appCtx.setNumberOne(25);
        appCtx.setNumberTwo(0);
        appCtx.setMagicIncrease(4);


    }


    function selectedListingHandler(){
        navigation.navigate("EquationScreenAddition");
      //  snumber = smallNumber;
        //lnumber = largeNumber;
        appCtx.setAddAllEq(appCtx.addTotalEq);
        appCtx.setAddCorrectEq(appCtx.addCorrectEq);
        appCtx.setMagicUser(appCtx.userMagic);
    
     }

    return (
        <ImageBackground source ={{uri : backpic}} style = {styles.container} imageStyle={styles.backgroundImage}>



                <View
                    style = {[
                        styles.container,
                            {
                                paddingTop: insets.top,
                                paddingBottom: insets.bottom,
                                paddingLeft: insets.left,
                                paddingRight: insets.right,
                                }
                         ]}
                >
        <View>
            <View style ={styles.buttonContainer}>
       <CircleButton_Right onPress={setLevelOneRange}>
                Level 1
           </CircleButton_Right>
        

        <View>
        <CircleButton onPress={setLevelTwoRange}> Level 2</CircleButton>
        </View>

        <View >
        <CircleButton_Right onPress={setLevelThreeRange}>
           
                Level 3
            
        </CircleButton_Right>
        </View>

        <View>
        <CircleButton onPress={setLevelFourRange}> Level 4</CircleButton>
        </View>
        <View style = {styles.goButtonContainer}>
        <Pressable style = {styles.goButton} onPress={selectedListingHandler}><Text>
                Embark
        </Text></Pressable>
        </View>
            </View>
 
            </View>
    </View>
        </ImageBackground>
    
    //Note watch the video

    
);
}

export default AdditionLevelsScreen;

const styles = StyleSheet.create({
    container: {
        //marginTop: 20,
      flex: 1,
    //  backgroundColor: '#fff',
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
imageContainer:{
    resizeMode: "cover", 
},
backgroundImage:{
    opacity: 0.7,
},
buttonContainer:{
    justifyContent:"center",
    alignContent: "center",
    justifyContent: "center",

    
},
goButton:{
    width: 200,
    margin: 10,
    padding: 30,
    backgroundColor: "yellow",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
},
goButtonContainer:{
    alignContent: "center",
    justifyContent: "center",
},
  });