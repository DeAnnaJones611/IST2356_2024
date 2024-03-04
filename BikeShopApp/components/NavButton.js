import {Pressable, StyleSheet, View, Text} from "react-native";
import Colors from "../constants/colors";

function NavButton(props){
    return(
        <Pressable
            android_ripple={{color: Colors. primary800}}
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
        width: 300,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    pressedItem:{
        opacity: 0.3, 
    },
    text:{
        padding: 8,
        fontSize: 25,
        textAlign: "center",

    },

});