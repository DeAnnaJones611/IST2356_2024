import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useFonts } from 'expo-font';

import HomeScreen from './screens/HomeScreen';
import RecipeScreen from './screens/RecipeScreen';
import AddRecipeScreen from './screens/AddRecipeScreen';

export default function App() {
  


  const [fontsLoaded] = useFonts({
  jCursive: require("./assets/Fonts/JacobCursive.ttf"),
  mash :require("./assets/Fonts/Marshena_DEMO.ttf"),
  choco: require("./assets/Fonts/ChocoTasteTrial.otf"),
})
 


    const [currentScreen, setCurrentScreen] = useState("home");
    const [currentID, setCurrentID] = useState(4);
    const [currentRecipe, setCurrentRecipe] = useState([
        {
          id:1,
          title: "Fried Rice",
          text:"Rice, Meat, Egg, Soy Sauce, Sesame Oil\nCook the rice\n Put all the ingerdients in a pan \n cook till apropate color",
        },

        {
          id:2,
          title: "Cheese Cake",
          text:"Gramcrackers, Cream Cheese, Butter, Sugar \n Crush the gramcrackers and pat down in a pan\n Mix the sugar, butter, cream cheese till creamy"+ 
          " \n Put the mixture into the gramcracker pan \n put the pan into the fridge for around 2 hours or till solid",
        },
        {
          id:3,
          title: "Kimbop",
          text:"Seaweed, Rice, Imitation Crab, Cucumber, Carrot \n Lay the seaweed flat and pat a thin layer of rice on it \n Cut the cucumber, carrot, and imitation crab into long peices"+ 
          " \n Lay the cut carrot, cucumber, and imitation crab in section closer to one side \n Start rolling the seaweed over the cut ingredients from the closer side \n gently press the seaweed close once cometely rolled"+
          "Note: the seaweed can break if over stuffed or pressed too hard when closing.",
        },
    ]);

    function homeScreenHandler(){
      setCurrentScreen("home");

    }
    function recipeScreenHandler(){
      setCurrentScreen("recipe");
    }

    function addRecipeScreenHandler(){
      setCurrentScreen("add");
    }


    function addReciprHandler(enteredRecipeTitle, enteredRecipeText){
      setCurrentRecipe((currentRecipe) => {
        return[
          ...currentRecipe,
          {id:currentID, title: enteredRecipeTitle, text: enteredRecipeText},
        ];
      });
      setCurrentID(currentID+1);
      recipeScreenHandler();
    }

    function deleteNoteHandler(id){
      setCurrentRecipe((currentRecipe) =>{
        return currentRecipe.filter((item) => item.id !==id);
      });
    }

    let screen = <HomeScreen onNext = {recipeScreenHandler}/>

    if (currentScreen === "add"){
      screen = <AddRecipeScreen onAdd={addReciprHandler} onCancel = {recipeScreenHandler}/>;
    }


    if (currentScreen === "recipe"){
        screen = (
            <RecipeScreen 
              onHome={homeScreenHandler}
              onAdd= {addRecipeScreenHandler}
              onDelete = {deleteNoteHandler}
              currentRecipe = {currentRecipe}
              />
        );

    }

  return (
  <>
    <StatusBar style="auto"/>
    <SafeAreaProvider style = {styles.container}>{screen}</SafeAreaProvider>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
