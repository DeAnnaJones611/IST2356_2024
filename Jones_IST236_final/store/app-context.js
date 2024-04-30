import { createContext, useReducer, useState } from "react";

export const AppContext =  createContext({
    oneNumber : [],
    twoNumber: [],
    divisionList: [],
    anwserDivisionList: [],
    nextLevel : [],
    userMagic: [],
    eggPic: [],
    userName: [],
    increaseMagic: [],


    // Keep track of stats
    additionTotalEquations: [],
    additionCorrectEquations: [],

    subtracationTotalEquations: [],
    subtractionCorrectEquations: [],

    multiplicationTotalEquations: [],
    multiplicationCorrectEquations: [],

    divisionTotalEquations: [],
    divisionCorrectEquations: [],

    setAdditionAllEquations: (number) => {},
    setAdditionCorrectEquations: (number) =>{},

    setSubtractionAllEquations: (number) => {},
    setSubtractionCorrectEquations: (number) => {},

    setMultiplicationAllEquations: (number) => {},
    setMultiplicationCorrectEquations: (number) => {},

    setDivisionAllEquations: (number) => {},
    setDivisionCorrectEquations: (number) => {},


    setUserMagic: (addMagic) => {},
    setEggLevel: () => {}, 
    setUserEgg:(userInput) => {},
    setNameUser: (name) => {},
    setNumberOne: (number) => {},
    setNumberTwo: (number) => {},
    setIncreaseMagic: (magic) => {},
    setDivisionList: (list) =>{},
    setAnswerDivisionList: (list) =>{},


});



function AppContextProvider({children}){
   // const [imageState, dispatch] = useReducer(GetAll, DUMMY_ORDERS);
    const [oneNumber, setOneNumber] = useState();
    const [twoNumber, setTwoNumber] =  useState();
    const [userMagic, setUserMagic] = useState(500);
    const [eggLevel, setLevelEgg] =  useState(10);
    const [userEgg, setEggUser] = useState([]);
    const [increaseIndex, setIncreaseIndex] = useState(0);
    const [userName, setUserName] = useState();
    const [increaseMagic, setIncreaseMagic] = useState();
    const [divisionList, setDivisionList] = useState([])
    const [anwserDivisionList, setAnswerDivisionList] =  useState([]);


    //Used to keep Stats
    const [additionTotalEquations,setAdditionAllEquations] = useState(0);
    const [additionCorrectEquations,setAdditionCorrectEquations] = useState(0);

    const [subtracationTotalEquations,setSubtractionAllEquations] = useState(0);
    const [subtractionCorrectEquations,setSubtractionCorrectEquations] = useState(0);

    const [multiplicationTotalEquations,setMultiplicationAllEquations] = useState(0);
    const [multiplicationCorrectEquations,setMultiplicationCorrectEquations] = useState(0);

    const [divisionTotalEquations,setDivisionAllEquations] = useState(0);
    const [divisionCorrectEquations,setDivisionCorrectEquations] = useState(0);
    
    //const [magicAmount, setMagicAmount] = useState(userMagic);


function setMagicUser(addMagic){
   // userMagic + addMagic
   //var magicAmount = userMagic;
    setUserMagic(addMagic);
}
function setEggLevel(){
    setIncreaseIndex(increaseIndex + 1);
    const AllEggLevel = [ 50, 100, 150, 200];
    setLevelEgg(AllEggLevel[increaseIndex]);
}
    
function setNameUser(name){
    setUserName(name);
}

function setNumberOne(number){
    setOneNumber(number);
}

function setNumberTwo(number){
    setTwoNumber(number);
}

function setUserEgg(userInput){
    if (userInput == 1){
         setEggUser([require("../assets/images/Egg1.png"),require("../assets/images/Egg1stage1.png"), require("../assets/images/Egg1stage2.png"), require("../assets/images/Egg1stage3.png"), require("../assets/images/Egg1stage4.png")]);
    }
    if (userInput == 2){
        setEggUser( [require("../assets/images/Egg2.png"), require("../assets/images/Egg2stage1.png"), require("../assets/images/Egg2stage2.png"), require("../assets/images/Egg2stage3.png"), require("../assets/images/Egg2stage4.png")]);
    }

}

function setMagicIncrease(magic){
    setIncreaseMagic(magic);
}

function setListDivision(list){
    setDivisionList(list);
}


function setAnswerListDivision(list){
    setAnswerDivisionList(list);
}

//This function increases the stats of the numbers

function setAddAllEq(number){
    setAdditionAllEquations(number);
}

function setAddCorrectEq(number){
    setAdditionCorrectEquations(number);
}




function setSubAllEq(number){
    setSubtractionAllEquations(number);
}

function setSubCorrectEq(number){
    setSubtractionCorrectEquations(number);
}


function setMulAllEq(number){
    setMultiplicationAllEquations(number);
}


function setMulCorrectEq(number){
    setMultiplicationCorrectEquations(number);
}



function setDivAllEq(number){
    setDivisionAllEquations(number);
}

function setDivCorrectEq(number){
    setDivisionCorrectEquations(number);
}



const value = {
        oneNumber : oneNumber,
        twoNumber :twoNumber,
        divisionList: divisionList,
        anwserDivisionList:anwserDivisionList,
        nextLevel : eggLevel,
        userMagic: userMagic,
        eggPic: userEgg,
        userName: userName,
        increaseMagic: increaseMagic,

        //Used to keep the stats of the player
        addTotalEq:additionTotalEquations,
        addCorrectEq :additionCorrectEquations,

        subTotalEq :subtracationTotalEquations,
        subCorrectEq: subtractionCorrectEquations,

        mulTotalEq:multiplicationTotalEquations,
        mulCorrectEq: multiplicationCorrectEquations,

        divTotalEq: divisionTotalEquations,
        divCorrectEq: divisionCorrectEquations,

        setNumberOne: setNumberOne,
        setNumberTwo: setNumberTwo, 
        setMagicUser: setMagicUser,
        setEggLevel: setEggLevel, 
        setUserEgg:setUserEgg,
        setNameUser: setNameUser,
        setMagicIncrease:setMagicIncrease,
        setListDivision:setListDivision,
        setAnswerListDivision:setAnswerListDivision,

        //used to keep the stats of the user
        setAddAllEq:setAddAllEq,
        setAddCorrectEq:setAddCorrectEq,
        setSubAllEq:setSubAllEq,
        setSubCorrectEq:setSubCorrectEq,
        setMulAllEq:setMulAllEq,
        setMulCorrectEq:setMulCorrectEq,
        setDivAllEq:setDivAllEq,
        setDivCorrectEq:setDivCorrectEq,
    };
return(
    <AppContext.Provider value = {value}>{children}</AppContext.Provider>
);
}

export default AppContextProvider;