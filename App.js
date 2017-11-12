import React from 'react';
import {StackNavigator} from 'react-navigation';
import PartsList from "./PartsList";
import Main from "./Main";
import EditCarPart from "./EditPart";
global.data = [{sellerEmailField: "test1@gmail.com", carPartNameField : "front bumper", estimatedPriceField: "250"},
    {sellerEmailField: "test2@gmail.com", carPartNameField : "rear bumper", estimatedPriceField: "250"},
    {sellerEmailField: "test3@gmail.com", carPartNameField : "wheels", estimatedPriceField: "500"},
    {sellerEmailField: "test4@gmail.com", carPartNameField : "side skirt", estimatedPriceField: "100"},
    {sellerEmailField: "test5@gmail.com", carPartNameField : "tinted windows", estimatedPriceField: "100"},
    {sellerEmailField: "test6@gmail.com", carPartNameField : "headlights", estimatedPriceField: "50"},
    {sellerEmailField: "test7@gmail.com", carPartNameField : "recaro interior", estimatedPriceField: "1000"}];
const ModalStack = StackNavigator({
    Home: {
        screen: Main,
    },
    PartsList: {
        screen: PartsList,
    },
    EditPart: {
        screen: EditCarPart,
    },
});

export default ModalStack;
