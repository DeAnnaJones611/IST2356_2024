import { View, Text,Button, StyleSheet } from "react-native";


function LandingScreen(navigation){

    function selectedHandler(){
        navigation.navigate('HomeScreen');
        //navigation.navigate.replace("TopStackNavigator");
    
     }

    return (
    <View style ={styles.container}>
        <Text>This is the landing screen</Text>

        <Button title ="Next" onPress={selectedHandler}/>
    </View>

    )
}

export default LandingScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});

