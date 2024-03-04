import {View, Text} from "react-native";
import Title from "../components/Title";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";



function ReviewScreen(props){
    const insets = useSafeAreaInsets();
    return(
        <linearGradient
        colors = {[Colors.accent500, Colors.primary500]}
        style={styles.rootContainer}
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

<View>
                <Title>Order Summary</Title>
            </View>

            <View style= {styles.subTitleContainer}>
                <Text style={subTitle}>Your Order has been placed with your order details blow</Text>
            </View>


            <View style = {bikeInfoContainer}>
                    <Text style ={styles.bikeTitle}>RepairTime</Text>
                    <Text style={styles.bikeInfo}>{props.repairtime}</Text>


                    
                    <Text style ={styles.bikeTitle}>Services</Text>
                    {props.services.map((item) => {
                        if(item.value){
                            return(
                                <Text key={item.id} style={styles.bikeInfo}>
                                    {item.name}
                                </Text>
                            );
                        }
                    })}



                    <Text style ={styles.bikeTitle}>Personal Infomation</Text>
                    <Text style={styles.bikeInfo}>{props.newsletter ? "New letter" : ""}</Text>
                    <Text style={styles.bikeInfo}>{props.rentalMembership ? "Rental Membership" : ""}</Text>


                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subTitle}>Subtotal: ${props.price.toFixed(2)} </Text>
                        
                        <Text style={styles.subTitle}>Sales Tax: ${props.price * 0.06} </Text>
                        
                        <Text style={styles.subTitle}>Subtotal: ${(props.price + props.price*0.06).toFixed(2)} </Text>
                    </View>
                    <View>
                        <NavButton onPress={props.onNext}> Return Home</NavButton>
                    </View>
            </View>
        </View>

</linearGradient>
    );
}

export default ReviewScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1, 
    },
    titleContainer:{
        marginBottom: 10,
        marginHorizontal: 10,
        paddingVertical: 3,
        paddingBottom: 10,
        borderWidth:  2,
        borderRadius: 5,

    },

    subTitleContainer:{
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },

    subTitle:{
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",

    },

    bikeInfoContainer:{
        flex: 3,
    },

    bikeTitle:{
        fontSize: 20,
    },

    bikeInfo:{
        textAlign: "center",
        fontSize: 17,
        forntWeight: "bold"
    },


});