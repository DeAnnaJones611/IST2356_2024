import {Pressable, StyleSheet, View, Text, ImageBackground} from "react-native";
import Colors from "../constants/colors";

function NavButton(props){
    return(

        //Note make a props for the picture
        <ImageBackground source= {props.buttonPic} style={styles.imageContainer}>
                    <Pressable
            android_ripple={{color: Colors. primary800}}
            onPress={props.onPress}
            style={ ({pressed}) => pressed && StyleSheet.pressedItem}
            >
                    <View style={styles.buttonContainer}>
                        <View  style={styles.textContainer}>
                            <Text  style={styles.text}>{props.children}</Text>
                        </View>
                    </View>
            </Pressable>
        </ImageBackground>



    );
}

export default NavButton;

const styles = StyleSheet.create({
    buttonContainer:{
        justifyContent: "center",
        alignItem: "center",
        borderRadius: 300,
        width: 180,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    pressedItem:{
        opacity: 0.3, 
    },
    text:{
        padding: 8,
        fontSize: 20,
        textAlign: "center",
        fontFamily: "copyduck",
        backgroundColor: "white",

    },
    imageContainer:{
        flex: 5,
        margin: 30,
        //padding: 10,
        width:400,
        height: 100,
        alignContent: "center",
        justifyContent: "center",

    },

});