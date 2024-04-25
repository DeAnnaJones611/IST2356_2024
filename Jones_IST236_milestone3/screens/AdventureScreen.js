import { View, Text , Pressable, FlatList, ScrollView, StyleSheet, ImageBackground} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PicButton from "../components/PicButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";


function AdventureScreen(){
    const insets =  useSafeAreaInsets();
    const backpic =  "https://th.bing.com/th/id/OIP.mVMQXdvL7t3NHocbDPiSBQHaGc?rs=1&pid=ImgDetMain";
    const navigation = useNavigation();
    const picAddition =  require("../assets/images/all.png");

    const picSubtraction =  require("../assets/images/Egg2stage1.png");

    const picMultiplication =  require("../assets/images/test.png");

    const picDivision =  require("../assets/images/Egg1stage1.png");


        function SetAdditionLevel(){
            navigation.navigate("AdditionLevelsScreen");

        }
        function SetSubtractionLevel(){
            navigation.navigate("SubtractionLevelsScreen");
            
        }
        function SetMultiplicationLevel(){
            navigation.navigate("MultiplicationLevelsScreen");
            
        }
        function SetDivisionLevel(){
            navigation.navigate("DivisionLevelsScreen");
            
        }


 function selectedListingHandler(){
    //navigation.navigate("LevelsScreen");

 }
 // <ImageBackground source ={{uri : backpic}} resizeMode="cover" style = {styles.rootContainer} imageStyle={styles.backgroundImage> 
    return (
        <ImageBackground source ={{uri : backpic}} resizeMode="cover" style = {styles.container} imageStyle={styles.backgroundImage}> 
            <View                     style = {[
                styles.container,
                {
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                }
            ]}>
        <Title>Adventure Screen</Title>
        <ScrollView>
        <View>
            <PicButton onPress={SetAdditionLevel} buttonPic = {picAddition}>
            Addition
            </PicButton>
             
            </View>

            <View>
            <PicButton onPress={SetSubtractionLevel} buttonPic = {picSubtraction}>
            Subtraction
            </PicButton>
              
            </View>

            <View>
            <PicButton onPress={SetMultiplicationLevel} buttonPic = {picMultiplication}>
            Multiplication
            </PicButton>
                          
            </View>

            <View>
            <PicButton onPress={SetDivisionLevel} buttonPic = {picDivision}>
            Division
            </PicButton>
             
            </View>
        </ScrollView>

    </View>

</ImageBackground>
    );
}

export default AdventureScreen;

const styles = StyleSheet.create({
    container: {
        
      flex: 1,
     // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
            padding: 20,
            backgroundColor: "yellow",
            margin: 20,
            

    },
    backgroundImage:{
        opacity: 0.3,
    }
  });
  