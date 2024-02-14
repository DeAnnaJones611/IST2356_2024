import { useSafeAreaInsets} from "react-native-safe-area-context";
import { View, StyleSheet, Text  } from "react-native";
import Title from "../componets/Title";
import NavButton from "../componets/NavButton";
import Colors from "../constants/colors";

function HomeScreen(props){
    
const insets = useSafeAreaInsets();

    return (
        <View style={[
                styles.rootContainer,
                {
                    paddingTop: insets.top,
                    paddingBottom:insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight:insets.right,
                }
                ]
            }>
                    <View styles= {styles.titleContainer}>
                        <Title> Red Lobster</Title>
                    </View>

                    <View styles= {styles.imageContainer}>
                        <Image styles= {styles.image} source={requestAnimationFrame("../assets/images/Resturant.png")}/>
                    </View>

                    <View style = {styles.infoContainer}>

			                    <Text style = {styles.infoText} onPress ={() => Linking.openURL("tel:+17048683884")} > (800) 562-7837 </Text>
			                     <Text style = {styles.infoText} onPress={() => Linking.openURL("https://maps.app.goo.gl/hzh7wzL3oKvqp6e8A")}> East Ridge Mall {"\n"} 200 N New Hope Rd {"\n"} Gasatonia NC 28054</Text>
                                 <Text style = {styles.infoText} onPress= {() =>Linking.openURL("https://www.redlobster.com/seafood-restaurants/locations/nc/gastonia/200-n-new-hope-road")}> www.redlobster.com</Text>

                    </View>

                    <View styles= {styles.buttonContainer}>
                        <NavButton onPress={props.onNext}> View Menu</NavButton>
                    </View>

            </View>
    )


}

export default HomeScreen;

const styles = StyleSheet.create({

    rootContainer: {
        flex: 1,
        alignItems: "center",
    },
    titleContainer:{
        flex: 1,
        justifyContent:"center",
    },
    imageContainer:{
        flex: 4,
    },
    image:{
        resizeMode: "center",
        height: "100%",
        width: 380,
    },
    infoContainer:{
            flex: 3,
            justifyContent:"center",  
    },

    infoText:{
        fontSize: 30,
        textAlign: "center",
        padding: 7,
        color: Colors.primary500,
    },
    buttonContainer:{
        flex: 1,
    },

});

