import {Pressable, StyleSheet, View, Text} from "react-native";
import Colors from "../constants/colors";

function NavButton(props){
    return(
        <Pressable
            android_ripple={{color: Colors. primary800 && StyleSheet.pressedItem}}
            onPress={props.onPress}
            style={({pressed}) => pressed && StyleSheet.pressedItem}
            >
                    <View style={styles.buttonContainer}>
                        <View  style={styles.textContainer}>
                            <Text  style={styles.text}>{props.children}</Text>
                        </View>
                    </View>
            </Pressable>


    );
}

export default NavButton;

const styles = StyleSheet.create({
    buttonContainer:{
        justifyContent: "center",
        alignItem: "center",
        borderRadius: 300,
        width: 80,
        height: 80,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 100,
        borderColor: "yellow",
        backgroundColor: "orange",
        borderWidth: 10,
        marginRight: 200,
    },
    pressedItem:{
        opacity: 0.3, 
        borderRadius: 100,
        width: 40,
        height: 40,
        backgroundColor: "yellow",
        
    },
    text:{
        padding: 5,
        fontSize: 20,
        textAlign: "center",
        fontFamily: "sunny",

    },
    pressed:{
        borderRadius: 100,
        width: 80,
        height: 80,
    },
});