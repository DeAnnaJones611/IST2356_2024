import { ScrollView, TextInput, View, StyleSheet,Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import Title from "../components/Title";


function AddRecipeScreen(props){
    const insets = useSafeAreaInsets();

    const [recipeTitle, setRecipeTitle] = useState("");
    const [recipeText, setRecipeText] = useState("");

    function addRecipeHandler(){
        props.onAdd(recipeTitle, recipeText);
        props.onCancel();
    }

    return (
        <View   
            style = {[
                styles.rootContainer,
                {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right
            },
            ]}
            >
                <View style = {styles.titleContainer}>
                        <Title>Add Recipe</Title>
                </View>

                <View style = {styles.scrollContainer}>
                    <ScrollView>
                        <View style = {styles.recipeTitleContainer}>
                            <TextInput placeholder = "Enter Recipe title here" 
                            style = {styles.recipeTile} 
                            onChange={setRecipeTitle}/>
                        </View>

                        <View style = {styles.recipeTextContainer}>
                            <TextInput placeholder="Enter Recipe Ingerdients here "  
                            style = {styles.recipeText} 
                            onChange={setRecipeText}
                            textAlign="top"
                            multiline = {true}
                            numberOfLines={20}
                            />
                            
                        </View>

                        <View style = {styles.navButtonContainer}>
                            <View style = {styles.navButton}>
                                <NavButton onNext = {addRecipeHandler}> Submit</NavButton>
                            </View>

                            <View style = {styles.navButton}>
                            <NavButton onNext = {props.onCancel}> Cancel</NavButton>
                            </View>
                    </View>

                    </ScrollView>

                </View>
        
        
            </View>
    );


}
export default AddRecipeScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
    },

    titleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        marginBottom:50,
    },
    scrollContainer:{
        flex:5, 
    },
    recipeTitleContainer:{
        borderwidth: 3,
        borderColor: Colors.primary500,
        backgroundColor: Colors.primary300,

    },
    recipeTile: {
        color: Colors.accent800,
        fontWeight: "bold",
         fontSize: 30,
    },
    recipeTextContainer:{
        marginVertical: 5,
        borderColor: Colors.primary800,
        borderWidth: 3,
        backgroundColor: Colors.primary300,
        alignItems: "flex-start",
    },
    recipeText: {
        color: Colors.accent500,
    },
    navButtonContainer:{
        flex: 2, 
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    navButton: {
        marginHorizontal: 10,
    }
});