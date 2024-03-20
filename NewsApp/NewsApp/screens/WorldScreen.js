import List from "../components/List/List";
import { LISTINGS } from "../data/dummy_data";


  //Find the data with the World type
  //Prints the item wout with the list componet format
function  WorldScreen() {
  const type = "World";
  const displayedListings = LISTINGS.filter((listingItem) => {
    return listingItem.type === type;
  });

  return <List items={displayedListings} />;
}

export default WorldScreen;
