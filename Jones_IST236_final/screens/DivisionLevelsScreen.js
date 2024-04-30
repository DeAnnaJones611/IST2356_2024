import { View, Text , Pressable, StyleSheet, Alert, ImageBackground} from "react-native";
 import EquationScreen from "./EquationScreen";
import{useState, useContext} from "react";
import {useRoute} from "@react-navigation/native";
import { AppContext } from "../store/app-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CircleButton_Right from "../components/CircleButton_Right";
import CircleButton from "../components/CircleButton";


function DivisionLevelsScreen({navigation}){
    const backpic = "https://th.bing.com/th/id/R.0eab5fb4427590311e7c7ba3da0256c2?rik=EcVo4fu8zMMhHg&riu=http%3a%2f%2ftrumpwallpapers.com%2fwp-content%2fuploads%2fColorful-Wallpaper-22-3000x2000-1-scaled.jpg&ehk=o4bgBqlDu8SjKfKpMDPsKP6lxqPB3%2fzmTxnw1WbQ3m8%3d&risl=&pid=ImgRaw&r=0";
    const appCtx = useContext(AppContext);
    const insets =  useSafeAreaInsets();
    const equationsLevelOne = ["1 ÷ 1", "2 ÷ 1","3 ÷ 1", "4 ÷ 1","5 ÷ 1", "6 ÷ 1","7 ÷ 1", "8 ÷ 1","9 ÷ 1", "10 ÷ 1",
                                "2 ÷ 2", "4 ÷ 2","6 ÷ 2", "8 ÷ 2","10 ÷ 2",
                                "3 ÷ 3", "6 ÷ 3","9 ÷ 3",
                                 "4 ÷ 4", "8 ÷ 4",
                                "5 ÷ 5", "10 ÷ 5", 
                                 "6 ÷ 6",
                                "7 ÷ 7",
                                "8 ÷ 8",
                                "9 ÷ 9",
                                "10 ÷ 10",
    ];
const answersLevelOne = [1,2,3,4,5,6,7,8,9,10,
                        1,2,3,4,5,
                        1,2,3,
                        1,2,
                        1,2,
                        1,
                        1,
                        1,
                        1,
                        1,
];



const equationsLevelTwo = ["1 ÷ 1", "2 ÷ 1","3 ÷ 1", "4 ÷ 1","5 ÷ 1", "6 ÷ 1","7 ÷ 1", "8 ÷ 1","9 ÷ 1", "10 ÷ 1","11 ÷ 1","12 ÷ 1",
                            "2 ÷ 2", "4 ÷ 2","6 ÷ 2", "8 ÷ 2","10 ÷ 2", "12 ÷ 2",
                            "3 ÷ 3", "6 ÷ 3","9 ÷ 3", "12 ÷ 3",
                            "4 ÷ 4", "8 ÷ 4", "12 ÷ 4",
                            "5 ÷ 5", "10 ÷ 5", 
                             "6 ÷ 6", "12 ÷ 6",
                            "7 ÷ 7",
                            "8 ÷ 8",
                            "9 ÷ 9",
                            "10 ÷ 10",
];
const answersLevelTwo = [1,2,3,4,5,6,7,8,9,10, 11, 12,
                        1,2,3,4,5,6,
                        1,2,3, 4,
                        1,2, 3 ,
                        1,2,
                        1,2,
                        1,
                        1,
                        1,
                        1,
];







const equationsLevelThree = ["1 ÷ 1", "2 ÷ 1","3 ÷ 1", "4 ÷ 1","5 ÷ 1", "6 ÷ 1","7 ÷ 1", "8 ÷ 1","9 ÷ 1", "10 ÷ 1","11 ÷ 1","12 ÷ 1","13 ÷ 1","14 ÷ 1", "15 ÷ 1",
                            "2 ÷ 2", "4 ÷ 2","6 ÷ 2", "8 ÷ 2","10 ÷ 2", "12 ÷ 2",  "14 ÷ 2",
                            "3 ÷ 3", "6 ÷ 3","9 ÷ 3", "12 ÷ 3",  "15 ÷ 3",
                            "4 ÷ 4", "8 ÷ 4", "12 ÷ 4",
                            "5 ÷ 5", "10 ÷ 5",  "15 ÷ 5",
                             "6 ÷ 6", "12 ÷ 6",
                            "7 ÷ 7",  "14 ÷ 7",
                            "8 ÷ 8",
                            "9 ÷ 9",
                            "10 ÷ 10",
];
const answersLevelThree = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13,14, 15,
                        1,2,3,4,5,6,7,
                        1,2,3,4,5,
                        1,2,3,
                        1,2, 3,
                        1,2,
                        1,2,
                        1,
                        1,
                        1,
];
const equationsLevelFour = ["1 ÷ 1", "2 ÷ 1","3 ÷ 1", "4 ÷ 1","5 ÷ 1", "6 ÷ 1","7 ÷ 1", "8 ÷ 1","9 ÷ 1", "10 ÷ 1","11 ÷ 1","12 ÷ 1","13 ÷ 1","14 ÷ 1", "15 ÷ 1","16 ÷ 1","17 ÷ 1","18 ÷ 1","19 ÷ 1","20 ÷ 1",
                            "2 ÷ 2", "4 ÷ 2","6 ÷ 2", "8 ÷ 2","10 ÷ 2", "12 ÷ 2",  "14 ÷ 2","16 ÷ 2","18 ÷ 2","20 ÷ 2",
                            "3 ÷ 3", "6 ÷ 3","9 ÷ 3", "12 ÷ 3",  "15 ÷ 3", "18 ÷ 3",
                            "4 ÷ 4", "8 ÷ 4", "12 ÷ 4", "16 ÷ 4", "20 ÷ 4",
                            "5 ÷ 5", "10 ÷ 5",  "15 ÷ 5", "20 ÷ 5",
                             "6 ÷ 6", "12 ÷ 6","18 ÷ 6",
                            "7 ÷ 7",  "14 ÷ 7",
                            "8 ÷ 8", "16 ÷ 8",
                            "9 ÷ 9", "18 ÷ 9",
                            "10 ÷ 10","20 ÷ 10",
];
const answersLevelFour = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13,14, 15, 16,17,18,19,20,
                        1,2,3,4,5,6,7, 8, 9, 10,
                        1,2,3,4,5,6,
                        1,2,3, 4, 5,
                        1,2,3, 4,
                        1,2, 3,
                        1,2,
                        1, 2,
                        1, 2,
                        1, 2
];

    function setLevelOneRange(){
        Alert.alert("Level One Difficutly was picked");
        appCtx.setListDivision(equationsLevelOne);
        appCtx.setAnswerListDivision(answersLevelOne);
        appCtx.setMagicIncrease(4);

    }

    function setLevelTwoRange(){
        Alert.alert("Level Two Difficutly was picked");
        appCtx.setListDivision(equationsLevelTwo);
        appCtx.setAnswerListDivision(answersLevelTwo);
        appCtx.setMagicIncrease(5);


    }

    function setLevelThreeRange(){
        Alert.alert("Level Three Difficutly was picked");
        appCtx.setListDivision(equationsLevelThree);
        appCtx.setAnswerListDivision(answersLevelThree);
        appCtx.setMagicIncrease(6);


    }

    function setLevelFourRange(){
        Alert.alert("Level Four Difficutly was picked");
        appCtx.setListDivision(equationsLevelFour);
        appCtx.setAnswerListDivision(answersLevelFour);
        appCtx.setMagicIncrease(7);


    }



    function selectedListingHandler(){
        navigation.navigate("EquationScreenDivision");
        appCtx.setDivAllEq(appCtx.divTotalEq);
        appCtx.setDivCorrectEq(appCtx.divCorrectEq);
        appCtx.setMagicUser(appCtx.userMagic);
    
     }

    return (
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

        <View style ={styles.buttonContainer}>
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
            
                Level 3
            
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

export default DivisionLevelsScreen;

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