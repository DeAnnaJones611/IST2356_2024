import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,Image,Linking } from 'react-native';

export default function App() {
  return (
   <>
   <StatusBar style= 'light' />
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style= {styles.image} source = {require("./assets/Images/Resturant.png")}/>

      </View>

      <View style={styles.infromationContainer}>
      <Text style = {styles.text} >Red Lobster</Text>
			<Text style = {styles.text} onPress= {() =>Linking.openURL("https://www.redlobster.com/seafood-restaurants/locations/nc/gastonia/200-n-new-hope-road")}> www.redlobster.com</Text>
			<Text style = {styles.text} onPress ={() => Linking.openURL("tel:+17048683884")} > (800) 562-7837 </Text>
			<Text style = {styles.text} onPress={() => Linking.openURL("https://maps.app.goo.gl/hzh7wzL3oKvqp6e8A")}> Open in Google Maps </Text>
      
      
      </View>


    </SafeAreaView>

   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#800000"
  },

  imageContainer:{
		flex:3,
		paddingTop: 40,
    width: "100%",
  },

  image: {
    height: 300,
		width: "100%",
		resizeMode: "cover",
		borderWidth: 3,
		borderColor:"#7b3804"
  },
  infromationContainer:{
    flex: 4,
		justifyContent: "center",
    borderWidth: 5,
		borderColor:"#7b3804"

  },
  text: {
		fontSize: 20,
		color: "#e5e9e4",
		fontStyle: "italic",
		marginBottom: 10,
	},
});
