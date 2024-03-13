import { useLayoutEffect } from "react";
import {View, Text, FlatList, } from "react-native";
import { DESTINATION, COUNTRY } from "../data/dummy-data";
import DestinationItemItem from "../componets/DestinationItem";



function CountryOverviewScreen(props){
    const countryId = props.route.params.countryId;

    console.log("color" +props.color);
    useLayoutEffect(() => {
        const country = COUNTRY.find((country) => country.id === countryId);
        props.navigation.setOptions({title: country ? country.name : null});
    }, [countryId, props.navigation]);

    const displayedDestination = DESTINATION.filter((destinationItem) => {
        return destinationItem.countryId === countryId;
    });

    function renderDestinationItem(itemData){
        const destinationItemProps = {
            name: itemData.item.name,
            imageUrl: itemData.item.imageUrl,
            avgCost: itemData.item.avgCost,
            foundYear: itemData.item.foundedYear,
            rating: itemData.item.rating,
            listIndex: itemData.index
        }
        return <DestinationItemItem {...destinationItemProps}/>
    };

    return (
        <View>
           <FlatList
            data={displayedDestination}
            keyExtractor={(item) => item.id}
            renderItem = {renderDestinationItem}
           />
        </View>
    );
}


export default CountryOverviewScreen;