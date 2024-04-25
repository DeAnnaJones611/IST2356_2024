import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, TextInput } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppContext } from "../store/app-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function App(navigation) {

 const appCtx = useContext(AppContext);
 const insets =  useSafeAreaInsets();
  const [numberOne, setNumberOne] = useState(1);
  const [numberTwo, setNumberTwo] = useState(1);
  const [equationAnswer, setEquationAnswer] =useState(2);
  const [roundResult, setRoundResult] = useState("");
  const [questionCount, setQuestionCount] = useState(0);

  const [userAnswer, setUserAnswer] = useState();

   const equationNumberOne = generateRandomBetween(appCtx.oneNumber, appCtx.twoNumber);
 
  const equationNumberTwo = generateRandomBetween(appCtx.oneNumber, appCtx.twoNumber); 

  const numberAnswer = equationNumberOne + equationNumberTwo;  

  const [modalIsVisibleCheck, setModalIsVisibleCheck] = useState(false);
 // const [modalIsVisibleGoBack, setModalIsVisibleGoBack] = useState(false);

  useEffect(() => {  
    setEquationAnswer(numberAnswer);  
    setNumberOne(equationNumberOne); 
    setNumberTwo(equationNumberTwo);}, 
    []);


  const [correctAnswered, setCorrectAnswered] = useState(0);
  const [incorrectAnswered, setIncorrectAnsered] = useState(0);
  const [magicLevel, setMagicLevel] = useState(0);

  
function CloseModal(){
  setModalIsVisibleCheck(false);
  setNumberOne(0);
  setNumberTwo(0);
  setEquationAnswer(numberAnswer);  
  setNumberOne(equationNumberOne); 
  setNumberTwo(equationNumberTwo);
  setUserAnswer("");
}

function generateRandomBetween(max,min){
  const rndNum = Math.floor(Math.random()*(max - min)) + min;

  return rndNum;
}
function inputHandler(userAnswer){
  setUserAnswer(userAnswer)
}

function GetEquation() {
  setEquationAnswer(numberAnswer);  
  setNumberOne(equationNumberOne); 
  setNumberTwo(equationNumberTwo);

  }
  function CheckEquation(){
    setQuestionCount(questionCount + 1);
    setModalIsVisibleCheck(true);
    const allQuestions = appCtx.addTotalEq + 1;
    appCtx.setAddAllEq(allQuestions)


            if(userAnswer == equationAnswer){
        setRoundResult("Correct");
        setCorrectAnswered(correctAnswered + 1);
        const correctNumber = appCtx.addCorrectEq + 1;
        appCtx.setAddCorrectEq(correctNumber);

        const magicUp = appCtx.userMagic + appCtx.increaseMagic;
        appCtx.setMagicUser(magicUp);
        
       
      }else{
        setRoundResult("Incorrect");
        setIncorrectAnsered(incorrectAnswered + 1);
      }


  }

  function GoBack(){
    setModalIsVisibleGoBack(false);

  }

 

        return(
            <>
                <LinearGradient colors = {['#EFFD5F', '#FEBA4F']}
    style = {
        styles.container}>
            <StatusBar/>
            <SafeAreaView                     
            style = {[
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

                          
                          <Text style={styles.equationHolder}>  
                          {numberTwo}  +  {numberOne} </Text> 
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
                  <Text style={styles.word}>  {numberOne} +  {numberTwo}   = {equationAnswer}  
                  </Text>


</View>
<View>
                  <Text style={styles.word}> Your Answer: {userAnswer}</Text>
                  <Text style={styles.word}> The result: {roundResult}</Text>
                  
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
    //backgroundColor: "#FFFFFF",
  },

  word:{
    fontSize: 20,
    margin: 5,
    padding: 5,
    backgroundColor :"white",
    textAlign:  "center"
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
    fontSize: 20,

   },
   wholepage:{
    flex:1,
   },
   equationTitle:{
      textAlign: "center",
      fontSize:30,
   },
});