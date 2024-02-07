{/* import all the needed freatures*/}
import {Image, View, Text, StyleSheet} from "react-native";

{/*The function for the componet formats the 
information with the name, image, and rank*/}
function MovieItem(props){
    return(
        <View style = {styles.itemContainer}>
            <View  style = {styles.titleContainer}>
                    <Text style = {styles.itemTitle} >{props.name}</Text>
            </View>
            <View style = {styles.imageContainer}>
                    <Image style = {styles.itemImage} source = {props.image}/>
            </View>
            <View style = {styles.rankContainer}>
                    <Text style = {styles.itemRank}>{props.rank}</Text>
            </View>
        </View>
        
    );
}

{/*Exports the componet*/}

export default MovieItem;

const styles = StyleSheet.create({
    itemContainer:{
        marginBottom: 20, 
        borderColor: "#022D36",
        backgroundColor: "#59788E",
        padding:10,
        borderWidth: 2,
    },
    titleContainer:{
        color: "#290916",
        backgroundColor: "#D6BDE7",
        borderColor: "#290916",
        borderWidth: 3,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    itemTitle:{
        fontSize: 30,
        textAlign: "center",
    },
    imageContainer:{
        alignItem: "center",
        backgroundColor: "#59788E",
        borderWidth: 3,
        marginBottom: 5,
        marginTop: 5,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    itemImage:{
        width: "100%",
        height: 400,
        resizeMode: "cover",
    },
    rankContainer:{
        backgroundColor: "#D6BDE7",
        borderColor: "#290916",
        borderWidth: 3,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    itemRank:{
        fontSize: 30,
        textAlign: "center",
    },

});