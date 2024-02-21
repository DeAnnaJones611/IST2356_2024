
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';

import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import RecipeItem from "../components/RecipeItem";
import RecipeView from "../modals/RecipeView";

function RecipeScreen(props){
    const insets = useSafeAreaInsets();

    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [modalRecipeTitle, setModalRecipeTitle] = useState("");
    const [modalRecipeText, setModalRecipeText] = useState("");

    function recipeViewHandler(title, text){
        setModalRecipeTitle(title);
        setModalRecipeText(text);
        setModalIsVisible(true);
    }

    function closeRecipeViewHandler(){
        setModalIsVisible(false);
    }

    return(
        <View 
            style ={[
                styles.rootContainer,
                {
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                }
            ]}>


            <View style = {styles.titleContainer} >
                <Title>Recipe Vault</Title>
            </View>

            <View style={styles.itemContainer}>
                <FlatList 
                    data = {props.currentRecipe}
                    keyExtractor = {(item, index) => {
                        return item.id;
                    }}
                    alwaysBounceVertical = {false}
                    renderItem = {(itemData)=>{
                        return(
                            <RecipeItem
                                id = {itemData.item.id}
                                title={itemData.item.title}
                                onView={recipeViewHandler.bind(
                                    this, 
                                    itemData.item.title,
                                    itemData.item.text
                                )}
                                onDelete = {props.onDelete.bind(this,itemData.item.id)}

                            />
                        );
                    }}
                />
            </View>

            <RecipeView
                visible = {modalIsVisible}
                title={modalRecipeTitle}
                text = {modalRecipeText}
                onClose = {closeRecipeViewHandler}
            />

            <View style = {styles.navButtonContainer}>
                <View style = {styles.navButton}>
                    <NavButton onNext={props.onAdd}> Add New Recipes</NavButton>                    
                </View>

                <View style = {styles.navButton}>
                    <NavButton onNext={props.onHome}>Return Home</NavButton>                    
                </View>
            </View>

            </View>

    );

}


export default RecipeScreen;

const styles =  StyleSheet.create({
    rootContainer:{
        flex: 1,
        width: "90%", 
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    itemContainer: {
        flex: 6,
    },
    navButtonContainer:{
        flex: 2, 
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center", 
    },
    navButton: {
        marginHorizontal: 10,
    },
});

