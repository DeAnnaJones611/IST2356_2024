import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {useFonts} from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCallback } from 'react';

import { useState, useMemo } from "react";

import Colors from "./constants/colors";
import HomeScreen from "./screens/HomeScreen";
import ReviewScreen from "./screens/HomeScreen";

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    mountain: require("./assets/fonts/Mountain.ttf"),
});

const onLayoutRootView = useCallback(async () => {
  if(fontsLoaded || fontError){
    await SplashScreen.hideAsync();
  }
})
  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );

  const [repairTimeId, setRepairTimeId] = useState(0);
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

  function setServicesHandler(id) {
    setServices((prevService) =>
      prevService.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  function setNewsletterHandler() {
    setNewsletter((previous) => !previous);
  }

  function setRentalMembershipHandler() {
    setRentalMembership((previous) => !previous);
  }

  function homeScreenHandler() {
    setCurrentPrice(0);
    setCurrentScreen("home");
  }

  function orderReviewHandler() {
    let price = 0;

    for (let i = 0; i < services.length; i++) {
      if (services[i].value) {
        price = price + services[i].price;
      }
    }

    if (rentalMembership) {
      price = price + 100;
    }

    price += repairTimeRadioButtons[repairTimeId].price;

    setCurrentPrice(price);
    setCurrentScreen("review");
  }

  let screen = (
    <HomeScreen
      repairTimeId={repairTimeId}
      services={services}
      newsletter={newsletter}
      rentalMembership={rentalMembership}

      repairTimeRadioButtons={repairTimeRadioButtons} 
        
      onSetRepairTimeID={setRepairTimeId}
      onSetServices={setServicesHandler}
      onSetNewsLetter={setNewsletterHandler}
      onSetRentalMembership={setRentalMembershipHandler}


      onNext={orderReviewHandler}
    />
  );

  if (currentScreen == "review") {
    screen = (
      <ReviewScreen
        repairTime={repairTimeRadioButtons[repairTimeId].value}
        services={services}
        newsletter={newsletter}
        rentalmembership={rentalMembership}
        price={currentPrice}
        onNext={homeScreenHandler}
      />
    );
  }

  if(!fontsLoaded && !fontError) {
    return null;
  }
  else{
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: "center",
    justifyContent: "center",
  },
});
