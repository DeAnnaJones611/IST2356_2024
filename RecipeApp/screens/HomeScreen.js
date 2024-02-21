import {Image,View, StyleSheet} from "react-native"; 
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

function HomeScreen(props){
    const insets = useSafeAreaInsets();

    return(
        <View  
            style ={[
                styles.rootContainerm,{
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingleft: insets.left,
                    paddingright: insets.right,
                },
            ]}>
                <View style = {styles.titleContainer}>
                    <Title> Recipe List</Title>
                </View>

                <View style = {styles.imageContainer}>
                    <Image
                        source ={require("../assets/Images/meal.png")}
                        style={styles.image}
                    />
                </View>

                <View style = {styles.navButtonContainer}>
                    <NavButton onNext = {props.onNext}>Got to Recipes</NavButton>
                </View>

            </View>
    );   
}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        width: "90%",
        backgroundColor: Colors.accent500,
    },

    titleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20, 
        borderColor: Colors.accent500,
        backgroundColor: Colors.primary300,
        borderWidth: 4,
        paddingRight: 10,
        borderRadius: 150
    },

    imageContainer: {
        flex: 2,
        justifyContent: "center",
        borderWidth: 4,
        borderRadius: 55,
        borderColor: Colors.accent800,
    },

    image: {
        height: "100%",
        width: "100%",
        borderRadius: 50,
        resizeMode: "stretch",
    },
    navButtonContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
});


