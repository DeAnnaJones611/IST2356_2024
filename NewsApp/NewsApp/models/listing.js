class Listing {

  //The structure of all the listings 
  //All the parts that are passed
    constructor(
      id,
      type,
      headline,
      date,
      author,
      agency,
      imageUrl,
      description
    ) {
      this.id = id;
      this.type = type;
      this.headline = headline;
      this.date = date;
      this.author = author;
      this.agency = agency;
      this.imageUrl = imageUrl;
      this.description = description;
    }
  
    toString() {
      return `${this.type} - Headline: $${this.headline} - Date: ${this.date} - Author: ${this.author} - Agency: ${this.agency}  - Description: ${this.description} - Image URL: ${this.imageUrl}`;
    }
  }
  
  export default Listing;
  