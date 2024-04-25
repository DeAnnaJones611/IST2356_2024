import { StyleSheet, View, Text,Image, ImageBackground } from "react-native";
import CricleButton from "../components/CircleButton";
import PicButton from "../components/PicButton";
import Title from "../components/Title";
import { AppContext } from "../store/app-context";
import { useContext } from "react";
import App from "./EquationScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";




function HomeScreen(){
    const pic =  require("../assets/images/test.png");
    const appCtx = useContext(AppContext);
    const backpic =  "https://th.bing.com/th/id/R.6aab1932158776af0a20d3c30bda3db3?rik=EbsrfG%2bzJUt4hg&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2f5kq0GCjHA8Rwc%2fgiphy.gif&ehk=VbkWsghkOxC%2bAtj4v7uv7XX3e2MIu0fatQBic0fxHQQ%3d&risl=&pid=ImgRaw&r=0";
    const insets =  useSafeAreaInsets();

    return( 
    <ImageBackground source ={{uri : backpic}} resizeMode="cover" style = {styles.rootContainer} imageStyle={styles.backgroundImage}>
                <View
                    style = {[
        styles.rootContainer,
        {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }
    ]}
                >
        <Title>Welcome {appCtx.userName}</Title>


    </View>
        </ImageBackground>

    );
}

export default HomeScreen;
const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
    alignItems: "center"
},
    backgroundImage:{
        opacity: 0.3,
    }


  });