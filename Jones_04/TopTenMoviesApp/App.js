import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

//This imports the componet 
import MovieItems from './components/MovieItems';


export default function App() {
  //The data that is used for the componet
  const [movieItems, setMovieItems] = useState([
      {
        name: "Nezha",
        poster: require("./assets/images/nezha.png"),
        rank: "10"
      },
      {
        name: "Over the Moon",
        poster: require("./assets/images/over.png"),
        rank: "9"
      },
      {
        name: "Everything Everywhere All at Once",
        poster: require("./assets/images/EEAAO.png"),
        rank: "8"
      },
      {
        name: "Kung Fu Panda 2",
        poster: require("./assets/images/panda.png"),
        rank: "7"
      },
      {
        name: "Dr. Strange",
        poster: require("./assets/images/dr.png"),
        rank: "6"
      },
      {
        name: "5th Element",
        poster: require("./assets/images/5th.png"),
        rank: "5"
      },
      {
        name: "Hercules/Mulan",
        poster: require("./assets/images/HM.png"),
        rank: "4"
      },
      {
        name: "Hamiltion",
        poster: require("./assets/images/ham.png"),
        rank: "3"
      },
      {
        name: "My Neighbor Totoro/Ponyo",
        poster: require("./assets/images/PT.png"),
        rank: "2"
      },
      {
        name: "American Ultra",
        poster: require("./assets/images/america.png"),
        rank: "1"
      },

  ]);


  return (
<>
{/**/}
<StatusBar style="dark"/>
<SafeAreaView style = {styles.rootContainer}>
  {/*This is the title of the enitre app*/}
    <View style = {styles.titleContainer}>
      <Text style = {styles.title}> Top Tenish Movies</Text>
    </View>

    <View style = {styles.listContainer}>
      {/*The scroll view renders everything 
      with the data form above */}
        <ScrollView>

          {/*Formats the name, image, and rank of each componet*/}
          {movieItems.map((itemData) =>(
              <MovieItems
                  name = {itemData.name}
                  image = { itemData.poster}
                  rank= {itemData.rank}
              />
          ))}
        </ScrollView>
    </View>

</SafeAreaView >
</>


  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#ADADC9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },

    titleContainer:{
      flex: 1,
      justifyContent: "center",
      marginBottom:20,
      paddingHorizontal: 5,
      borderWidth: 5,
      borderRadius: 10,
      borderColor: "#022D36",
      backgroundColor: "#59788E",
    },
    title: {
      color: "#87CDEE",
      fontSize: 35,
      fontWeight: "bold",
    },
    listContainer:{
      flex:8,
      width: "80%",
    },
});
