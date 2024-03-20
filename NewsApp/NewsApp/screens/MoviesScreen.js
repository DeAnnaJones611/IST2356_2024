import List from "../components/List/List";
import { LISTINGS } from "../data/dummy_data";

function  MoivesScreen() {

  //Find the data with the movie type
  //Prints the item wout with the list componet format
  const type = "Movies";
  const displayedListings = LISTINGS.filter((listingItem) => {
    return listingItem.type === type;
  });

  return <List items={displayedListings} />;
}

export default MoivesScreen;
