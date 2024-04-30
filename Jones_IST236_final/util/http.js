import axios, { all } from "axios";


const BACKEND_URL = "https://mobilewebappfinal-default-rtdb.firebaseio.com";


export async function storeImages(imagesData){
    const response  = await axios.post(BACKEND_URL + "/images", imagesData);
    const id = response.data.name;
    return id;

}

export async function fetchImages(){
    const response = await axios.get(BACKEND_URL + "/images");

    const allImages = [];

    for (const key in response.data){
        const imageObj = {
            id: key,
            url: response.data[key].url,
            description: response.data[key].description,
            type: response.data[key].type,
        };


        allImages.push(imageObj);
    }
    console.log("All Images "+ allImages);
    return allImages;

}