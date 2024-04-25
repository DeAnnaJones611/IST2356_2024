import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, TextInput } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
 const numbers = [1,2,3,4,5,6,7,8,9,10]


  const [numberOne, setNumberOne] = useState(1);
  const [numberTwo, setNumberTwo] = useState(1);
  const [equationAnswer, setEquationAnswer] =useState(2);
  const [roundResult, setRoundResult] = useState("");

  const [userAnswer, setUserAnswer] = useState();

   const equationNumberOne = Math.floor(Math.random()* numbers.length);
 
  const equationNumberTwo = Math.floor(Math.random()* numbers.length); 

  const numberAnswer = equationNumberOne + equationNumberTwo;  

  const [modalIsVisible, setModalIsVisible] = useState(false);

  
function CloseModal(){
  setModalIsVisible(false);
  setNumberOne(0);
  setNumberTwo(0);
  setEquationAnswer(numberAnswer);  
  setNumberOne(equationNumberOne); 
  setNumberTwo(equationNumberTwo);
  setUserAnswer("");
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
    setModalIsVisible(true);
      if(userAnswer == equationAnswer){
        setRoundResult("Correct");
      }else{
        setRoundResult("Incorrect");
      }
  }


 

        return(
            <>
            <StatusBar/>
            <SafeAreaView style={styles.container}>
                          <View style={styles.wholepage}>

                        <View style={styles.equationHolder}>
                          <Text style={styles.equationHolder}>  {numberOne}
                      + {numberTwo} </Text> 
                  <TextInput
                  style = {styles.input}
                  onChangeText = {inputHandler}
                  value = {userAnswer}
                  /> 
                        </View>


                  <Button 
                  title="Check Equation"
                  onPress ={CheckEquation}>
                    Get Equation
                  </Button>
                </View>  

                <Modal 
      visible = {modalIsVisible}>

    <SafeAreaView style = {styles.modalContainer}>
    <View>
                  <Text style={styles.word}>  {numberOne}</Text>
                     
                    <Text style={styles.word}> {numberTwo} </Text> 
                       <Text style={styles.word}>   = {equationAnswer}  
                  </Text>
                  <Text>{userAnswer}</Text>
                  <Text>{roundResult}</Text>
</View>


            <Button title='leave' onPress={CloseModal}>
              Check
            </Button>
    </SafeAreaView>

      </Modal>
            </SafeAreaView>
            </>
        );

    

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  word:{
    fontSize: 20,
    margin: 5,
    padding: 5,
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
   },
   wholepage:{
    flex:1,
   },
   equationTitle:{
      textAlign: "center",
      fontSize:30,
   },
});