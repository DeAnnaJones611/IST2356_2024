import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,Image,Linking } from 'react-native';

export default function App() {
  return (
   <>
   <StatusBar style= 'light' />
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style= {styles.image} source = {require("./assets/Images/picture.png")}/>

      </View>

      <View style={styles.infromationContainer}>
      <Text style = {styles.text} >De'Anna Jones</Text>
			<Text style = {styles.text} onPress= {() =>Linking.openURL("tel: +1 9542405767")}> Phone: 954-240-5767</Text>
			<Text style = {styles.text} onPress ={() => Linking.openURL("mailto: deannajones611@gmail.com")} > deannajones611@gmail.com</Text>
			<Text style = {styles.text} onPress={() => Linking.openURL("https://github.com/DeAnnaJones611")}> Github.com </Text>
      
      
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
    paddingRight:20,
    width: "100%",
  },

  image: {
    height: 250,
		width: "40%",
		resizeMode: "cover",
		borderWidth: 3,
		borderColor:"#7b3804",
    marginTop:150
  },
  infromationContainer:{
    flex: 4,
		position: "right",
    borderWidth: 5,
		borderColor:"#7b3804",
    backgroundColor: "#FFFFFF"

  },
  text: {
		fontSize: 20,
		color: "#601A35",
		fontStyle: "italic",
		marginBottom: 10,
	},
});
