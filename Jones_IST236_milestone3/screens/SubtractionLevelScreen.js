import { View, Text , Pressable, StyleSheet, ImageBackground, Alert} from "react-native";
import { AppContext } from "../store/app-context";
import{useContext, useState} from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CircleButton_Right from "../components/CircleButton_Right";
import CircleButton from "../components/CircleButton";

function SubtractionLevelScreen({navigation}){
    const backpic = "https://th.bing.com/th/id/R.6aab1932158776af0a20d3c30bda3db3?rik=EbsrfG%2bzJUt4hg&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2f5kq0GCjHA8Rwc%2fgiphy.gif&ehk=VbkWsghkOxC%2bAtj4v7uv7XX3e2MIu0fatQBic0fxHQQ%3d&risl=&pid=ImgRaw&r=0";
    const appCtx = useContext(AppContext);
    const insets =  useSafeAreaInsets();



    function setLevelOneRange(){
        Alert.alert("Level One Difficutly was picked");
        appCtx.setNumberOne(10);
        appCtx.setNumberTwo(0);
        appCtx.setMagicIncrease(2);

    }

    function setLevelTwoRange(){
        Alert.alert("Level Two Difficutly was picked");
        appCtx.setNumberOne(15);
        appCtx.setNumberTwo(0);
        appCtx.setMagicIncrease(3);


    }

    function setLevelThreeRange(){
        Alert.alert("Level Three Difficutly was picked");
        appCtx.setNumberOne(20);
        appCtx.setNumberTwo(0);
        appCtx.setMagicIncrease(4);


    }

    function setLevelFourRange(){
        Alert.alert("Level Four Difficutly was picked");
        appCtx.setNumberOne(25);
        appCtx.setNumberTwo(0);
        appCtx.setMagicIncrease(5);


    }
    function selectedListingHandler(){
        navigation.navigate("EquationScreenSubtraction");
        appCtx.setSubAllEq(appCtx.subTotalEq);
        appCtx.setSubCorrectEq(appCtx.subCorrectEq);
        appCtx.setMagicUser(appCtx.userMagic);
    
     }
     

    return (
    
    //Note watch the video
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


        <View style ={styles.buttonContainer}>
        <CircleButton_Right onPress={setLevelOneRange}>
                Level 1
            </CircleButton_Right>
        

        <View>
        <CircleButton  onPress={setLevelTwoRange}><Text>
            Level 2
            </Text></CircleButton>
        </View>

        <View>
        <CircleButton_Right  onPress={setLevelThreeRange}>
            
                Level 3
            
        </CircleButton_Right>
        </View>

        <View>
        <CircleButton  onPress={setLevelFourRange}>
            
                Level 4
            
        </CircleButton>
        </View>
        <View style = {styles.goButtonContainer}>
        <Pressable style = {styles.goButton} onPress={selectedListingHandler}><Text>
                Embark
        </Text></Pressable>
        </View>
</View>
    </View>
   </ImageBackground>
);
}

export default SubtractionLevelScreen;

const styles = StyleSheet.create({
    container: {
   
      flex: 1,
      
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