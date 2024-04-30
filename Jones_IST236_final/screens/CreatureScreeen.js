import { View, Text , Pressable, StyleSheet, Image,Button,Alert, ImageBackground} from "react-native";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../store/app-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";

function CreatureScreen(){
    const insets =  useSafeAreaInsets();
   const backpic =  "https://th.bing.com/th/id/OIP._DzTDx8odWo6BIBrTeJr6wHaLH?rs=1&pid=ImgDetMain";
    const appCtx = useContext(AppContext);

        useEffect( () => {
            setEggArray(appCtx.eggPic);
            if(creaturePictureIndex < eggArray.length-1){
                setResultsMaigc("No more Levels to go");}

            else{
                setResultsMaigc(appCtx.nextLevel);
            }
        },[])
        

        
        const[creaturePictureIndex, setCreaturePictureIndex] = useState(0);


        const [eggArray , setEggArray] = useState([]);

        const [userMagicLeft, setUserMagicLeft] = useState();
        const [resultsMaigc, setResultsMaigc] = useState();
        var lefthere;



        function CheckMagic(){
            
            var newIndex = creaturePictureIndex +1;
            if(creaturePictureIndex < eggArray.length-1){

            if (appCtx.userMagic >= appCtx.nextLevel){
                const lefthere  =  appCtx.userMagic - appCtx.nextLevel;
                setUserMagicLeft(lefthere);
               appCtx.setMagicUser(lefthere);
               appCtx.setEggLevel();
//
               
              
                 //   setCreaturePicture(creaturePictureArray[creaturePictureIndex]);
                  //  setNextLevelNumber(levelAmount[creaturePictureIndex]);
                    setCreaturePictureIndex(newIndex);

            }
            else{
                Alert.alert("Not enough Magic");
            }

            }

            else{
                Alert.alert("You got your creature to hatch");
            }

        }
//<ImageBackground source ={{uri : backpic}} resizeMode="cover">
    return (
       
        <ImageBackground source ={{uri : backpic}} resizeMode="cover" style = {styles.container} imageStyle={styles.backgroundImage}>
                <View style = {[
                    styles.container,
                    {
                        paddingTop: insets.top,
                        paddingBottom: insets.bottom,
                        paddingLeft: insets.left,
                        paddingRight: insets.right,
                    }
                ]}>
        <View style ={styles.infoContainer}>
            <View style={styles.titleContainer}>
                        <Title>Creature Screen</Title>
            </View>

            <View style={styles.imageContainer}>
            <Image style={styles.image} source={appCtx.eggPic[creaturePictureIndex]}/>
                </View>



            <View style={styles.magicContainer}>
                 <Text style={styles.text}> Next magic amount:  {appCtx.nextLevel}</Text>
                        <Pressable style={styles.button} onPress={CheckMagic}><Text style={styles.title}>Enchant </Text></Pressable>
        </View>
<View>

    
</View>
  
        </View> 
         </View>
   </ImageBackground>

    );
}

export default CreatureScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
    },
    infoContainer:{
        flex:1,
        margin: 15,
    },
    title:{
        textAlign: "center",
    },
    imageContainer:{
        flex: 5,
        margin: 2,
        padding: 5,
        width: 300,
        height: 50,
        alignContent: "center",
        justifyContent: "center",

    },
    image: {
            width: 300,
            height: 300,
    },
    titleContainer:{
        
    },
    magicContainer:{
        flex: 2,
        magin: 10,
       
        
    },
    useMagicContainer:{
       
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
    },
    button:{
        marginTop: 30,
        padding: 10,
        margin: 10,
        backgroundColor: "yellow",
    },

    testCotnainer:{
        flexDirection: "row",
        margin: 10,
        padding: 2,
    },
    groupInfo:{
        marign: 10,
        padding: 2,
    }, 
    test:{
        margin:2,
    },
    text:{
        backgroundColor :"white",
        textAlign: "center",
        fontSize: 15, 
    },
    backgroundImage:{
        opacity: 0.8,
    }
});