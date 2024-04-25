import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, TextInput } from 'react-native';
import { useState, useContext,useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppContext } from "../store/app-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
 const appCtx = useContext(AppContext);

 const insets =  useSafeAreaInsets();
  const [equationAnswer, setEquationAnswer] =useState(1);
  const [roundResult, setRoundResult] = useState("");

  const [userAnswer, setUserAnswer] = useState();
  const [largerNumber, setLargerNumber] = useState(2);
  const [smallerNumber, setSmallerNumber] = useState(1);


  const equationNumberOne = generateRandomBetween(appCtx.oneNumber, appCtx.twoNumber);
 
  const equationNumberTwo = generateRandomBetween(appCtx.oneNumber, appCtx.twoNumber); 
  
  
  const numberAnswer = largerNumber - smallerNumber;  

 
  const [modalIsVisibleCheck, setModalIsVisibleCheck] = useState(false);

  const [correctAnswered, setCorrectAnswered] = useState(0);
  const [incorrectAnswered, setIncorrectAnsered] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [magicLevel, setMagicLevel] = useState(0);

  function generateRandomBetween(max,min){
    const rndNum = Math.floor(Math.random()*(max - min)) + min;
  
    return rndNum;
  }

  useEffect( () => {
      if (equationNumberOne > equationNumberTwo){
    setLargerNumber(equationNumberOne);
    setSmallerNumber(equationNumberTwo);
  } else{
    setLargerNumber(equationNumberTwo);
    setSmallerNumber(equationNumberOne);
  }

  setEquationAnswer(largerNumber - smallerNumber);
  },[equationAnswer])
// setAnswer();

 function CloseModal(){
  setModalIsVisibleCheck(false);



 // const numberAnswer = largerNumber - smallerNumber;  
  //setEquationAnswer(numberAnswer);  
  setUserAnswer("");
}


function inputHandler(userAnswer){
  setUserAnswer(userAnswer)
}

function GetEquation() {
  setEquationAnswer(numberAnswer);  


  }
  function CheckEquation(){
    setEquationAnswer(largerNumber - smallerNumber);
    //setAnswer();
    setQuestionCount(questionCount + 1);
    setModalIsVisibleCheck(true);
    const allQuestion  = appCtx.subTotalEq + 1;
    appCtx.setSubAllEq(allQuestion);


      if(userAnswer == equationAnswer){
        setRoundResult("Correct");
        setCorrectAnswered(correctAnswered + 1);
        const correctNumber = appCtx.subCorrectEq + 1;
        
        appCtx.setSubCorrectEq(correctNumber);


        const magicUp = appCtx.userMagic + appCtx.increaseMagic;
        appCtx.setMagicUser(magicUp);
      }else{
        setRoundResult("Incorrect");
        setIncorrectAnsered(incorrectAnswered + 1);
      }
  }

  function GoBack(){
    setModalIsVisibleGoBack(false);
   // navigation.navigate("AdditionLevelsScreen");
    appCtx.setUserMagic(appCtx.userMagic + magicLevel);
  }
 

        return(
            <>
                            <LinearGradient colors = {['#EFFD5F', '#FEBA4F']}
    style = {
        styles.container}>
            <StatusBar/>
            <SafeAreaView             style = {[
                        styles.container,
                            {
                                paddingTop: insets.top,
                                paddingBottom: insets.bottom,
                                paddingLeft: insets.left,
                                paddingRight: insets.right,
                                }
                         ]}>
                          <View style={styles.wholepage}>

                          <View style={styles.equationHolder}>
                          <Text style={styles.equationHolder}>  {largerNumber} - {smallerNumber} = </Text> 
                  <TextInput
                  style = {styles.input}
                  onChangeText = {inputHandler}
                  value = {userAnswer}
                  keyboardType="decimal-pad"
                  /> 

                          </View>


                  <Button 
                  title="Check Equation"
                  onPress ={CheckEquation}>
                    Get Equation
                  </Button>
                </View>  

                <Modal 
      visible = {modalIsVisibleCheck}>
                <LinearGradient colors = {['#EFFD5F', '#FEBA4F']}
    style = {
        styles.container}>
    <SafeAreaView style = {styles.modalContainer}>
    <View style={styles.equationHolder}>
                  <Text style={styles.word}> {largerNumber} - {smallerNumber}  = {equationAnswer}  
                  </Text>



                  
</View>
<View>
                    <Text style={styles.word}> Your answer was: {userAnswer}</Text>
                  <Text style={styles.word} >Correct answer: {roundResult}</Text>
</View>


            <Button title='leave' onPress={CloseModal}>
              Check
            </Button>
    </SafeAreaView>
    </LinearGradient>
      </Modal>



            </SafeAreaView>
            </LinearGradient>
            </>
        );

    

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },

  word:{
    fontSize: 20,
    margin: 5,
    padding: 5,
    textAlign: "center",
  },
  input:{
    // alignItems: "",
      marginTop: 20,
       padding: 5,
       borderWidth:3,
       height: "40%",
       width: "35%",
       borderColor: "#B100CD",
       backgroundColor: '#DA8EE7',
       color: '#000080'
   },
   equationHolder:{
    flexDirection: "row",
    margin: 50,
    fontSize: 30,
   },
   wholepage:{
    flex:1,
   },
   equationTitle:{
      textAlign: "center",
      fontSize:30,
   },
});