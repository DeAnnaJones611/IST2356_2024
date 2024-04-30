import { View, Text , Pressable, StyleSheet,TextInput, Image, Alert} from "react-native";
 import EquationScreen from "./EquationScreen";
import{useContext, useState} from "react";
import {useRoute} from "@react-navigation/native";
import {AppContext} from "../store/app-context";
import Title from "../components/Title";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";


function DivisionLevelsScreen({navigation}){
    const insets =  useSafeAreaInsets();
    const [eggNumber, setEggNumber] = useState("");
    const [userAnswer, setUserAnswer] = useState("");   
    const [isPressed, setIsPressed] = useState();
    const appCtx = useContext(AppContext);

    function inputHandler(userAnswer){
        setUserAnswer(userAnswer)
      }

    function selectedListingHandler(){
        if( (eggNumber != "") && (userAnswer !=  "")){
        navigation.navigate("TopStackNavigator");
        appCtx.setNameUser(userAnswer);
        appCtx.setUserEgg(eggNumber);
        }
        else{
            Alert.alert("Please enter a name and choose an Egg");
        }
    
     }
     function setEggNumber1(){
        Alert.alert("Egg one was chosen");
        setEggNumber(1);

     }
     function setEggNumber2(){
        Alert.alert("Egg two was chosen");
        setEggNumber(2);
     }
    return (
    
    //Note watch the video
    <LinearGradient colors = {['#EFFD5F', '#FEBA4F']}
    style = {
        styles.appcontainer}>

 
    <View             style = {[
        styles.appcontainer,
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
                }
         ]}>

        <View style={styles.NameImputSection}>
        <Title> Enter Name</Title>
                   <TextInput
                  style = {styles.input}
                  onChangeText = {inputHandler}
                  value = {userAnswer}
                  /> 
        </View>
 
<Title> Choose an Egg</Title>
        <View style = {styles.testCotnainer}>
            
            <View  style={styles.groupInfo}>
            <Pressable onPress={setEggNumber1}>
            <Image style={styles.eggImage} source={require("../assets/images/Egg1.png")}/>
            </Pressable> 
            </View>

            <View  style={styles.groupInfo}>
                       <Pressable onPress={setEggNumber2}  >
                <Image style={styles.eggImage} source={require("../assets/images/Egg2.png")}/>
            </Pressable> 
            </View>




        </View>
            <View>

            </View>

        <View>
        <Pressable style = {styles.continueButton} onPress={selectedListingHandler}><Text>
                To Home Page
            </Text></Pressable>
        </View>
       



    </View>
       </LinearGradient>
);
}

export default DivisionLevelsScreen;

const styles = StyleSheet.create({
    appcontainer: {
        flex: 1,
        //backgroundColor: "#FFFFFF",
      },
    container: {
        marginTop: 20,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    continueButton:{
            padding: 20,
            backgroundColor: "yellow",
            margin: 20,
            alignContent: "center",
            justifyContent: "center",
            textAlign: "center",
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
input:{
    // alignItems: "",
      marginTop: 20,
       padding: 5,
       borderWidth:3,
       height: "20%",
       width: "35%",
       borderColor: "#B100CD",
       backgroundColor: '#DA8EE7',
       color: '#000080',
        marginLeft: 100,
   },
   testCotnainer:{
    flexDirection: "row",
    margin: 10,
    padding: 2,
    justifyContent: "space-between",
    
},
groupInfo:{
    marign: 10,
    padding: 5,
    backgroundColor:'yellow',
    
},
button:{
    marign: 10,
}, 
NameImputSection:{
    justifyContent: "center",
  alignContent:"center",
},
eggImage:{
    height: 150,
    width: 150,
    margin: 10,
    padding: 10,
},
  });