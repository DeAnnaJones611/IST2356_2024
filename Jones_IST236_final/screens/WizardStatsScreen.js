import { View, Text , Pressable, FlatList,ScrollView, StyleSheet,ImageBackground  } from "react-native";
import { AppContext } from '../store/app-context';
import { useState,useContext, useEffect } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import Colors from "../constants/colors";

function WiardStatsScreen(){
    const backpic = "https://th.bing.com/th/id/R.7439c0d057e52bb99e446debb5c30329?rik=GP0IVkQ38w2yEQ&pid=ImgRaw&r=0";
    const insets =  useSafeAreaInsets();
    const appCtx = useContext(AppContext);

    function FindPrcent(total, correct){
        const fullPrecent  =  correct /total;

        if (total == 0){
            return ("No Precent Calculated");
        }
        else{  return fullPrecent;}
    }
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
        <Title>Wizard Stats Screen</Title>
           
                <ScrollView style={styles.scrollViewDesign}>
                <View style ={styles.statSectionContainer}>
                <Text style ={styles.title}>Your Magic</Text>
                        <Text style ={styles.info}>
                            Your Magic {appCtx.userMagic}
                        </Text>
                </View>
                    <View style ={styles.statSectionContainer}>
                    <Text style ={styles.title}>Addtion</Text>
                        <Text style ={styles.info}>
                            Number of  Questions: {appCtx.addTotalEq}
                        </Text>
                        <Text style ={styles.info}>
                            Number of Correct: {appCtx.addCorrectEq}
                        </Text>
                        <Text style ={styles.info}>
                            Precentage : {FindPrcent(appCtx.addTotalEq, appCtx.addCorrectEq)} 
                        </Text>

                    </View>

                    <View style ={styles.statSectionContainer}>
                        <Text style ={styles.title}>Subtraction</Text>
                        <Text style ={styles.info}>
                            Number of  Questions: {appCtx.subTotalEq}
                        </Text>
                        <Text style ={styles.info}>
                            Number of Correct: {appCtx.subCorrectEq}
                        </Text>
                        <Text style ={styles.info}>
                            Precentage : {FindPrcent(appCtx.subTotalEq, appCtx.subCorrectEq)} 
                        </Text>
                    </View>


                    <View style ={styles.statSectionContainer}>
                        <Text style ={styles.title}>Multiplication</Text>
                        <Text style ={styles.info}>
                            Number of  Questions: {appCtx.mulTotalEq}
                        </Text>
                        <Text style ={styles.info}>
                            Number of Correct: {appCtx.mulCorrectEq}
                        </Text>
                        <Text style ={styles.info}>
                            Precentage : {FindPrcent(appCtx.mulTotalEq, appCtx.mulCorrectEq)} 
                        </Text>
                    </View>

                    <View style ={styles.statSectionContainer}>
                        <Text style ={styles.title}>Division</Text>
                        <Text style ={styles.info}>
                            Number of  Questions: {appCtx.divTotalEq}
                        </Text>
                        <Text style ={styles.info}>
                            Number of Correct: {appCtx.divCorrectEq}
                        </Text>
                        
                        <Text style ={styles.info}>
                            Precentage : {FindPrcent(appCtx.divTotalEq, appCtx.divCorrectEq)} 
                        </Text>
                    </View>
                </ScrollView>
           

        </View>

    </View>
    
    </ImageBackground>
    );
}

export default WiardStatsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
    },
    infoContainer:{
        margin: 30,
        flex: 1,
    },
    statSectionContainer:{
        
        padding: 10,
        marginBottom: 10,
        backgroundColor: Colors.accent200,

    },
    title:{
        textAlign: "center",
        marginBottom: 5,
        flex: 1,
    },
    info:{
        margin: 10,
    },
    backgroundImage:{
        opacity: 0.7,
    },
    scrollViewDesign:{
        margin: 20,
        padding: 2,
        marginBottom: 10,
        flex: 2
    },

});