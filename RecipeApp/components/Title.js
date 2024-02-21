import {Text, StyleSheet} from "react-native";
import Colors from "../constants/colors";



function Title(props) {
    return <Text style={styles.title}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 65,
        color: Colors.primary800,
        textShadowColor: Colors.accent500,
        textShadowRadius: 25,
        fontFamily: "jCursiveFont",
        justifyContent: 'center',
        fontFamily: "mash", 
    },
});