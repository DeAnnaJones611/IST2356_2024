import { View, Text , Pressable, StyleSheet, Alert, ImageBackground} from "react-native";
import { AppContext } from "../store/app-context";
import{useContext,  useState} from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CircleButton_Right from "../components/CircleButton_Right";
import CircleButton from "../components/CircleButton";

function MultiplicationLevelsScreen({navigation}){
    const backpic = "https://th.bing.com/th/id/R.0eab5fb4427590311e7c7ba3da0256c2?rik=EcVo4fu8zMMhHg&riu=http%3a%2f%2ftrumpwallpapers.com%2fwp-content%2fuploads%2fColorful-Wallpaper-22-3000x2000-1-scaled.jpg&ehk=o4bgBqlDu8SjKfKpMDPsKP6lxqPB3%2fzmTxnw1WbQ3m8%3d&risl=&pid=ImgRaw&r=0";
    const appCtx = useContext(AppContext);
    const insets =  useSafeAreaInsets();

    function setLevelOneRange(){
        Alert.alert("Level One Difficutly was picked");
        appCtx.setNumberOne(5);
        appCtx.setNumberTwo(0);
        appCtx.setMagicIncrease(5);

    }

    function setLevelTwoRange(){
        Alert.alert("Level Two Difficutly was picked");
        appCtx.setNumberOne(8);
        appCtx.setNumberTwo(0);
        appCtx.setMagicIncrease(6);


    }

    function setLevelThreeRange(){
        Alert.alert("Level Three Difficutly was picked");
        appCtx.setNumberOne(11);
        appCtx.setNumberTwo(0);
        appCtx.setMagicIncrease(6);


    }

    function setLevelFourRange(){
        Alert.alert("Level Four Difficutly was picked");
        appCtx.setNumberOne(12);
        appCtx.setNumberTwo(0);
        appCtx.setMagicIncrease(8);


    }

    function selectedListingHandler(){
        navigation.navigate("EquationScreenMultiplication");
        appCtx.setMulAllEq(appCtx.mulTotalEq);
        appCtx.setMulCorrectEq(appCtx.mulCorrectEq);
        appCtx.setMagicUser(appCtx.userMagic);
    
     }

    return (
    
    //Note watch the video
    <ImageBackground source ={{uri : backpic}} style = {styles.container} imageStyle={styles.backgroundImage}>
   
    <View         style = {[
            styles.container,
                {
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                    }
             ]}>

        <View>
        <CircleButton_Right onPress={setLevelOneRange}>
                Level 1
            </CircleButton_Right>
        </View>

        <View>
        <CircleButton onPress={setLevelTwoRange}>
            Level 2
            </CircleButton>
        </View>

        <View>
        <CircleButton_Right onPress={setLevelThreeRange}>
            <Text>
                Level 3
            </Text>
        </CircleButton_Right>
        </View>

        <View>
        <CircleButton onPress={setLevelFourRange}>
            
                Level 4
         
        </CircleButton>
        </View>


        <View style = {styles.goButtonContainer}>
        <Pressable style = {styles.goButton} onPress={selectedListingHandler}><Text>
                Embark
        </Text></Pressable>
        </View>
    </View>
   </ImageBackground>
    
);
}

export default MultiplicationLevelsScreen;

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