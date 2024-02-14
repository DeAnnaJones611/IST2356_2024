import { StyleSheet, View, Text, Image } from "react-native";
import Colors from "../constants/colors";



function MenuItems(props){

        return(
                <View style = {styles.itemContainer}>
                        <View style = {styles.titleContainer}>
                            <Text style = {styles.title}>{props.name}</Text>
                        </View>

                        <View style = {styles.imageContainer}>
                            <Image style = {styles.image} source = {props.image}/>
                        </View>

                        <View style = {styles.priceContainer}>
                            <Text style = {styles.price}>{props.price}</Text>
                        </View>
                </View>
        );
}


export default MenuItems;


styles = StyleSheet.create({

    itemContainer:{
        marginBottom: 20, 
    },

    titleContainer:{
        backgroundColor: Colors.primary500,
        borderWidth: 3,
        borderRadius: 5,
    },

    title:{
        fontSize: 30,
        textAlign: "center",

    },

    imageContainer: {
        alignItems: "center",
        borderWidth: 3,
        borderRadius: 5,
        backgorundColor: "black",

    },
    image: {
        width: "100%",
        height: 250,
        resizeMode: "cover",

    },
    priceContainer: {
        backgroundColor: Colors.accent300,
        borderWidth: 3,
        borderRadius: 5,
    },

    price:{
        fontSize: 40,
        textAlign: "center",
        
    },






});