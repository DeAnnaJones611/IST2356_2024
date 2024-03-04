import { View, Text, StyleSheet, ScrollView, Switch, ImageBackground, } from "react-native";
import Title from "../components/Title";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RadioGroup } from "react-native-radio-buttons-group";
import Colors from "../constants/colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import NavButton from "../components/NavButton";


function HomeScreen(props) {
  const insets = useSafeAreaInsets();

  //console.log(props.repairTimeRadioButtons)
    console.log(props.services)
    console.log("Servies"+props.onSetServices)
    console.log("Letter" +props.onSetNewsLetter)
  return (

    <ImageBackground
    source = {require("../assets/images/bikeHome.png")}
    resizeMode="cover"
    style = {styles.rootContainer}
    imageStyle = {styles.backgroundImage}
>
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Bike Shop</Title>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.radioContainer}>
          <Text style={styles.radioHeader}> Service Time </Text>
          <RadioGroup
            radioButtons={props.repairTimeRadioButtons}
            onPress={props.onSetRepairTimeID}
            selectedId={props.repairTimeId}
            layout="row"
            containerStyle={styles.radioGroup}
            labelStyle={styles.radioGroupLabels}
          />
        </View>

        <View style = {styles.checkBoxContainer}>
          <Text style={styles.checkBoxHeader}>Services</Text>
          <View style={styles.checkBoxSubContainer}>
                  {props.services.map((item) => {
                      return(<BouncyCheckbox
                            key={item.id}
                            text={item.name}
                            onPress = {props.onSetServices.bind(this,item.id)}
                            textStyle = {{
                              textDecorationLine: "none",
                              color: Colors.primary500,
                            }}
                            innerIconStyle = {{
                              borderRadius: 0,
                              borderColor: Colors.primary500,
                            }}
                            iconStyle={{
                              borderRadius:0, 
                            }}
                            fillColor={Colors.primary800}
                            style={{
                              padding:2,
                            }}
                      />)
                      ;
                      

                  })}
          </View>
        </View>


        <View style={styles.switchContainer}>
          <View style={styles.subSwitchContainer}>
            <Text style={styles.switchLabel}>News Letter</Text>
            <Switch 
              onValueChange = {props.onSetNewsLetter}
              value = {props.newsletter}
              thumbColor={
                props.newsletter ? Colors.primary500 : Colors.primary800
              }
              trackColor = {{false: Colors.primary500, true: Colors.primary800}}
              />
              </View>

              <View style={styles.subSwitchContainer}>
            <Text style={styles.switchLabel}>Membership</Text>
            <Switch 
              onValueChange = {props.onSetRentalMembership}
              value = {props.rentalMembership}
              thumbColor={
                props.rentalMembership ? Colors.primary500 : Colors.primary800
              }
              trackColor = {{false: Colors.primary500, true: Colors.primary800}}
              />
              </View>


        </View>

        <View style = {styles.buttonContainer}>
          <NavButton onPress = {props.onNext}> Review Order</NavButton>
        </View>

      </ScrollView>
    </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage:{
    opacity: 0.3,
},
  titleContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
    paddingVertical: 3,
    paddingBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: Colors.primary300,
    borderColor: Colors.primary500,
  },
  scrollContainer:{
    flex: 1,
  },
  radioContainer:{
    justifyContent: "center",
    alignItems: "center"
  },

  radioHeader:{
    fontSize: 30,
    color: Colors.primary800
  },
  radioGroup:{
    paddingBottom: 20,
  },
  radioGroupLabels:{
    fontSize: 15,
    color: Colors.primary800,
  },
  checkBoxContainer:{},
  checkBoxHeader:{
    fontSize: 20,
    color: Colors.primary500
  },
  checkBoxSubContainer:{
    padding: 2, 
  },

  switchContainer:{
    justifyContent: "space-between",
  },
  subSwitchContainer:{
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
  },
  switchLabel:{
    color: Colors.primary500,
    fontSize: 20,
  },
  buttonContainer:{
    alignItems: "center",
    backgroundColor: Colors.primary300,
    borderColor: Colors.primary500,
    borderWidth: 2,
    borderRadius: 5,

  },

});
