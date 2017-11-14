import React from 'react';
import {Button, StyleSheet, Text, TextInput, View, Navigator} from 'react-native';
import PartsList from "./PartsList";
import { NavigationActions } from 'react-navigation';
import * as Communications from "react-native-communications";

export default class Main extends React.Component {
    data: Array;

    constructor(props) {
        super(props);
        this.data = [];
        this.estimatedPriceField = 0;
        this.state = {sellerEmailField: "", carPartNameField : "", estimatedPriceField: ""};
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textBox}
                           placeholder = "Car part"
                           onChangeText = {(carPart) => {
                               this.setState({carPartNameField: carPart})
                           }}
                           value =  {this.state.carPartNameField}/>

                <TextInput style={styles.textBox}
                           placeholder = "price"
                           onChangeText = {(price) => {
                               this.setState({estimatedPriceField: price})
                           }}
                           value =  {this.state.estimatedPriceField.toString()}/>

                <TextInput style={styles.textBox}
                           placeholder = "email"
                           onChangeText = {(sellerEmailField) => {
                               this.setState({sellerEmailField: sellerEmailField})
                           }}
                           value =  {this.state.sellerEmailField}/>



                <Text>{this.state.carPartNameField}</Text>
                <Text>{this.state.estimatedPriceField}</Text>
                <Text>{this.state.sellerEmailField}</Text>

                <Button style={styles.button}
                    onPress={this.addToData}
                    title = "Add"
                    color="#841584"
                />

                <Button style={styles.button}
                    onPress={() => this.props.navigation.navigate('PartsList')}
                    title = "Go to list"
                    color="#841584"
                />

                <Button style={styles.button}
                    onPress={this.sendMail}
                    title = "Send mail"
                    color="#841584"
                />
            </View>
        );
    }

    addToData() {
        Array.push(data,this.state);
        id++;
    }

    sendMail() {
        Communications.email("send mail to", [], null, "car part name", 'Iti ofer atat');
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    textBox: {
        backgroundColor: '#111',
        padding: 10,
        width: "100%",
        color: '#fff'
    },
    button: {
        margin: 10,
        width: "100%",
        color: "red",
    },
});