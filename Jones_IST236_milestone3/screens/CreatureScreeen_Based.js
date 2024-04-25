import { View, Text , Pressable, StyleSheet, Image,Button,Alert} from "react-native";
import { useState } from "react";



        const egg = require("../assets/images/test.png");

        const egg1 = [require("../assets/images/Egg1stage1.png"), require("../assets/images/Egg1stage2.png"), require("../assets/images/Egg1stage3.png")];

        const egg2 = [ require("../assets/images/Egg2stage1.png"), require("../assets/images/Egg2stage2.png"), require("../assets/images/Egg2stage3.png")];

        const levelAmount = [50, 70, 100];

function CreatureScreen(){


        
        const [creaturePicture, setCreaturePicture] = useState(egg);

        const [creaturePictureArray, setCreaturePictureArry] = useState();
    
        const [nextLevelNumber, setNextLevelNumber] = useState(10);

        const[userMagic, setUserMagic]=useState(0);
        
        const[creaturePictureIndex, setCreaturePictureIndex] = useState(0);


        function EggOne(){
                setCreaturePictureArry(egg1);
        }
        function EggTwo(){
            setCreaturePictureArry(egg2);
        }

        function MagicOne(){
            setUserMagic(10);
        }

        function MagicFive(){
                setUserMagic(50);
        }

        function MagicSeven(){
            setUserMagic(70);
        }

        function MagicTen(){
            setUserMagic(100);
        }

        function MagicClear(){
            setUserMagic(0);
        }

        function LevelClear(){
            setNextLevelNumber(10);

        }

        function ResetCreature(){
            setCreaturePicture(egg);
            setCreaturePictureIndex(0);
        }

        function CheckMagic(){
            if(creaturePictureIndex < levelAmount.length){

            if (userMagic >= nextLevelNumber){
                var newIndex = creaturePictureIndex +1;
                    setCreaturePicture(creaturePictureArray[creaturePictureIndex]);
                    setNextLevelNumber(levelAmount[creaturePictureIndex]);
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

    return (<View style ={styles.container}>
        <View style ={styles.infoContainer}>
            <View style={styles.titleContainer}>
                        <Text style ={styles.title}>Creature Screen</Text>
            </View>
            <View style={styles.magicContainer}>
                        <Text>The amount of magic needed</Text>
            </View> 

            <View style={styles.magicContainer}>
                        
                        <Text style ={styles.test}>User Magic: {userMagic}</Text>
                        <Text style ={styles.test}>LevelNumber: {nextLevelNumber}</Text>

            </View> 

            <View style = {styles.testCotnainer}>
                <View style ={styles.groupInfo}>
                    <Button title ="set egg 1" onPress={EggOne}></Button>
                </View>

                <View style ={styles.groupInfo}>
                    <Button title ="set egg 2" onPress={EggTwo}></Button>
                </View>
                    

         </View>

                <View style = {styles.testCotnainer}>
                <View style ={styles.groupInfo}>
                        <Button title =" User 10" onPress={MagicOne}></Button>        
                    </View>
                    <View style ={styles.groupInfo}>
                        <Button title =" User 50" onPress={MagicFive}></Button>        
                    </View>
                    <View style ={styles.groupInfo}>
                        <Button title ="User 70" onPress={MagicSeven}></Button>
                    </View>
                    <View style ={styles.groupInfo}>
                        <Button title ="User 100" onPress={MagicTen}></Button> 
                    </View>

                    
                </View>



                <View style = {styles.testCotnainer}>
                <View style ={styles.groupInfo}>
                        <Button title ="Reset Magic" onPress={MagicClear}></Button>
                    </View>

                    <View style ={styles.groupInfo}>
                        <Button title ="Reset Level" onPress={LevelClear}></Button>
                    </View>

                    
                    <View style ={styles.groupInfo}>
                        <Button title ="Reset Creature" onPress={ResetCreature}></Button>
                    </View>
                    
                </View>
            <View style={styles.imageContainer}>
                    <Image style={styles.imageContainer} source={creaturePicture}/>
                </View>
            <View style={styles.useMagicContainer}>
                        <Pressable style={styles.button} onPress={CheckMagic}><Text style={styles.title}>Enchant </Text></Pressable>
            </View>

        </View>

    </View>
    );
}

export default CreatureScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    infoContainer:{
        flex:1,
        margin: 30,
    },
    title:{
        textAlign: "center",
    },
    imageContainer:{
        flex: 5,
        margin: 10,
        padding: 10,
        width: 300,
        height: 300,
        alignContent: "center",
        justifyContent: "center",

    },
    image: {
            width: 100,
            height: 100,
    },
    titleContainer:{
        flex: 1,
    },
    magicContainer:{
        flex: 1,
        magin: 10,
    },
    useMagicContainer:{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
    },
    button:{
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
});