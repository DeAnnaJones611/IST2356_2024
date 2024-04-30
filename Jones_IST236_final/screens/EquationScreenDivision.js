import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, TextInput } from 'react-native';
import { useState,useContext, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppContext } from '../store/app-context';
import { LinearGradient } from "expo-linear-gradient";


export default function App() {
 const equations = ["1 ÷ 1", "2 ÷ 1","3 ÷ 1", "4 ÷ 1","5 ÷ 1", "6 ÷ 1","7 ÷ 1", "8 ÷ 1","9 ÷ 1", "10 ÷ 1",
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
 const answers = [1,2,3,4,5,6,7,8,9,10,
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

  const appCtx = useContext(AppContext);
  const [equationAnswer, setEquationAnswer] =useState();
  const [roundResult, setRoundResult] = useState("");
  const [divisionEquation, setDivisionEquation] = useState();
  const [userAnswer, setUserAnswer] = useState();

const [addToMagic, setAddToMagic] = useState(0);
const [baseUserMagic, setBaseUserMagic] = useState(0);
const [newAmount, setNewAmount] = useState();

  const equationNumber = Math.floor(Math.random()* appCtx.divisionList.length);
  const printEquation = appCtx.divisionList[equationNumber];
  const numberAnswer =  appCtx.anwserDivisionList[equationNumber];




const [modalIsVisible, setModalIsVisible] = useState(false);

useEffect(() => {  
  setEquationAnswer(numberAnswer);    
  setDivisionEquation(printEquation);
}, 
  []);
  
function CloseModal(){
 setNewAmount(baseUserMagic + addToMagic) ;
  setModalIsVisible(false);
  setEquationAnswer(numberAnswer);    
  setDivisionEquation(printEquation);
  setUserAnswer("");
 // appCtx.setMagicUser(newAmount);


}


function inputHandler(userAnswer){
  setUserAnswer(userAnswer);
  setBaseUserMagic(appCtx.userMagic);
}

function GetEquation() {
  setEquationAnswer(numberAnswer);  


  }
  function CheckEquation(){
     const allQuestion  = appCtx.divTotalEq + 1;
     appCtx.setDivAllEq(allQuestion);

    setModalIsVisible(true);
      if(userAnswer == equationAnswer){
        setRoundResult("Correct");
       // setAddToMagic(appCtx.increaseMagic);  
        const correctNumber = appCtx.divCorrectEq + 1;
        
        appCtx.setDivCorrectEq(correctNumber);

        const magicUp = appCtx.userMagic + appCtx.increaseMagic;
        appCtx.setMagicUser(magicUp);
   

      }else{
        setRoundResult("Incorrect");
        setAddToMagic(0); 
      }
  }


 

        return(
            <>
          <LinearGradient colors = {['#EFFD5F', '#FEBA4F']}
    style = {
        styles.container}>
            <StatusBar/>
            <SafeAreaView style={styles.container}>
                          <View style={styles.wholepage}>

                        <View style={styles.equationHolder}>
                            <Text style={styles.word}> {divisionEquation} = </Text> 
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
      visible = {modalIsVisible}>
                                    <LinearGradient colors = {['#EFFD5F', '#FEBA4F']}
    style = {
        styles.container}>

    <SafeAreaView style = {styles.modalContainer}>
    <View style={styles.equationHolder}> 
                  <Text style={styles.word}>   {divisionEquation}   = {equationAnswer}  
                  </Text>



</View>
<View>

                  <Text style={styles.word}>Your answer was: {userAnswer}</Text>
                  <Text style={styles.word}>The results are: {roundResult}</Text>
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
   // backgroundColor: "#FFFFFF",
  },

  word:{
    fontSize: 25,
    margin: 5,
    padding: 5,
    textAlign: "center",
  },
  input:{
    // alignItems: "",
       padding: 5,
       borderWidth:3,
       height: "90%",
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